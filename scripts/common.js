document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const modeSwitch = document.querySelector(".mode-switch");
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  }

  if (modeSwitch) {
    modeSwitch.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      hamburger.classList.toggle("active");

      // Animate hamburger bars
      const bars = hamburger.querySelectorAll(".bar");
      if (mobileNav.classList.contains("active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
      } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
      }
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav a, .mobile-nav a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (
      linkPath === currentPath ||
      (currentPath === "index.html" && linkPath === "index.html") ||
      (currentPath === "" && linkPath === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // Scroll Animation
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      "section, .skill-card, .project-card, .resume-card, .blog-card, .hero-content, .contact-form-wrapper, .contact-info, .project-item, .project-detail, .blog-featured-image img, .blog-content img",
    )
    .forEach((el) => {
      el.style.opacity = "0";
      observer.observe(el);
    });
});

// Form Submission
function sendMail(event) {
  event.preventDefault();

  const button = document.querySelector(".btn-submit");
  button.innerText = "Sending...";
  button.disabled = true;

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_n3h51us", "template_k9r9jog", params).then(
    function () {
      showToast("Message sent successfully! ✅", "success");

      button.innerText = "Submit";
      button.disabled = false;
      document.getElementById("contact-form").reset();
    },
    function (error) {
      showToast("Failed to send message. ❌", "error");

      button.innerText = "Submit";
      button.disabled = false;
    },
  );
}

// Toast Notification
function showToast(message, type) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;

  toast.className = "toast show " + type;

  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}
