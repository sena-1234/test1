(() => {
  const yearTargets = document.querySelectorAll("[data-year]");
  const thisYear = String(new Date().getFullYear());
  yearTargets.forEach((node) => {
    node.textContent = thisYear;
  });

  const siteHeader = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const printingToggle = document.querySelector("[data-printing-toggle]");
  const printingSubmenu = document.querySelector("[data-printing-submenu]");
  const printingIcon = document.querySelector("[data-printing-icon]");
  const headerActions = document.querySelector("[data-header-actions]");
  const scrollTopButton = document.querySelector("[data-scroll-top]");

  const setPrintingState = (isOpen) => {
    if (!printingToggle || !printingSubmenu) return;
    printingSubmenu.classList.toggle("is-open", isOpen);
    printingToggle.setAttribute("aria-expanded", String(isOpen));
    if (printingIcon) {
      printingIcon.textContent = isOpen ? "-" : "+";
    }
  };

  const setHeaderState = () => {
    if (!siteHeader) return;
    if (window.scrollY > 50) {
      siteHeader.classList.add("is-scrolled");
    } else {
      siteHeader.classList.remove("is-scrolled");
    }
  };

  const closeMenu = () => {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    setPrintingState(false);
  };

  const openMenu = () => {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.add("is-open");
    menuToggle.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (printingToggle && printingSubmenu) {
      printingToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const isOpen = printingSubmenu.classList.contains("is-open");
        setPrintingState(!isOpen);
      });
    }

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!headerActions) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!headerActions.contains(target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  const faqButtons = Array.from(document.querySelectorAll("[data-faq-trigger]"));

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      if (!item) return;
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach((entry) => {
        entry.classList.remove("is-open");
        const trigger = entry.querySelector("[data-faq-trigger]");
        const symbol = trigger?.querySelector("span");
        if (trigger) trigger.setAttribute("aria-expanded", "false");
        if (symbol) symbol.textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        const symbol = button.querySelector("span");
        if (symbol) symbol.textContent = "-";
      }
    });
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -20px 0px",
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
})();
