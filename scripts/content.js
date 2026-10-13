/* ======================================
   Karl Guiao Portfolio — content module
   ====================================== */
(function () {
  var A = function (f) {
    return "assets/" + f;
  };

  var SOCIAL_GFL = [
    ["Github", "github-icon.svg", "https://github.com/karlguiao"],
    ["Facebook", "fb-icon.svg", "https://www.facebook.com/karlguiao143"],
    [
      "LinkedIn",
      "linkedin-icon.svg",
      "https://www.linkedin.com/in/karl-guiao/",
    ],
  ];

  var NAV = [
    ["Home", "index.html"],
    ["About", "about.html"],
    ["Projects", "projects.html"],
    ["Resume", "resume.html"],
    ["Blogs", "blogs.html"],
    ["Contact", "contact.html"],
  ];

  /* ---------- Projects (list) ---------- */
  var PROJECTS = [
    {
      title: "Charlie's Salon - Barber & Hair Styling Website",
      alt: "Charlie's Salon Website",
      thumb: A("charlie-salon-thumbnail.png"),
      desc: "A modern barber and salon website highlighting services, products, and appointments. Designed for easy navigation and a clean, professional user experience.",
      href: "charlie-salon.html",
    },
    {
      title: "Web Fox Esports - Gaming Community Website",
      alt: "Web Fox Esports Website",
      thumb: A("web-fox-esports-thumbnail.png"),
      desc: "A responsive esports website showcasing teams, news, and community features with modern design and engaging UX.",
      href: "web-fox-esports.html",
    },
    {
      title: "Stand Speak Act - Social Awareness & Blog Platform",
      alt: "Stand Speak Act Website",
      thumb: A("stand-speak-act-thumbnail.png"),
      desc: "An educational blog platform addressing social issues like misinformation and climate change with engaging and research-backed content.",
      href: "stand-speak-act.html",
    },
    {
      title: "Anibunnylist - Anime Blog Website",
      alt: "Anibunnylist Website",
      thumb: A("anibunnylist-thumbnail.png"),
      desc: "A WordPress-based anime blog, optimizing layout, typography, and navigation to enhance readability and content organization.",
      href: "anibunnylist.html",
    },
    {
      title: "Huan Coffee - Coffee Shop Website",
      alt: "Huan Coffee Website",
      thumb: A("huan-coffee-thumbnail.png"),
      desc: "A WordPress-based coffee shop website showcasing the menu, history, and signature drinks with a warm, inviting design.",
      href: "huan-coffee.html",
    },
    {
      title: "Karl Rental - Vehicle Rental & Booking Website",
      alt: "Karl Rental Website",
      thumb: A("karl-rental-thumbnail.png"),
      desc: "A web-based vehicle rental platform featuring real-time vehicle availability, dynamic filtering, booking management, user verification, and a simulated digital wallet.",
      href: "karl-rental.html",
    },
  ];

  /* ---------- Project detail pages ---------- */
  var PROJECT_DETAIL = {
    "charlie-salon": {
      title: "Charlie's Salon - Barber & Hair Styling Website",
      desc: [
        "Charlie's Salon is a responsive business website developed for a local small-scale salon in Angeles City, Pampanga. The purpose of this project is to provide the business with a professional online presence that showcases its services, builds credibility, and improves accessibility beyond social media platforms.",
      ],
      fields: [
        [
          "Features:",
          "Responsive layout, service sections, clean UI design, structured content presentation.",
        ],
        ["Technologies Used:", "HTML, CSS, JavaScript, GitHub Pages."],
      ],
      shots: [
        [A("charlie-home.jpg"), "Charlie Salon Homepage"],
        [A("charlie-services.jpg"), "Charlie Salon Services Section"],
        [A("charlie-contact.jpg"), "Charlie Salon Contact Section"],
      ],
      links: [
        ["Live Demo", "https://karlguiao.github.io/Charlie-Salon/"],
        ["GitHub Repository", "https://github.com/karlguiao/Charlie-Salon"],
      ],
    },
    "web-fox-esports": {
      title: "Web Fox Esports - Gaming Community Website",
      desc: [
        "Web Fox Esports is a responsive website designed for a competitive esports community. The site showcases team profiles, news updates, event schedules, and community engagement features. The goal of this project is to provide esports enthusiasts with a modern, interactive, and user-friendly platform.",
      ],
      fields: [
        [
          "Features:",
          "Team profiles, news and updates, event schedules, responsive layout, and community interaction sections.",
        ],
        ["Technologies Used:", "HTML, CSS, JavaScript, Canva, GitHub Pages."],
      ],
      shots: [
        [A("web-fox-esports-highlights.png"), "Web Fox Esports Highlights"],
        [A("web-fox-esports-home.png"), "Web Fox Esports Homepage"],
        [A("web-fox-esports-community.png"), "Web Fox Esports Community"],
      ],
      links: [
        ["Live Demo", "https://karlguiao.github.io/Web-Fox-Esports/"],
        ["GitHub Repository", "https://github.com/karlguiao/Web-Fox-Esports"],
      ],
    },
    "stand-speak-act": {
      title: "Stand Speak Act - Social Awareness & Blog Platform",
      desc: [
        "Stand Speak Act is an educational platform designed to address social issues like climate change, misinformation, and cyberbullying. It allows users to engage with research-backed content, share perspectives, and foster informed discussions.",
      ],
      fields: [
        [
          "Role:",
          "Responsible for the front-end design syntax of blog, article, contact, login, and signup page.",
        ],
        [
          "Features:",
          "Social awareness blogs, informative posts, user engagement, clean UI, and educational content.",
        ],
        ["Technologies Used:", "Vue.js, JavaScript, HTML, CSS, GitHub Pages."],
      ],
      shots: [
        [A("stand-speak-act-signup.png"), "Stand Speak Act Signup Page"],
        [A("stand-speak-act-blog.png"), "Stand Speak Act Blogs Page"],
        [A("stand-speak-act-book.png"), "Stand Speak Act Article View"],
      ],
      links: [
        ["Live Demo", "https://karlguiao.github.io/Stand-Speak-Act/"],
        ["GitHub Repository", "https://github.com/karlguiao/Stand-Speak-Act"],
      ],
    },
    anibunnylist: {
      title: "Anibunnylist - Anime Blog Website",
      desc: [
        "Anibunnylist is a WordPress-based anime blog designed to provide anime enthusiasts with organized content such as anime recommendations, reviews, and curated lists. The project focuses on improving content readability through optimized layout design, typography selection, and intuitive navigation, allowing readers to easily explore and enjoy anime articles.",
      ],
      fields: [
        [
          "Role:",
          "Responsible for customizing the website layout, optimizing typography and page structure, and organizing blog navigation to improve readability and user experience. The role also included configuring WordPress settings, search engine optimization, structuring blog categories, and ensuring clear content presentation across the platform.",
        ],
        [
          "Features:",
          "Anime blog posts, arranged anime lists, category-based navigation, readable article layout, and structured content organization.",
        ],
        [
          "Technologies Used:",
          "WordPress, HTML, CSS, content management system (CMS).",
        ],
      ],
      shots: [
        [A("anibunnylist-home.png"), "Anibunnylist Homepage"],
        [A("anibunnylist-blog.png"), "Anibunnylist Blog Page"],
        [A("anibunnylist-post.png"), "Anibunnylist Article Page"],
      ],
      links: [["Live Website", "https://anibunnylist.wordpress.com/"]],
    },
    "huan-coffee": {
      title: "Huan Coffee - Coffee Shop Website",
      desc: [
        "Huan Coffee is a WordPress-based website created to establish a strong digital presence for a coffee shop brand. The website highlights the shop's history, menu offerings, and signature beverages while using a warm and inviting design that reflects the café's atmosphere. The project focuses on clear content organization and user-friendly navigation so visitors can easily explore the brand and its products.",
      ],
      fields: [
        [
          "Role:",
          "Responsible for customizing the website's search engine optimization (SEO) and developing the layout and content structure of the Home and History pages to improve search visibility and present the coffee shop's brand story in a clear and engaging way.",
        ],
        [
          "Features:",
          "Coffee shop menu display, brand story section, featured signature drinks, clean navigation structure, and a warm aesthetic design that reflects the café atmosphere.",
        ],
        [
          "Technologies Used:",
          "WordPress, HTML, CSS, content management system (CMS).",
        ],
      ],
      shots: [
        [A("huan-coffee-home.png"), "Huan Coffee Homepage"],
        [A("huan-coffee-menu.png"), "Huan Coffee Menu Section"],
        [A("huan-coffee-history.png"), "Huan Coffee History"],
      ],
      links: [["Live Website", "https://huancoffee.shop/"]],
    },

    "karl-rental": {
      title: "Karl Rental - Vehicle Rental & Booking Website",
      desc: [
        "Karl Rental is a web-based vehicle rental management system designed to simplify the process of browsing vehicles, checking availability, and managing rental bookings. The platform provides features for users and administrators, helping streamline rental operations through an organized and user-friendly interface.",
      ],
      fields: [
        [
          "Role:",
          "Contributed to the development of a vehicle rental platform focused on vehicle browsing, booking workflows, and user-friendly interface design.",
        ],
        [
          "Features:",
          "Vehicle availability tracking, dynamic vehicle filtering, booking management, user verification, simulated digital wallet, administrative dashboard, and rental management tools.",
        ],
        ["Technologies Used:", "HTML, CSS, JavaScript, PHP, MySQL."],
      ],
      shots: [
        [A("karl-rental-home.png"), "Karl Rental Homepage"],
        [A("karl-rental-vehicles.png"), "Karl Rental Vehicle Listings"],
        [A("karl-rental-booking.png"), "Karl Rental Booking Interface"],
      ],
      links: [
        ["Live Demo", "https://karlrental.netlify.app/"],
        [
          "Github Repository",
          "https://github.com/Satwinder-stack/Car-Rental-System",
        ],
      ],
    },
  };

  /* ---------- Home ---------- */
  var HOME = {
    hero: {
      name: "KARL GUIAO",
      role: "Web Developer & Web Designer",
      blurb:
        "Front-End Developer & UI/UX Designer turning ideas into functional and visually appealing digital experiences.",
      ctas: [
        ["HIRE ME", "resume.html"],
        ["VIEW PROJECTS", "projects.html"],
      ],
      img: A("hero.jpg"),
      alt: "Karl Guiao",
    },
    featured: {
      title: "Featured Projects",
      intro:
        "Here are some of my highlighted projects showcasing my development and design skills.",
      more: ["See All Projects →", "projects.html"],
    },
    testimonials: {
      title: "Testimonials",
      intro: "What people say about my work:",
      items: [
        {
          name: "Satwinder Jeerh",
          img: A("satwinder-jeerh.png"),
          role: "Classmate",
          quote:
            "\"Karl is one of the most reliable classmates I've ever worked with. He's always ready to help, whether it's brainstorming ideas for a project or reviewing work before submission.\"",
        },
        {
          name: "Redge Galang",
          img: A("redge-galang.jpg"),
          role: "Classmate",
          quote:
            '"Karl is not only talented but also approachable and supportive. He motivates everyone in the group to do their best and always contributes creative ideas."',
        },
        {
          name: "Mark De Jesus",
          img: A("mark-de-jesus.jpg"),
          role: "Classmate",
          quote:
            '"Working with Karl in our group projects has always been a smooth experience. He communicates clearly, organizes tasks efficiently, and makes sure everyone\'s ideas are heard."',
        },
      ],
    },
  };

  /* ---------- About ---------- */
  var ABOUT = {
    title: "About",
    img: A("hero.jpg"),
    alt: "Karl Guiao",
    paras: [
      "Hello, I am Karl Christian D. Guiao, a web development student at Holy Angel University in Angeles City, Pampanga. I am a passionate web developer who loves turning ideas into functional and visually appealing designs. I craft websites that not only look great but also provide seamless user experiences, bringing concepts to life through clean and efficient code.",
      "Currently, I am building a strong foundation in HTML, CSS, JavaScript, responsive web design, and UI/UX principles, and I continuously strive to improve my skills through hands-on projects and learning. My goal is to pursue a long-term career in web development, creating accessible and meaningful digital experiences across different devices.",
    ],
    toolsTitle: "Tools",
    tools: [
      ["vscode-icon.svg", "VSCode", "VS Code"],
      ["figma-icon.svg", "Figma", "Figma"],
      ["canva-icon.svg", "Canva", "Canva"],
      ["google-icon.svg", "Google", "Google"],
      ["github-icon.svg", "Github", "GitHub"],
      ["microsoft-office-icon.svg", "Microsoft Office", "Microsoft Office"],
    ],
    skillsTitle: "Skills",
    skillsIntro:
      "Combining strong soft and technical skills to deliver impactful, user-focused solutions:",
    technicalTitle: "Technical Skills",
    technical: [
      {
        icons: [
          ["html-icon.png", "HTML Icon"],
          ["css-icon.png", "CSS Icon"],
          ["js-icon.png", "JavaScript Icon"],
        ],
        title: "HTML, CSS, JS",
        text: "Build and style web pages with responsive layouts.",
      },
      {
        icons: [["responsive-design-icon.svg", "Responsive Design Icon"]],
        title: "Responsive Design",
        text: "Ensure websites adapt to all screen sizes and devices.",
      },
      {
        icons: [["wordpress-icon.svg", "Content Management System Icon"]],
        title: "Content Management",
        text: "Manage and organize digital content efficiently.",
      },
      {
        icons: [["ui-ux-design-icon.svg", "UI/UX Design Icon"]],
        title: "UI/UX Design",
        text: "Create intuitive and visually appealing interfaces.",
      },
    ],
    softTitle: "Soft Skills",
    soft: [
      {
        icons: [["time-management-icon.svg", "Time Management Icon"]],
        title: "Effective Time Management",
        text: "Prioritize tasks efficiently to meet deadlines.",
      },
      {
        icons: [["flexible-icon.svg", "Flexible Icon"]],
        title: "Flexible & Adaptable",
        text: "Quickly adjust to changes and maintain productivity.",
      },
      {
        icons: [["persistent-icon.svg", "Persistent Icon"]],
        title: "Persistent",
        text: "Debug and troubleshoot issues until a solution is found.",
      },
      {
        icons: [["teamwork-icon.svg", "Teamwork Icon"]],
        title: "Teamwork & Collaboration",
        text: "Work effectively with others toward shared goals.",
      },
    ],
  };

  /* ---------- Resume ---------- */
  var RESUME = {
    title: "Resume",
    intro:
      "A summary of my education, experience, and certifications for quick reference.",
    eduTitle: "Education",
    edu: [
      {
        date: "2023 - 2027",
        title: "BS in Information Technology Major in Web Development",
        org: "Holy Angel University",
        text: "Pursuing a Bachelor's in IT, majoring in Web Development, with a focus on UI/UX, front-end design, and responsive web interfaces using HTML, CSS, and JavaScript.",
      },
      {
        date: "2021 - 2023",
        title: "Senior High School - Information and Communications Technology",
        org: "Holy Angel University",
        text: "Completed Senior High School under the ICT strand, building a strong foundation in technology and sparking my passion for IT and web development.",
      },
    ],
    profile: [A("resume-profile.png"), "Profile"],
    download: ["Download Resume", A("Karl-Guiao-Resume.pdf")],
    workTitle: "Work Experience",
    work: [
      {
        date: "July 2026 - October 2026",
        title: "Endpoint Engineering Trainee",
        org: "Cloudstaff, Angeles Pampanga",
        text: "Served as a tech support member of Endpoint Engineering Department, contributed to Project Zero - a PC refurbishment initiative of Cloudstaff's Endpoint Engineering department, where I assisted in preparing, testing, and troubleshooting retired company PCs for reuse. Supported the team with process automation using Power Automate and Excel to streamline batch tracking and auditing, while building strong hardware, problem-solving, and teamwork skills.",
      },
      {
        date: "2025 - 2026",
        title: "Freelance Web Designer and Developer",
        org: "Charlie's Salon, Angeles Pampanga",
        text: "Designed and developed a custom website for a local salon business, focusing on responsive design, service presentation, and an easy-to-use appointment interface to enhance customer engagement.",
      },
    ],
    certTitle: "Certifications",
    certIntro:
      "Certifications demonstrating expertise in web development, design, and related technologies.",
    certs: [
      [
        A("data-visualization-certificate.png"),
        "Data Visualization V8 Certificate",
        "https://www.freecodecamp.org/certification/guiaokarl/data-visualization",
      ],
      [
        A("frontend-development-libraries-certificate.png"),
        "Front-End Development Libraries V8 Certificate",
        "https://www.freecodecamp.org/certification/guiaokarl/front-end-development-libraries",
      ],
      [
        A("javascript-algorithms-and-data-structures-certificate.png"),
        "JavaScript Algorithms and Data Structures V7 Certificate",
        "https://www.freecodecamp.org/certification/guiaokarl/javascript-algorithms-and-data-structures",
      ],
      [
        A("basics-ui-ux-certificate.png"),
        "Basics of UI/UX Certificate",
        "https://simpli-web.app.link/e/yL4oBlclP0b",
      ],
      [
        A("ui-ux-designing-certificate.png"),
        "Website UI/UX Designing Certificate",
        "https://simpli-web.app.link/e/FbktD5dlP0b",
      ],
      [
        A("design-thinking-certificate.jpg"),
        "Design Thinking Certificate",
        "https://simpli-web.app.link/e/7nTwRGmlP0b",
      ],
      [
        A("javascript-certificate.png"),
        "Javascript Essentials Certificate",
        "https://www.credly.com/badges/d446ee81-2e45-4c76-a451-47c7a4b68b46/public_url",
      ],
      [
        A("figma-certificate.png"),
        "Introduction to Figma Certificate",
        "https://simpli-web.app.link/e/XvZdImnlP0b",
      ],
      [
        A("responsive-web-fcc-certificate.png"),
        "Certificate",
        "https://www.freecodecamp.org/certification/guiaokarl/responsive-web-design",
      ],
    ],
  };

  /* ---------- Blogs ---------- */
  var BLOGS = {
    featuredTitle: "FEATURED",
    featured: {
      title: "Web Fox Esports: How I Built My First Website as a BSIT Student",
      date: "February 10, 2025",
      cat: "Project",
      img: A("web-fox-esports-project-blog.png"),
      alt: "Web Fox Esports Project",
      text: "Web Fox Esports is the first website I developed as a BSIT student. While the structure followed academic requirements, I personalized the design with a bright white and orange esports theme inspired by my passion for competitive gaming. This project marked the beginning of my journey in front-end development, where I learned the importance of clean HTML structure, consistent CSS styling, and intentional design decisions that enhance user experience.",
      href: "wfe-project-blog.html",
    },
    recentTitle: "RECENT BLOGS",
    recentIntro: "Take a look at the recent blog posts by Karl Guiao",
    recent: [
      {
        title:
          "The 10 Commandments of Web Design Every Developer Should Follow",
        date: "February 11, 2025",
        cat: "Web Design",
        img: A("10-commandments-of-web-design-blog.jpg"),
        alt: "The 10 Commandments of Web Design",
        text: "Great websites are not built by accident—they follow principles. In this article, I break down the 10 essential commandments of web design, covering usability, responsiveness, performance, accessibility, and clean code. These guiding rules help transform simple layouts into meaningful and user-focused digital experiences.",
        href: "ten-web-design-blog.html",
      },
      {
        title: "My Journey as a Web Developer: From Beginner to Builder",
        date: "February 12, 2025",
        cat: "Web Development",
        img: A("journey-as-developer-blog.jpg"),
        alt: "My Journey as a Web Developer",
        text: "My journey in web development started with simple HTML and CSS exercises guided by my professor. What began as structured classroom activities eventually became a passion for building visually engaging and user-focused websites. In this article, I share how I transitioned from following instructions to confidently creating projects that reflect my own style and creativity.",
        href: "journey-web-developer-blog.html",
      },
      {
        title: "Essential UI/UX Principles Every Beginner Should Know",
        date: "February 15, 2025",
        cat: "Web Design",
        img: A("essetial-uiux-principles-blog.jpg"),
        alt: "Essential UI/UX Principles for Beginners",
        text: "Great websites are not only about clean code—they are about user experience. This article explores fundamental UI/UX principles such as visual hierarchy, readability, color balance, and intuitive navigation. These core concepts helped me improve both the appearance and usability of my projects.",
        href: "essential-uiux-principles-blog.html",
      },
    ],
    readMore: "Read More",
    categoriesTitle: "CATEGORIES",
    /* label shown, category value used by the posts */
    categories: [
      ["Web Development", "Web Development"],
      ["Web Design", "Web Design"],
      ["Projects", "Project"],
    ],
    archivesTitle: "ARCHIVES",
    archives: ["January 2025", "February 2025", "March 2025"],
  };

  /* ---------- Blog articles ----------
     block types: h2 | p | pull (closing line of a section) | ul | img | cap | link */
  var ARTICLES = {
    "wfe-project-blog": {
      title: "Web Fox Esports: How I Built My First Website as a BSIT Student",
      sub: null,
      blocks: [
        {
          t: "img",
          src: A("web-fox-esports-project-blog.png"),
          alt: "Web Fox Esports website preview",
        },
        { t: "cap", text: "Preview of the Web Fox Esports homepage layout." },
        {
          t: "link",
          text: "Live Demo",
          href: "https://karlguiao.github.io/Web-Fox-Esports",
        },
        { t: "h2", text: "Introduction" },
        {
          t: "p",
          text: "Every developer has a starting point. For me, that beginning was Web Fox Esports, the very first website I built as a BSIT student. While the project requirements were provided by my professor, I saw it as an opportunity to go beyond instructions and create something that reflected both my creativity and my passion for esports—especially League of Legends.",
        },
        {
          t: "p",
          text: "This project marked the moment when web development shifted from being just a subject requirement to becoming a personal interest and long-term goal.",
        },
        { t: "h2", text: "From Instructions to Personalization" },
        {
          t: "p",
          text: "The foundation followed structured academic guidelines. Instead of creating a generic layout, I built a concept inspired by esports branding using a bright white and orange color scheme to maintain readability and reflect energy and competitiveness.",
        },
        { t: "h2", text: "Design and Development Approach" },
        {
          t: "img",
          src: A("wfe-code-screenshot.jpg"),
          alt: "HTML and CSS structure of Web Fox Esports",
        },
        {
          t: "p",
          text: "I focused on writing clean and semantic HTML while organizing CSS for consistency. I also applied basic responsive design principles to keep the layout structured across different screen sizes.",
        },
        { t: "h2", text: "Technologies Used" },
        {
          t: "ul",
          items: [
            "HTML5 for semantic structure",
            "CSS3 for styling and layout",
            "Basic responsive design techniques",
          ],
        },
        { t: "h2", text: "Key Lessons Learned" },
        {
          t: "ul",
          items: [
            "Clean HTML structure improves maintainability",
            "Consistency strengthens professionalism",
            "Branding influences perception",
            "Academic projects can become portfolio assets",
          ],
        },
        { t: "h2", text: "Why This Project Still Matters" },
        {
          t: "p",
          text: "Web Fox Esports represents the foundation of my journey in front-end development. It reflects initiative, creativity, and continuous improvement as I grow as a developer.",
        },
      ],
    },
    "ten-web-design-blog": {
      title: "The 10 Commandments of Web Design",
      sub: "Essential Principles Every Developer Should Follow",
      blocks: [
        {
          t: "img",
          src: A("10-commandments-of-web-design-blog.jpg"),
          alt: "Web Design Principles Illustration",
        },
        { t: "h2", text: "Introduction" },
        {
          t: "p",
          text: "Web design is more than just making a website look good. It is about creating digital experiences that are intuitive, efficient, and meaningful. As I continue growing as a front-end developer, I've realized that strong websites follow certain core principles.",
        },
        {
          t: "p",
          text: "Here are the 10 Commandments of Web Design that guide how I approach every project.",
        },
        { t: "h2", text: "1. Thou Shalt Prioritize the User" },
        {
          t: "p",
          text: "A website is not built for the developer—it is built for the user. Every layout decision, button placement, and design choice should make navigation easier and more intuitive.",
        },
        { t: "pull", text: "If users are confused, the design has failed." },
        { t: "h2", text: "2. Thou Shalt Keep It Simple" },
        {
          t: "p",
          text: "Complex designs do not equal better designs. Clean layouts with proper spacing and minimal clutter improve readability and professionalism.",
        },
        { t: "pull", text: "Simplicity increases usability." },
        { t: "h2", text: "3. Thou Shalt Maintain Visual Hierarchy" },
        {
          t: "p",
          text: "Headings, subheadings, and body text should clearly guide the user's attention. Proper use of font size, spacing, and contrast ensures that important information stands out.",
        },
        {
          t: "pull",
          text: "Users should never struggle to find what matters.",
        },
        { t: "h2", text: "4. Thou Shalt Use Consistent Styling" },
        {
          t: "p",
          text: "Consistency builds trust. Fonts, colors, buttons, and spacing should remain uniform throughout the website.",
        },
        {
          t: "pull",
          text: "Inconsistent design creates confusion and reduces credibility.",
        },
        { t: "h2", text: "5. Thou Shalt Make It Responsive" },
        {
          t: "p",
          text: "A website must function smoothly across desktops, tablets, and mobile devices. Responsive design is no longer optional—it is a requirement.",
        },
        { t: "pull", text: "Layouts should adapt, not break." },
        { t: "h2", text: "6. Thou Shalt Optimize for Performance" },
        {
          t: "p",
          text: "Fast websites retain users. Optimizing images, reducing unnecessary CSS, and writing clean code all contribute to better loading speed.",
        },
        { t: "pull", text: "Performance directly impacts user experience." },
        { t: "h2", text: "7. Thou Shalt Use Meaningful Color" },
        {
          t: "p",
          text: "Colors influence emotion and perception. A well-chosen color palette strengthens branding and enhances readability.",
        },
        { t: "pull", text: "Color should support content—not overpower it." },
        { t: "h2", text: "8. Thou Shalt Ensure Accessibility" },
        {
          t: "p",
          text: "Websites should be usable by everyone. Proper contrast, readable fonts, and semantic HTML improve accessibility.",
        },
        { t: "pull", text: "Inclusive design is professional design." },
        { t: "h2", text: "9. Thou Shalt Write Clean Code" },
        {
          t: "p",
          text: "Behind every great interface is organized and readable code. Clean HTML structure and well-structured CSS make future updates easier and prevent layout issues.",
        },
        { t: "pull", text: "Good design starts with good code." },
        { t: "h2", text: "10. Thou Shalt Continuously Improve" },
        {
          t: "p",
          text: "Web design is an evolving field. Trends change, technologies improve, and skills grow. A developer should constantly refine their approach and learn new techniques.",
        },
        { t: "pull", text: "Improvement is part of the process." },
        { t: "h2", text: "Conclusion" },
        {
          t: "p",
          text: "The 10 Commandments of Web Design are not strict rules—but guiding principles. As I build more projects, I aim to apply these fundamentals consistently.",
        },
        {
          t: "p",
          text: "Design is not just about aesthetics. It is about clarity, usability, performance, and purpose.",
        },
        {
          t: "p",
          text: "By following these principles, I ensure that every website I create is not only visually appealing but also functional and user-focused.",
        },
      ],
    },
    "journey-web-developer-blog": {
      title: "My Journey as a Web Developer",
      sub: "From Beginner to Confident Builder",
      blocks: [
        {
          t: "img",
          src: A("journey-as-developer-blog.jpg"),
          alt: "Web Development Journey Illustration",
        },
        { t: "h2", text: "Introduction" },
        {
          t: "p",
          text: "My journey in web development began as a simple classroom assignment, learning HTML and CSS. What started as structured exercises soon became a passion for building websites that are both functional and visually appealing.",
        },
        {
          t: "p",
          text: "This blog shares the lessons I learned, the challenges I faced, and the milestones I achieved along the way.",
        },
        { t: "h2", text: "1. Embrace Learning from the Ground Up" },
        {
          t: "p",
          text: "Every developer starts as a beginner. Understanding the basics of HTML, CSS, and JavaScript is essential before diving into frameworks or libraries.",
        },
        {
          t: "pull",
          text: "Strong foundations make advanced concepts easier to grasp.",
        },
        { t: "h2", text: "2. Build Real Projects Early" },
        {
          t: "p",
          text: "Theory is important, but practice solidifies knowledge. I started creating small websites, gradually increasing complexity as I learned.",
        },
        {
          t: "pull",
          text: "Hands-on experience builds confidence and skills.",
        },
        { t: "h2", text: "3. Focus on Clean Code" },
        {
          t: "p",
          text: "Organized, readable code is crucial. It not only prevents bugs but also allows for easier maintenance and future improvements.",
        },
        { t: "pull", text: "Good habits early on save time later." },
        { t: "h2", text: "4. Learn Design Principles" },
        {
          t: "p",
          text: "Web development is not just coding. Understanding layout, typography, and color theory enhances the user experience of your projects.",
        },
        { t: "pull", text: "Design and code work hand-in-hand." },
        { t: "h2", text: "5. Stay Curious About Technology" },
        {
          t: "p",
          text: "The tech landscape changes rapidly. Exploring new tools, libraries, and frameworks kept me motivated and prepared me for real-world development.",
        },
        { t: "pull", text: "Continuous learning is a developer's best asset." },
        { t: "h2", text: "6. Seek Feedback and Collaborate" },
        {
          t: "p",
          text: "Sharing projects with peers and mentors provided valuable insights. Constructive feedback helped me improve and adopt industry best practices.",
        },
        { t: "pull", text: "Collaboration accelerates growth." },
        { t: "h2", text: "7. Document Your Progress" },
        {
          t: "p",
          text: "Maintaining notes and tutorials helped me revisit concepts and track my learning journey.",
        },
        {
          t: "pull",
          text: "Documentation strengthens understanding and memory.",
        },
        { t: "h2", text: "8. Overcome Challenges" },
        {
          t: "p",
          text: "Debugging and problem-solving are part of every developer's life. Embracing challenges improved my resilience and skill set.",
        },
        { t: "pull", text: "Failures are opportunities to learn." },
        { t: "h2", text: "9. Share Knowledge" },
        {
          t: "p",
          text: "Teaching or writing about what I learned reinforced my understanding and gave back to the community.",
        },
        { t: "pull", text: "Sharing knowledge makes the journey meaningful." },
        { t: "h2", text: "10. Keep Building" },
        {
          t: "p",
          text: "Every project, small or large, contributes to growth. The more you build, the more confident and skilled you become.",
        },
        { t: "pull", text: "Practice is the key to mastery." },
        { t: "h2", text: "Conclusion" },
        {
          t: "p",
          text: "My journey from beginner to web developer taught me that patience, consistent practice, and curiosity are indispensable. Each project shaped my skills, style, and confidence.",
        },
        {
          t: "p",
          text: "As I continue learning, I look forward to building more advanced and meaningful web experiences.",
        },
      ],
    },
    "essential-uiux-principles-blog": {
      title: "Essential UI/UX Principles for Beginners",
      sub: "Key Concepts to Improve User Experience",
      blocks: [
        {
          t: "img",
          src: A("essetial-uiux-principles-blog.jpg"),
          alt: "UI/UX Principles Illustration",
        },
        { t: "h2", text: "Introduction" },
        {
          t: "p",
          text: "Understanding UI/UX is critical for developers who want to create websites that users enjoy interacting with. Good design isn’t just about aesthetics—it’s about usability, clarity, and engagement.",
        },
        {
          t: "p",
          text: "Here are some core UI/UX principles every beginner should follow.",
        },
        { t: "h2", text: "1. Prioritize User Needs" },
        {
          t: "p",
          text: "Users should always be at the center of your design decisions. Consider their goals, behavior, and expectations to create meaningful experiences.",
        },
        {
          t: "pull",
          text: "User-focused design increases satisfaction and retention.",
        },
        { t: "h2", text: "2. Maintain Visual Hierarchy" },
        {
          t: "p",
          text: "Arrange elements to guide attention. Important content should stand out through size, contrast, or placement.",
        },
        {
          t: "pull",
          text: "Clear hierarchy improves readability and navigation.",
        },
        { t: "h2", text: "3. Keep Interfaces Simple" },
        {
          t: "p",
          text: "Avoid unnecessary clutter. Each element should serve a purpose and enhance usability.",
        },
        { t: "pull", text: "Simplicity reduces cognitive load for users." },
        { t: "h2", text: "4. Use Consistent Design Patterns" },
        {
          t: "p",
          text: "Consistency in buttons, typography, and colors fosters trust and makes interfaces easier to learn.",
        },
        {
          t: "pull",
          text: "Users feel more comfortable when design is predictable.",
        },
        { t: "h2", text: "5. Optimize for Accessibility" },
        {
          t: "p",
          text: "Ensure your website is usable by everyone, including people with disabilities. Use proper contrast, semantic HTML, and readable fonts.",
        },
        {
          t: "pull",
          text: "Accessibility is an essential aspect of professional design.",
        },
        { t: "h2", text: "6. Feedback and Affordances" },
        {
          t: "p",
          text: "Users should understand what actions are possible. Buttons, links, and forms must clearly indicate interactivity.",
        },
        { t: "pull", text: "Immediate feedback builds user confidence." },
        { t: "h2", text: "7. Responsive Design Matters" },
        {
          t: "p",
          text: "Interfaces must adapt to different devices and screen sizes. A seamless experience across devices is expected.",
        },
        { t: "pull", text: "Responsive design ensures usability everywhere." },
        { t: "h2", text: "8. Minimize User Effort" },
        {
          t: "p",
          text: "Reduce unnecessary clicks or complicated flows. Make navigation intuitive and actions straightforward.",
        },
        { t: "pull", text: "Efficiency keeps users engaged." },
        { t: "h2", text: "9. Use Meaningful Color and Typography" },
        {
          t: "p",
          text: "Colors and fonts influence readability, emotion, and brand perception. Use them intentionally to support content.",
        },
        {
          t: "pull",
          text: "Good choices enhance comprehension and aesthetics.",
        },
        { t: "h2", text: "10. Iterate and Test" },
        {
          t: "p",
          text: "Design is never perfect on the first try. Conduct usability tests, gather feedback, and refine your interfaces.",
        },
        {
          t: "pull",
          text: "Continuous improvement leads to better user experiences.",
        },
        { t: "h2", text: "Conclusion" },
        {
          t: "p",
          text: "Following these UI/UX principles will help beginners create websites that are both visually appealing and user-friendly. Every project is an opportunity to practice, learn, and refine your design skills.",
        },
      ],
    },
  };

  /* ---------- Contact ---------- */
  var CONTACT = {
    title: "Contact",
    formTitle: "Send me a Message",
    labels: {
      name: "Full Name:",
      email: "Email Address:",
      phone: "Contact Number:",
      message: "Message:",
    },
    submit: "Submit",
    infoTitle: "Get in Touch",
    infoText:
      "feel free to reach me out for collaborations, opportunities, or inquiries.",
    email: ["email-icon.svg", "Email", "karlguiao17@gmail.com"],
    phone: ["phone-icon.svg", "Phone", "+63 993 924 0199", "tel:+639939240199"],
    findTitle: "Other places to find me:",
    find: [
      ["Facebook", "fb-icon.svg", "https://www.facebook.com/karlguiao143"],
      ["Github", "github-icon.svg", "https://github.com/karlguiao"],
      [
        "LinkedIn",
        "linkedin-icon.svg",
        "https://www.linkedin.com/in/karl-guiao/",
      ],
    ],
    emailjs: {
      service: "service_n3h51us",
      template: "template_k9r9jog",
      publicKey: "kKTVMFdVz9FQid_A4",
    },
  };

  window.ORV_CONTENT = {
    asset: A,
    nav: NAV,
    social: SOCIAL_GFL,
    projects: PROJECTS,
    projectDetail: PROJECT_DETAIL,
    home: HOME,
    about: ABOUT,
    resume: RESUME,
    blogs: BLOGS,
    articles: ARTICLES,
    contact: CONTACT,
    footer: "Copyright © 2025 designed and developed by Karl Guiao",
    logo: [A("kg-logo.png"), "Karl Guiao Logo"],
    themeIcons: [A("sun-icon.svg"), "Sun", A("moon-icon.svg"), "Moon"],
  };
})();
