class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      nav {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid rgba(0,0,0,0.05);
        position: relative;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.5px;
        color: #1f7a3f;
        text-decoration: none;
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .nav-link {
        text-decoration: none;
        font-size: 0.95rem;
        font-weight: 500;
        color: #2b2b2b;
        transition: color 0.25s ease;
      }

      .nav-link:hover {
        color: #1f7a3f;
      }

      .cta-button {
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 600;
        padding: 0.55rem 1.3rem;
        border-radius: 999px;
        background: #1f7a3f;
        color: #fff;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .cta-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 18px rgba(31, 122, 63, 0.25);
      }

      /* Hamburger button */
      .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }

      .mobile-menu-button:focus {
        outline: 2px solid rgba(31, 122, 63, 0.35);
        outline-offset: 2px;
      }

      .hamburger {
        width: 26px;
        height: 18px;
        position: relative;
        display: inline-block;
      }

      .hamburger span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: #1f7a3f;
        border-radius: 999px;
        transition: transform 0.2s ease, top 0.2s ease, opacity 0.2s ease;
      }

      .hamburger span:nth-child(1) { top: 0; }
      .hamburger span:nth-child(2) { top: 8px; }
      .hamburger span:nth-child(3) { top: 16px; }

      /* Turn into X when open */
      .mobile-menu-button.open .hamburger span:nth-child(1) {
        top: 8px;
        transform: rotate(45deg);
      }
      .mobile-menu-button.open .hamburger span:nth-child(2) {
        opacity: 0;
      }
      .mobile-menu-button.open .hamburger span:nth-child(3) {
        top: 8px;
        transform: rotate(-45deg);
      }

      @media (max-width: 768px) {
        .mobile-menu-button {
          display: block;
        }

        .nav-links {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          flex-direction: column;
          padding: 1.5rem 2rem;
          gap: 1.25rem;
          display: none;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .nav-links.active {
          display: flex;
        }

        .cta-button {
          width: 100%;
          text-align: center;
        }
      }
    `;

    const nav = document.createElement("nav");

    nav.innerHTML = `
      <div class="container">
        <a href="/" class="logo">
          <i data-feather="scissors"></i>
          Clear Cut Crew
        </a>

        <button class="mobile-menu-button" aria-label="Open menu" aria-expanded="false">
          <span class="hamburger" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        </button>

        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/services.html" class="nav-link">Services</a>
          <a href="/gallery.html" class="nav-link">Gallery</a>
          <a href="/reviews.html" class="nav-link">Client Reviews</a>
          <a href="/about.html" class="nav-link">Our Story</a>
          <a href="/contact.html" class="cta-button">Free Quote</a>
          <a href="/thank-you.html" class="nav-link" hidden>Thank You</a>
        </div>
      </div>
    `;

    this.shadowRoot.append(style, nav);

    const menuBtn = this.shadowRoot.querySelector(".mobile-menu-button");
    const navLinks = this.shadowRoot.querySelector(".nav-links");

    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
    };

    const openMenu = () => {
      navLinks.classList.add("active");
      menuBtn.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.setAttribute("aria-label", "Close menu");
    };

    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("active");
      isOpen ? closeMenu() : openMenu();
    });

    // Close menu when any link is clicked (mobile UX)
    this.shadowRoot.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    // Feather icons
    if (window.feather) window.feather.replace();
  }
}

customElements.define("custom-navbar", CustomNavbar);
