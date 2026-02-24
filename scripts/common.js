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

// Background Animation
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("aquarium-bg");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function isDarkMode() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  class Star {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.4;
      this.speed = Math.random() * 0.1 + 0.05;
    }
    update() {
      this.y -= this.speed;
      if (this.y < 0) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.getColor();
      ctx.fillStyle = this.getColor();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    getColor() {
      return isDarkMode() ? "#27455a" : "#ffffff";
    }
  }

  const stars = Array.from({ length: 150 }, () => new Star());

  function drawNebula() {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (isDarkMode()) {
      gradient.addColorStop(0, "rgba(10,30,50,0.9)");
      gradient.addColorStop(0.5, "rgba(20,40,60,0.6)");
      gradient.addColorStop(1, "rgba(0,0,20,1)");
    } else {
      gradient.addColorStop(0, "rgba(255,255,255,0.2)");
      gradient.addColorStop(0.5, "rgba(63,101,130,0.1)");
      gradient.addColorStop(1, "rgba(255,255,255,0.05)");
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function animate() {
    ctx.fillStyle = isDarkMode()
      ? "rgba(0,0,0,0.15)"
      : "rgba(255,255,255,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawNebula();
    stars.forEach((s) => {
      s.update();
      s.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Observe theme changes
  const observer = new MutationObserver(() => animate());
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
});
