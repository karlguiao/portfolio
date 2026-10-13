/* =====================================
   Custom ORV UI kit — React components
   ===================================== */
(function () {
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState,
    useEffect = React.useEffect,
    useRef = React.useRef,
    Fragment = React.Fragment;
  var C = window.ORV_CONTENT;

  var reduced = function () {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };
  var fine = function () {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  };
  var getTheme = function () {
    return document.documentElement.getAttribute("data-theme") || "dark";
  };
  var setTheme = function (t) {
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("orv-theme", t);
    } catch (e) {}
  };

  /* ---------- Star Stream: canvas constellations ---------- */
  function StarField() {
    var ref = useRef(null);
    useEffect(function () {
      var c = ref.current,
        ctx = c.getContext("2d");
      var w,
        hh,
        dpr,
        stars = [],
        shoot = null,
        raf = 0,
        mx = -9999,
        my = -9999;
      var sy = window.scrollY,
        nextShoot = performance.now() + 5000,
        still = reduced();

      function size() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth;
        hh = window.innerHeight;
        c.width = w * dpr;
        c.height = hh * dpr;
        c.style.width = w + "px";
        c.style.height = hh + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var n = Math.round(Math.min(170, (w * hh) / 8500));
        stars = [];
        for (var i = 0; i < n; i++) {
          stars.push({
            x: Math.random() * w,
            y: Math.random() * hh,
            z: Math.random() * 0.9 + 0.1,
            r: Math.random() * 1.2 + 0.35,
            p: Math.random() * 6.28,
            gold: Math.random() < 0.13,
          });
        }
      }
      function frame(t) {
        var light = getTheme() === "light";
        ctx.clearRect(0, 0, w, hh);
        var near = [];
        for (var i = 0; i < stars.length; i++) {
          var s = stars[i];
          if (!still) {
            s.x += 0.035 * s.z;
            if (s.x > w + 4) s.x = -4;
          }
          var py = (((s.y - sy * 0.12 * s.z) % hh) + hh) % hh;
          var tw = 0.55 + 0.45 * Math.sin((t / 900) * s.z + s.p);
          var a = (light ? 0.5 : 0.85) * tw * (0.35 + s.z * 0.65);
          ctx.beginPath();
          ctx.arc(s.x, py, s.r * (s.gold ? 1.35 : 1), 0, 6.283);
          ctx.fillStyle = s.gold
            ? light
              ? "rgba(154,106,18," + a + ")"
              : "rgba(242,200,121," + a + ")"
            : light
              ? "rgba(21,60,150," + a + ")"
              : "rgba(205,225,255," + a + ")";
          ctx.fill();
          var dx = s.x - mx,
            dy = py - my;
          if (dx * dx + dy * dy < 22000)
            near.push([s.x, py, dx * dx + dy * dy]);
        }
        /* constellation lines between stars close to the pointer */
        for (var a1 = 0; a1 < near.length; a1++) {
          for (var b1 = a1 + 1; b1 < near.length; b1++) {
            var ddx = near[a1][0] - near[b1][0],
              ddy = near[a1][1] - near[b1][1],
              d = ddx * ddx + ddy * ddy;
            if (d < 14400) {
              var al =
                (1 - d / 14400) *
                (1 - Math.min(near[a1][2], near[b1][2]) / 22000) *
                0.8;
              ctx.strokeStyle = light
                ? "rgba(21,96,201," + al + ")"
                : "rgba(127,214,255," + al + ")";
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(near[a1][0], near[a1][1]);
              ctx.lineTo(near[b1][0], near[b1][1]);
              ctx.stroke();
            }
          }
        }
        /* occasional shooting star */
        if (!still) {
          if (!shoot && t > nextShoot) {
            shoot = {
              x: Math.random() * w * 0.7,
              y: Math.random() * hh * 0.35,
              vx: 9 + Math.random() * 4,
              vy: 4 + Math.random() * 2,
              life: 0,
            };
            nextShoot = t + 7000 + Math.random() * 6000;
          }
          if (shoot) {
            shoot.x += shoot.vx;
            shoot.y += shoot.vy;
            shoot.life++;
            var g = ctx.createLinearGradient(
              shoot.x,
              shoot.y,
              shoot.x - shoot.vx * 9,
              shoot.y - shoot.vy * 9,
            );
            var col = light ? "21,96,201" : "200,230,255";
            g.addColorStop(0, "rgba(" + col + "," + (light ? 0.6 : 0.95) + ")");
            g.addColorStop(1, "rgba(" + col + ",0)");
            ctx.strokeStyle = g;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(shoot.x, shoot.y);
            ctx.lineTo(shoot.x - shoot.vx * 9, shoot.y - shoot.vy * 9);
            ctx.stroke();
            if (shoot.life > 70 || shoot.x > w + 80 || shoot.y > hh + 80)
              shoot = null;
          }
        }
        if (!still) raf = requestAnimationFrame(frame);
      }
      function mv(e) {
        mx = e.clientX;
        my = e.clientY;
        if (still) frame(0);
      }
      function sc() {
        sy = window.scrollY;
        if (still) frame(0);
      }
      function vis() {
        if (document.hidden) cancelAnimationFrame(raf);
        else if (!still) raf = requestAnimationFrame(frame);
      }
      size();
      raf = requestAnimationFrame(frame);
      window.addEventListener("resize", size);
      window.addEventListener("pointermove", mv, { passive: true });
      window.addEventListener("scroll", sc, { passive: true });
      document.addEventListener("visibilitychange", vis);
      var themeObs = new MutationObserver(function () {
        if (still) frame(0);
      });
      themeObs.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
      return function () {
        cancelAnimationFrame(raf);
        themeObs.disconnect();
        window.removeEventListener("resize", size);
        window.removeEventListener("pointermove", mv);
        window.removeEventListener("scroll", sc);
        document.removeEventListener("visibilitychange", vis);
      };
    }, []);
    return h("canvas", { ref: ref, className: "stars", "aria-hidden": "true" });
  }

  /* ---------- Cursor aura ---------- */
  function Cursor() {
    var ring = useRef(null),
      glow = useRef(null);
    useEffect(function () {
      if (!fine() || reduced()) return;
      var x = -100,
        y = -100,
        rx = x,
        ry = y,
        gx = x,
        gy = y,
        raf = 0,
        seen = false;
      function mv(e) {
        x = e.clientX;
        y = e.clientY;
        if (!seen) {
          seen = true;
          rx = gx = x;
          ry = gy = y;
          ring.current.classList.add("on");
          glow.current.classList.add("on");
        }
        var t =
          e.target && e.target.closest
            ? e.target.closest("a,button,input,textarea,[data-hover]")
            : null;
        ring.current.classList.toggle("hov", !!t);
      }
      function dn() {
        ring.current.classList.add("dn");
      }
      function up() {
        ring.current.classList.remove("dn");
      }
      function lv() {
        ring.current.classList.remove("on");
        glow.current.classList.remove("on");
        seen = false;
      }
      function loop() {
        rx += (x - rx) * 0.2;
        ry += (y - ry) * 0.2;
        gx += (x - gx) * 0.07;
        gy += (y - gy) * 0.07;
        ring.current.style.transform =
          "translate3d(" + rx + "px," + ry + "px,0)";
        glow.current.style.transform =
          "translate3d(" + gx + "px," + gy + "px,0)";
        raf = requestAnimationFrame(loop);
      }
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", mv, { passive: true });
      window.addEventListener("pointerdown", dn);
      window.addEventListener("pointerup", up);
      document.documentElement.addEventListener("mouseleave", lv);
      return function () {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", mv);
        window.removeEventListener("pointerdown", dn);
        window.removeEventListener("pointerup", up);
        document.documentElement.removeEventListener("mouseleave", lv);
      };
    }, []);
    return h(
      Fragment,
      null,
      h("div", { ref: glow, className: "cur-glow", "aria-hidden": "true" }),
      h("div", { ref: ring, className: "cur-ring", "aria-hidden": "true" }),
    );
  }

  /* ---------- The Fourth Wall: page transition ---------- */
  function Wall() {
    var s = useState(!reduced()),
      closed = s[0],
      setClosed = s[1];
    useEffect(function () {
      if (reduced()) return;
      var t1 = setTimeout(function () {
        setClosed(false);
      }, 520);
      var onShow = function (e) {
        if (e.persisted) setClosed(false);
      };
      var onLeave = function (e) {
        setClosed(true);
        setTimeout(function () {
          window.location.href = e.detail;
        }, 620);
      };
      window.addEventListener("pageshow", onShow);
      window.addEventListener("orv:leave", onLeave);
      return function () {
        clearTimeout(t1);
        window.removeEventListener("pageshow", onShow);
        window.removeEventListener("orv:leave", onLeave);
      };
    }, []);
    if (reduced()) return null;
    return h(
      "div",
      { className: "wall" + (closed ? " closed" : ""), "aria-hidden": "true" },
      h("i"),
      h("b"),
      h("i"),
    );
  }
  function wireLinks() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (
        !a ||
        e.defaultPrevented ||
        e.button ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      var u;
      try {
        u = new URL(a.href, location.href);
      } catch (x) {
        return;
      }
      if (u.origin !== location.origin || /\.pdf$/i.test(u.pathname)) return;
      if (u.pathname === location.pathname && u.hash) return;
      if (
        u.pathname === location.pathname &&
        !u.hash &&
        u.search === location.search
      ) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (reduced()) return;
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("orv:leave", { detail: u.href }));
    });
  }

  /* ---------- Header ---------- */
  function Header(props) {
    var active = props.active;
    var st = useState(getTheme()),
      theme = st[0],
      setT = st[1];
    var so = useState(false),
      open = so[0],
      setOpen = so[1];
    var sh = useState(false),
      hide = sh[0],
      setHide = sh[1];
    var ss = useState(false),
      scrolled = ss[0],
      setScrolled = ss[1];
    var sp = useState(0),
      prog = sp[0],
      setProg = sp[1];
    var sm = useState({ x: 0, w: 0, on: false }),
      mk = sm[0],
      setMk = sm[1];
    var wrap = useRef(null),
      links = useRef({});

    function place(href) {
      var el = links.current[href];
      if (!el || !wrap.current) {
        setMk(function (m) {
          return { x: m.x, w: m.w, on: false };
        });
        return;
      }
      var a = wrap.current.getBoundingClientRect(),
        b = el.getBoundingClientRect();
      setMk({ x: b.left - a.left, w: b.width, on: true });
    }
    useEffect(function () {
      var last = window.scrollY;
      function onScroll() {
        var y = window.scrollY,
          max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 8);
        setProg(max > 0 ? Math.min(1, y / max) : 0);
        setHide(y > last && y > 260);
        last = y;
      }
      function onResize() {
        place(active);
      }
      onScroll();
      place(active);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      if (document.fonts && document.fonts.ready)
        document.fonts.ready.then(function () {
          place(active);
        });
      return function () {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    }, []);
    useEffect(
      function () {
        document.body.style.overflow = open ? "hidden" : "";
      },
      [open],
    );
    useEffect(function () {
      function k(e) {
        if (e.key === "Escape") setOpen(false);
      }
      window.addEventListener("keydown", k);
      return function () {
        window.removeEventListener("keydown", k);
      };
    }, []);

    function toggleTheme() {
      var n = theme === "dark" ? "light" : "dark";
      setTheme(n);
      setT(n);
    }

    return h(
      "header",
      {
        className:
          "nav" +
          (scrolled ? " sc" : "") +
          (hide && !open ? " hide" : "") +
          (open ? " open" : ""),
      },
      h(
        "div",
        { className: "nav-in" },
        h(
          "a",
          { className: "brand", href: "index.html" },
          h("img", { src: C.logo[0], alt: C.logo[1] }),
        ),
        h(
          "nav",
          {
            id: "menu",
            className: "links",
            ref: wrap,
            onMouseLeave: function () {
              place(active);
            },
          },
          C.nav.map(function (n) {
            return h(
              "a",
              {
                key: n[1],
                href: n[1],
                className: "nl" + (n[1] === active ? " act" : ""),
                "aria-current": n[1] === active ? "page" : undefined,
                ref: function (el) {
                  links.current[n[1]] = el;
                },
                onMouseEnter: function () {
                  place(n[1]);
                },
                onFocus: function () {
                  place(n[1]);
                },
                onClick: function () {
                  setOpen(false);
                },
              },
              n[0],
            );
          }),
          h("span", {
            className: "mark" + (mk.on ? " on" : ""),
            style: {
              transform: "translateX(" + mk.x + "px)",
              width: mk.w + "px",
            },
          }),
        ),
        h(
          "div",
          { className: "nav-r" },
          h(
            "button",
            {
              type: "button",
              className: "theme coin",
              "aria-label": "Toggle light and dark theme",
              "aria-pressed": theme === "light",
              onClick: toggleTheme,
            },
            h("img", {
              className: "ic-sun",
              src: C.themeIcons[0],
              alt: C.themeIcons[1],
            }),
            h("img", {
              className: "ic-moon",
              src: C.themeIcons[2],
              alt: C.themeIcons[3],
            }),
          ),
          h(
            "button",
            {
              type: "button",
              className: "burger",
              "aria-label": "Menu",
              "aria-expanded": open,
              "aria-controls": "menu",
              onClick: function () {
                setOpen(!open);
              },
            },
            h("i"),
            h("i"),
            h("i"),
          ),
        ),
      ),
      h("div", {
        className: "prog",
        style: { transform: "scaleX(" + prog + ")" },
      }),
    );
  }

  /* ---------- Small primitives ---------- */
  function Reveal(p) {
    var ref = useRef(null),
      s = useState(false),
      on = s[0],
      setOn = s[1];
    useEffect(function () {
      if (reduced() || !("IntersectionObserver" in window)) {
        setOn(true);
        return;
      }
      var io = new IntersectionObserver(
        function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) {
              setOn(true);
              io.disconnect();
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
      );
      io.observe(ref.current);
      return function () {
        io.disconnect();
      };
    }, []);
    return h(
      p.as || "div",
      {
        ref: ref,
        className:
          "rv" + (on ? " in" : "") + (p.className ? " " + p.className : ""),
        style: { "--d": (p.delay || 0) + "ms" },
      },
      p.children,
    );
  }

  /* section title: small gold star and a rule that draws itself */
  function Sec(p) {
    var Tag = p.as || "h2";
    return h(
      Reveal,
      { className: "sec-wrap" },
      h(
        Tag,
        { className: "sec" + (p.className ? " " + p.className : ""), id: p.id },
        p.children,
      ),
    );
  }

  function Tilt(p) {
    var ref = useRef(null),
      max = p.max || 6;
    function mv(e) {
      if (!fine() || reduced() || !ref.current) return;
      var r = ref.current.getBoundingClientRect(),
        px = (e.clientX - r.left) / r.width,
        py = (e.clientY - r.top) / r.height,
        st = ref.current.style;
      st.setProperty("--rx", ((0.5 - py) * max).toFixed(2) + "deg");
      st.setProperty("--ry", ((px - 0.5) * max).toFixed(2) + "deg");
      st.setProperty("--mx", (px * 100).toFixed(1) + "%");
      st.setProperty("--my", (py * 100).toFixed(1) + "%");
    }
    function lv() {
      var st = ref.current.style;
      st.setProperty("--rx", "0deg");
      st.setProperty("--ry", "0deg");
    }
    return h(
      p.as || "div",
      {
        ref: ref,
        className: "tilt " + (p.className || ""),
        onMouseMove: mv,
        onMouseLeave: lv,
      },
      p.children,
    );
  }

  function Btn(p) {
    var ref = useRef(null);
    function mv(e) {
      if (!fine() || reduced()) return;
      var r = ref.current.getBoundingClientRect();
      ref.current.style.transform =
        "translate(" +
        ((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1) +
        "px," +
        ((e.clientY - r.top - r.height / 2) * 0.28).toFixed(1) +
        "px)";
    }
    function lv() {
      ref.current.style.transform = "";
    }
    var ext = /^https?:/.test(p.href);

    return h(
      "a",
      {
        ref: ref,
        href: p.href,
        className: "btn " + (p.kind || "pri"),
        onMouseMove: mv,
        onMouseLeave: lv,
        target: p.target || (ext ? "_blank" : undefined),
        rel: p.target === "_blank" || ext ? "noopener noreferrer" : undefined,
      },
      h("span", null, p.children),
    );
  }

  function Coin(p) {
    /* round gold-rimmed badge that keeps any icon color */
    return h(
      "span",
      { className: "coin" + (p.className ? " " + p.className : "") },
      h("img", { src: p.src, alt: p.alt, loading: "lazy" }),
    );
  }

  function Socials(p) {
    return h(
      "ul",
      { className: "soc" },
      (p.items || C.social).map(function (s) {
        return h(
          "li",
          { key: s[0] },
          h(
            "a",
            {
              href: s[2],
              className: "coin",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            h("img", { src: C.asset(s[1]), alt: s[0] }),
          ),
        );
      }),
    );
  }

  function Footer() {
    return h(
      "footer",
      { className: "foot" },
      h(
        "div",
        { className: "wrap" },
        h(Socials, null),
        h(
          "nav",
          { className: "foot-nav", "aria-label": "Footer" },
          C.nav.map(function (n) {
            return h("a", { key: n[1], href: n[1] }, n[0]);
          }),
        ),
        h("p", { className: "copy" }, C.footer),
      ),
    );
  }

  /* ---------- Hero name: letters respond to the pointer ---------- */
  function HeroName(p) {
    var words = p.text.split(" "),
      offset = 0;
    return h(
      "h1",
      { className: "hero-name", "aria-label": p.text },
      words.map(function (w, wi) {
        var start = offset;
        offset += w.length + 1;
        return h(
          Fragment,
          { key: wi },
          wi > 0 && h("span", { className: "sp", "aria-hidden": "true" }, " "),
          h(
            "span",
            { className: "word", "aria-hidden": "true" },
            w.split("").map(function (ch, i) {
              return h(
                "span",
                { key: i, className: "ch", style: { "--i": start + i } },
                ch,
              );
            }),
          ),
        );
      }),
    );
  }

  /* constellation drawn around the portrait */
  function Constellation() {
    var arcs = [
      [
        [-5, 22],
        [8, 2],
        [28, -6],
        [50, -3],
      ],
      [
        [103, 8],
        [108, 44],
        [104, 90],
        [109, 122],
      ],
      [
        [62, 133],
        [36, 128],
        [14, 134],
        [-4, 104],
      ],
    ];
    var pts = [].concat.apply([], arcs);
    return h(
      "svg",
      { className: "const", viewBox: "-10 -10 120 150", "aria-hidden": "true" },
      arcs.map(function (a, i) {
        return h("path", {
          key: i,
          pathLength: 1,
          d:
            "M" +
            a
              .map(function (p) {
                return p.join(",");
              })
              .join(" L"),
          style: { "--k": i },
        });
      }),
      pts.map(function (p, i) {
        return h("circle", {
          key: i,
          cx: p[0],
          cy: p[1],
          r: i % 3 === 0 ? 0.95 : 0.6,
          style: { "--k": i },
        });
      }),
    );
  }

  /* ---------- Screenshot grid and lightbox ---------- */
  function Shots(p) {
    var items = p.items,
      s = useState(-1),
      i = s[0],
      setI = s[1],
      x = useRef(null),
      last = useRef(null);
    function open(n) {
      last.current = document.activeElement;
      setI(n);
    }
    function close() {
      setI(-1);
      if (last.current && last.current.focus) last.current.focus();
    }
    useEffect(
      function () {
        if (i < 0) return;
        function k(e) {
          if (e.key === "Escape") close();
          if (e.key === "ArrowRight")
            setI(function (v) {
              return (v + 1) % items.length;
            });
          if (e.key === "ArrowLeft")
            setI(function (v) {
              return (v - 1 + items.length) % items.length;
            });
        }
        window.addEventListener("keydown", k);
        document.body.style.overflow = "hidden";
        if (x.current) x.current.focus();
        return function () {
          window.removeEventListener("keydown", k);
          document.body.style.overflow = "";
        };
      },
      [i],
    );
    return h(
      Fragment,
      null,
      h(
        "div",
        { className: "shots" },
        items.map(function (it, n) {
          return h(
            Reveal,
            { key: it[0], delay: n * 90 },
            h(
              "button",
              {
                type: "button",
                className: "shot win",
                onClick: function () {
                  open(n);
                },
                "aria-label": it[1],
              },
              h("img", { src: it[0], alt: it[1], loading: "lazy" }),
            ),
          );
        }),
      ),
      i >= 0 &&
        h(
          "div",
          {
            className: "lb",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": items[i][1],
            onClick: function (e) {
              if (e.target === e.currentTarget) close();
            },
          },
          h("button", {
            ref: x,
            type: "button",
            className: "lb-x",
            onClick: close,
            "aria-label": "Close",
          }),
          h("button", {
            type: "button",
            className: "lb-n prev",
            "aria-label": "Previous",
            onClick: function () {
              setI((i - 1 + items.length) % items.length);
            },
          }),
          h("img", { key: i, src: items[i][0], alt: items[i][1] }),
          h("button", {
            type: "button",
            className: "lb-n next",
            "aria-label": "Next",
            onClick: function () {
              setI((i + 1) % items.length);
            },
          }),
          h(
            "div",
            { className: "lb-dots" },
            items.map(function (_, n) {
              return h("i", { key: n, className: n === i ? "on" : "" });
            }),
          ),
        ),
    );
  }

  /* ---------- Timeline ---------- */
  function Timeline(p) {
    return h(
      "ol",
      { className: "tl" },
      p.items.map(function (it, i) {
        return h(
          "li",
          { key: it.title },
          h(
            Reveal,
            { delay: i * 120 },
            h(
              "div",
              { className: "tl-card win" },
              h("p", { className: "tl-date" }, it.date),
              h("h4", null, it.title),
              h("p", { className: "tl-org" }, it.org),
              h("p", null, it.text),
            ),
          ),
        );
      }),
    );
  }

  /* ---------- Contact form ---------- */
  function ContactForm() {
    var L = C.contact.labels,
      s = useState("idle"),
      st = s[0],
      setSt = s[1];
    function submit(e) {
      e.preventDefault();
      var f = e.currentTarget;
      if (!f.checkValidity()) {
        f.reportValidity();
        return;
      }
      var v = {
        name: f.elements.name.value,
        email: f.elements.email.value,
        phone: f.elements.phone.value,
        message: f.elements.message.value,
      };
      setSt("sending");
      function done(ok) {
        setSt(ok ? "sent" : "err");
        if (ok) f.reset();
        setTimeout(function () {
          setSt("idle");
        }, 3400);
      }
      var E = C.contact.emailjs;
      if (!window.emailjs) {
        done(false);
        return;
      }
      emailjs
        .send(
          E.service,
          E.template,
          {
            name: v.name.trim(),
            email: v.email.trim(),
            phone: v.phone,
            message: v.message,
          },
          { publicKey: E.publicKey },
        )
        .then(
          function () {
            done(true);
          },
          function () {
            done(false);
          },
        );
    }
    function fld(id, label, type, extra) {
      var tag = type === "textarea" ? "textarea" : "input";
      var props = Object.assign(
        { id: id, name: id, placeholder: " ", autoComplete: extra && extra.ac },
        type === "textarea" ? { rows: 5 } : { type: type },
      );
      if (extra && extra.req) props.required = true;
      if (extra && extra.pattern) {
        props.pattern = extra.pattern;
        props.title = extra.title;
      }
      if (extra && extra.max) props.maxLength = extra.max;
      if (extra && extra.mode) props.inputMode = extra.mode;
      if (extra && extra.strip) {
        props.onInput = function (e) {
          e.target.value = e.target.value.replace(extra.strip, "");
        };
      }
      return h(
        "div",
        { className: "fld" },
        h(tag, props),
        h("label", { htmlFor: id }, label),
      );
    }
    return h(
      "form",
      { className: "cform", onSubmit: submit, noValidate: true },
      fld("name", L.name, "text", {
        req: 1,
        ac: "name",
        pattern: "[A-Za-zÑñ ]+",
        title: "Letters only, no numbers or symbols",
        strip: /[^A-Za-zÑñ ]/g,
      }),
      fld("email", L.email, "email", { req: 1, ac: "email" }),
      fld("phone", L.phone, "tel", {
        req: 1,
        ac: "tel",
        pattern: "[0-9]{11}",
        title: "Enter exactly 11 digits (e.g. 09123456789)",
        max: 11,
        mode: "numeric",
        strip: /\D/g,
      }),
      fld("message", L.message, "textarea", { req: 1 }),
      h(
        "button",
        {
          type: "submit",
          className: "btn pri send " + st,
          disabled: st === "sending",
        },
        h("span", null, C.contact.submit),
      ),
    );
  }

  window.ORV_UI = {
    StarField: StarField,
    Cursor: Cursor,
    Wall: Wall,
    Header: Header,
    Footer: Footer,
    Reveal: Reveal,
    Sec: Sec,
    Tilt: Tilt,
    Btn: Btn,
    Coin: Coin,
    Socials: Socials,
    HeroName: HeroName,
    Constellation: Constellation,
    Shots: Shots,
    Timeline: Timeline,
    ContactForm: ContactForm,
    wireLinks: wireLinks,
  };
})();
