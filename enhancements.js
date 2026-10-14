(() => {
  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  };

  ready(() => {
    const boot = () => {
      const root = document.querySelector("#root");
      if (!root || !root.children.length) {
        window.setTimeout(boot, 80);
        return;
      }

      document.documentElement.classList.add("enhanced");

      const revealTargets = document.querySelectorAll(
        ".section-heading, .value-card, .problem-card, .solution-card, .comparison-card, .process-grid article, .team-card, .guarantee-grid article"
      );

      revealTargets.forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
      });

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
      );
      revealTargets.forEach((element) => revealObserver.observe(element));

      const navLinks = [...document.querySelectorAll('.site-header a[href^="#"]')].filter(
        (link) => link.getAttribute("href") !== "#inicio"
      );
      const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

      const activeObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${visible.target.id}`
            );
          });
        },
        { rootMargin: "-28% 0px -60% 0px", threshold: [0, 0.2, 0.6] }
      );
      sections.forEach((section) => activeObserver.observe(section));

      const contactHref =
        document.querySelector(".nav-cta")?.getAttribute("href") ||
        document.querySelector(".whatsapp")?.getAttribute("href") ||
        "#contacto";

      const addCta = (container, text) => {
        if (!container || container.querySelector(".section-cta")) return;
        const link = document.createElement("a");
        link.className = "button primary section-cta";
        link.href = contactHref;
        link.target = contactHref.startsWith("http") ? "_blank" : "";
        link.rel = link.target ? "noreferrer" : "";
        link.innerHTML = `${text} <span aria-hidden="true">↗</span>`;
        container.appendChild(link);
      };

      addCta(document.querySelector(".calculator"), "Quiero reducir este costo");
      addCta(document.querySelector(".solutions-section .shell"), "Solicitar diagnóstico");

      const footerBrand = document.querySelector(".footer-brand");
      if (footerBrand && !footerBrand.querySelector(".footer-orbits")) {
        const orbits = document.createElement("div");
        orbits.className = "footer-orbits";
        orbits.setAttribute("aria-hidden", "true");
        orbits.innerHTML = `
          <span class="footer-orbit footer-orbit--light"><i></i></span>
          <span class="footer-orbit footer-orbit--blue"><i></i></span>
          <span class="footer-orbit footer-orbit--green"><i></i></span>
        `;
        footerBrand.appendChild(orbits);
      }

      const range = document.querySelector(".calculator input[type='range']");
      const calculator = document.querySelector(".calculator");
      if (range && calculator) {
        range.addEventListener("input", () => {
          calculator.classList.remove("is-calculating");
          requestAnimationFrame(() => calculator.classList.add("is-calculating"));
          window.clearTimeout(calculator._animationTimer);
          calculator._animationTimer = window.setTimeout(
            () => calculator.classList.remove("is-calculating"),
            320
          );
        });
      }

      const heroVisual = document.querySelector(".hero-visual");
      const heroImage = document.querySelector(".hero-image");
      if (heroVisual && heroImage && matchMedia("(pointer:fine)").matches) {
        heroVisual.addEventListener("pointermove", (event) => {
          const rect = heroVisual.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          heroImage.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0) scale(1.015)`;
        });
        heroVisual.addEventListener("pointerleave", () => {
          heroImage.style.transform = "";
        });
      }
    };

    boot();
  });
})();
