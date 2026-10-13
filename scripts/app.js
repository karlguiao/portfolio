/* ======================================
   ORV pages and mount. Every string comes from ORV_CONTENT.
   ====================================== */
(function () {
  var React = window.React,
    ReactDOM = window.ReactDOM;
  var h = React.createElement,
    useState = React.useState,
    Fragment = React.Fragment;
  var C = window.ORV_CONTENT,
    U = window.ORV_UI;
  var Reveal = U.Reveal,
    Sec = U.Sec,
    Tilt = U.Tilt,
    Btn = U.Btn,
    Coin = U.Coin;

  /* ---------- reusable blocks ---------- */
  function ProjectCard(p) {
    var it = p.item;
    return h(
      Reveal,
      { delay: p.i * 110, className: "pc-wrap" },
      h(
        Tilt,
        { className: "pc win" },
        h(
          "div",
          { className: "pc-img" },
          h("img", { src: it.thumb, alt: it.alt, loading: "lazy" }),
        ),
        h(
          "div",
          { className: "pc-body" },
          h("h3", null, it.title),
          h("p", null, it.desc),
          h("a", { className: "more-link", href: it.href }, "View Project →"),
        ),
      ),
    );
  }

  function SkillCard(p) {
    var it = p.item;
    return h(
      Reveal,
      { delay: p.i * 90 },
      h(
        Tilt,
        { className: "sk win", max: 8 },
        h(
          "div",
          { className: "sk-ic" },
          it.icons.map(function (ic) {
            return h(Coin, { key: ic[0], src: C.asset(ic[0]), alt: ic[1] });
          }),
        ),
        h("h4", null, it.title),
        h("p", null, it.text),
      ),
    );
  }

  /* ---------- pages ---------- */
  function Home() {
    var H = C.home;
    return h(
      Fragment,
      null,
      h(
        "section",
        { className: "hero" },
        h(
          "div",
          { className: "wrap hero-grid" },
          h(
            "div",
            { className: "hero-copy" },
            h(U.HeroName, { text: H.hero.name }),
            h("h2", { className: "role" }, H.hero.role),
            h("p", { className: "blurb" }, H.hero.blurb),
            h(
              "div",
              { className: "cta" },
              h(
                Btn,
                { href: H.hero.ctas[0][1], kind: "pri" },
                H.hero.ctas[0][0],
              ),
              h(
                Btn,
                { href: H.hero.ctas[1][1], kind: "ghost" },
                H.hero.ctas[1][0],
              ),
            ),
          ),
          h(
            "div",
            { className: "portrait-wrap" },
            h(
              Tilt,
              { className: "portrait win", max: 5 },
              h("img", { src: H.hero.img, alt: H.hero.alt }),
            ),
            h(U.Constellation, null),
          ),
        ),
        h(
          "a",
          {
            className: "cue",
            href: "#featured-projects",
            "aria-label": "Scroll to featured projects",
          },
          h("i"),
        ),
      ),
      h(
        "section",
        { className: "sx", id: "featured-projects" },
        h(
          "div",
          { className: "wrap" },
          h(Sec, null, H.featured.title),
          h("p", { className: "lead" }, H.featured.intro),
          h(
            "div",
            { className: "pgrid" },
            C.projects.slice(0, 3).map(function (it, i) {
              return h(ProjectCard, { key: it.href, item: it, i: i });
            }),
          ),
          h(
            "div",
            { className: "row-end" },
            h(
              Btn,
              { href: H.featured.more[1], kind: "ghost" },
              H.featured.more[0],
            ),
          ),
        ),
      ),
      h(
        "section",
        { className: "sx" },
        h(
          "div",
          { className: "wrap" },
          h(Sec, null, H.testimonials.title),
          h("p", { className: "lead" }, H.testimonials.intro),
          h(
            "div",
            { className: "tgrid" },
            H.testimonials.items.map(function (t, i) {
              return h(
                Reveal,
                { key: t.name, delay: i * 120 },
                h(
                  Tilt,
                  { className: "tc win", max: 5 },
                  h(Coin, { src: t.img, alt: t.name, className: "avatar" }),
                  h("h3", null, t.name),
                  h("p", { className: "trole" }, t.role),
                  h("p", { className: "quote" }, t.quote),
                ),
              );
            }),
          ),
        ),
      ),
    );
  }

  function About() {
    var A = C.about;
    return h(
      "section",
      { className: "wrap sx-top" },
      h(Sec, null, A.title),
      h(
        "div",
        { className: "about-top" },
        h(
          Reveal,
          null,
          h(
            Tilt,
            { className: "portrait win", max: 5 },
            h("img", { src: A.img, alt: A.alt }),
          ),
        ),
        h(
          Reveal,
          { delay: 120, className: "about-txt" },
          A.paras.map(function (t, i) {
            return h("p", { key: i }, t);
          }),
        ),
      ),
      h(Sec, { as: "h3" }, A.toolsTitle),
      h(
        "ul",
        { className: "tools" },
        A.tools.map(function (t, i) {
          return h(
            "li",
            { key: t[1] },
            h(
              Reveal,
              { delay: i * 70 },
              h(
                "div",
                { className: "tool win" },
                h(Coin, { src: C.asset(t[0]), alt: t[1] }),
                h("span", null, t[2]),
              ),
            ),
          );
        }),
      ),
      h(Sec, { as: "h3" }, A.skillsTitle),
      h("p", { className: "lead" }, A.skillsIntro),
      h(Reveal, { as: "h4", className: "sub-h" }, A.technicalTitle),
      h(
        "div",
        { className: "sgrid" },
        A.technical.map(function (it, i) {
          return h(SkillCard, { key: it.title, item: it, i: i });
        }),
      ),
      h(Reveal, { as: "h4", className: "sub-h" }, A.softTitle),
      h(
        "div",
        { className: "sgrid" },
        A.soft.map(function (it, i) {
          return h(SkillCard, { key: it.title, item: it, i: i });
        }),
      ),
    );
  }

  function Projects() {
    return h(
      "section",
      { className: "wrap sx-top" },
      h(Sec, null, "Projects"),
      h(
        "p",
        { className: "lead" },
        "Here's a showcase of my web development, design, and UI/UX work.",
      ),
      h(
        "div",
        { className: "pgrid" },
        C.projects.map(function (it, i) {
          return h(ProjectCard, { key: it.href, item: it, i: i % 3 });
        }),
      ),
    );
  }

  function ProjectDetail(p) {
    var D = C.projectDetail[p.k];
    return h(
      "section",
      { className: "wrap sx-top" },
      h(Reveal, null, h("h1", { className: "page-h1" }, D.title)),
      h(
        "div",
        { className: "pd-grid" },
        h(
          Reveal,
          { delay: 80, className: "pd-copy" },
          D.desc.map(function (t, i) {
            return h("p", { key: i, className: "pd-lead" }, t);
          }),
        ),
        h(
          Reveal,
          { delay: 160 },
          h(
            "div",
            { className: "pd-facts win" },
            D.fields.map(function (f) {
              return h("p", { key: f[0] }, h("strong", null, f[0]), " ", f[1]);
            }),
          ),
        ),
      ),
      h(Sec, null, "Project Screenshots"),
      h(U.Shots, { items: D.shots }),
      h(
        "div",
        { className: "pd-links" },
        D.links.map(function (l, i) {
          return h(
            Btn,
            { key: l[0], href: l[1], kind: i === 0 ? "pri" : "ghost" },
            l[0],
          );
        }),
      ),
    );
  }

  function Resume() {
    var R = C.resume;
    return h(
      "section",
      { className: "wrap sx-top" },
      h(Sec, null, R.title),
      h("p", { className: "lead" }, R.intro),
      h(
        "div",
        { className: "res-grid" },
        h(
          "div",
          { className: "res-main" },
          h(Reveal, { as: "h3", className: "sub-h" }, R.eduTitle),
          h(U.Timeline, { items: R.edu }),
          h(Reveal, { as: "h3", className: "sub-h" }, R.workTitle),
          h(U.Timeline, { items: R.work }),
        ),
        h(
          "aside",
          { className: "res-side" },
          h(
            Reveal,
            { delay: 150 },
            h(
              Tilt,
              { className: "profile win", max: 5 },
              h("img", { src: R.profile[0], alt: R.profile[1] }),
              h(
                Btn,
                {
                  href: R.download[1],
                  kind: "pri",
                  target: "_blank",
                },
                R.download[0],
              ),
            ),
          ),
        ),
      ),
      h(Sec, { as: "h3" }, R.certTitle),
      h("p", { className: "lead" }, R.certIntro),
      h(
        "div",
        { className: "cgrid" },
        R.certs.map(function (c, i) {
          return h(
            Reveal,
            { key: c[2], delay: (i % 3) * 100 },
            h(
              Tilt,
              { className: "cert win", max: 7 },
              h(
                "a",
                { href: c[2], target: "_blank", rel: "noopener noreferrer" },
                h("img", { src: c[0], alt: c[1], loading: "lazy" }),
              ),
            ),
          );
        }),
      ),
    );
  }

  function Blogs() {
    var B = C.blogs,
      s = useState(null),
      cat = s[0],
      setCat = s[1];
    var s2 = useState(null),
      arc = s2[0],
      setArc = s2[1];
    function dim(post) {
      var off =
        (cat && post.cat !== cat) ||
        (arc && post.date.replace(/\s\d{1,2},/, "") !== arc);
      return off ? " dim" : "";
    }
    function Post(p) {
      var it = p.it;
      return h(
        Reveal,
        { delay: p.i * 110 },
        h(
          Tilt,
          { className: "post win" + dim(it), max: 3 },
          h(
            "div",
            { className: "post-img" },
            h("img", { src: it.img, alt: it.alt, loading: "lazy" }),
          ),
          h(
            "div",
            { className: "post-body" },
            p.big
              ? h("h2", { className: "post-h" }, it.title)
              : h("h3", { className: "post-h" }, it.title),
            h(
              "p",
              { className: "meta" },
              "Date: " + it.date + " | Categories: " + it.cat,
            ),
            h("p", null, it.text),
            h("a", { className: "more-link", href: it.href }, B.readMore),
          ),
        ),
      );
    }
    return h(
      "section",
      { className: "wrap sx-top blog-grid" },
      h(
        "div",
        { className: "blog-main" },
        h(
          Reveal,
          null,
          h("h1", { className: "page-h1 caps" }, B.featuredTitle),
        ),
        h(Post, { it: B.featured, i: 0, big: true }),
        h(Sec, null, B.recentTitle),
        h("p", { className: "lead" }, B.recentIntro),
        h(
          "div",
          { className: "plist" },
          B.recent.map(function (it, i) {
            return h(Post, { key: it.href, it: it, i: i });
          }),
        ),
      ),
      h(
        "aside",
        { className: "blog-side" },
        h(
          Reveal,
          { delay: 200 },
          h(
            "div",
            { className: "side win" },
            h("h3", null, B.categoriesTitle),
            h(
              "ul",
              null,
              B.categories.map(function (c) {
                return h(
                  "li",
                  { key: c[0] },
                  h(
                    "a",
                    {
                      href: "#",
                      className: cat === c[1] ? "on" : "",
                      "aria-pressed": cat === c[1],
                      onClick: function (e) {
                        e.preventDefault();
                        setCat(cat === c[1] ? null : c[1]);
                        setArc(null);
                      },
                    },
                    c[0],
                  ),
                );
              }),
            ),
            h("h3", null, B.archivesTitle),
            h(
              "ul",
              null,
              B.archives.map(function (a) {
                return h(
                  "li",
                  { key: a },
                  h(
                    "a",
                    {
                      href: "#",
                      className: arc === a ? "on" : "",
                      "aria-pressed": arc === a,
                      onClick: function (e) {
                        e.preventDefault();
                        setArc(arc === a ? null : a);
                        setCat(null);
                      },
                    },
                    a,
                  ),
                );
              }),
            ),
          ),
        ),
      ),
    );
  }

  function Article(p) {
    var A = C.articles[p.k];
    return h(
      "article",
      { className: "wrap sx-top art" },
      h(
        Reveal,
        null,
        h("h1", { className: "page-h1" }, A.title),
        A.sub && h("p", { className: "art-sub" }, A.sub),
      ),
      A.blocks.map(function (b, i) {
        switch (b.t) {
          case "h2":
            return h(Reveal, { key: i, as: "h2", className: "art-h" }, b.text);
          case "p":
            return h("p", { key: i }, b.text);
          case "pull":
            return h("p", { key: i, className: "pull" }, b.text);
          case "ul":
            return h(
              "ul",
              { key: i, className: "art-ul" },
              b.items.map(function (t) {
                return h("li", { key: t }, t);
              }),
            );
          case "img":
            return h(
              Reveal,
              { key: i },
              h(
                "figure",
                { className: "art-fig win" },
                h("img", { src: b.src, alt: b.alt, loading: "lazy" }),
              ),
            );
          case "cap":
            return h("p", { key: i, className: "cap" }, b.text);
          case "link":
            return h(
              "div",
              { key: i, className: "art-link" },
              h(Btn, { href: b.href, kind: "pri" }, b.text),
            );
        }
      }),
    );
  }

  function Contact() {
    var K = C.contact;
    return h(
      "section",
      { className: "wrap sx-top" },
      h(Sec, null, K.title),
      h(
        "div",
        { className: "ct-grid" },
        h(
          Reveal,
          null,
          h(
            "div",
            { className: "ct-card win" },
            h("h3", null, K.formTitle),
            h(U.ContactForm, null),
          ),
        ),
        h(
          Reveal,
          { delay: 140 },
          h(
            "div",
            { className: "ct-card win" },
            h("h3", null, K.infoTitle),
            h("p", null, K.infoText),
            h(
              "p",
              { className: "ct-row" },
              h(Coin, { src: C.asset(K.email[0]), alt: K.email[1] }),
              h("a", { href: "mailto:" + K.email[2] }, K.email[2]),
            ),
            h(
              "p",
              { className: "ct-row" },
              h(Coin, { src: C.asset(K.phone[0]), alt: K.phone[1] }),
              h("a", { href: K.phone[3] }, K.phone[2]),
            ),
            h("p", { className: "ct-find" }, K.findTitle),
            h(U.Socials, { items: K.find }),
          ),
        ),
      ),
    );
  }

  /* ---------- shell ---------- */
  function App(p) {
    var page = p.page,
      key = p.k,
      body,
      active;
    switch (page) {
      case "home":
        body = h(Home);
        active = "index.html";
        break;
      case "about":
        body = h(About);
        active = "about.html";
        break;
      case "projects":
        body = h(Projects);
        active = "projects.html";
        break;
      case "project":
        body = h(ProjectDetail, { k: key });
        active = "projects.html";
        break;
      case "resume":
        body = h(Resume);
        active = "resume.html";
        break;
      case "blogs":
        body = h(Blogs);
        active = "blogs.html";
        break;
      case "article":
        body = h(Article, { k: key });
        active = "blogs.html";
        break;
      case "contact":
        body = h(Contact);
        active = "contact.html";
        break;
    }
    return h(
      Fragment,
      null,
      h(U.StarField),
      h(U.Cursor),
      h(U.Wall),
      h(U.Header, { active: active }),
      h("main", { id: "main", className: "page page-" + page }, body),
      h(U.Footer),
    );
  }

  U.wireLinks();
  var d = document.body.dataset;
  ReactDOM.createRoot(document.getElementById("root")).render(
    h(App, { page: d.page, k: d.key }),
  );
})();
