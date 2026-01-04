class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
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

            .mobile-menu-button {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
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
                    padding: 1.5rem;
                    gap: 1.25rem;
                    display: none;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .nav-links.active {
                    display: flex;
                }
            }
        `;

        const nav = document.createElement('nav');

        nav.innerHTML = `
            <div class="container">
                <a href="/" class="logo">
                    <i data-feather="scissors"></i>
                    Clear Cut Crew
                </a>

                <button class="mobile-menu-button" aria-label="Menu">
                    <i data-feather="menu"></i>
                </button>
                <div class="nav-links">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/services.html" class="nav-link">Services</a>
                    <a href="/gallery.html" class="nav-link">Gallery</a>
                    <a href="/reviews.html" class="nav-link">Client Reviews</a>
                    <a href="/about.html" class="nav-link">Our Story</a>
                    <a href="/contact.html" class="cta-button">Free Quote</a>
</div>
</div>
        `;

        this.shadowRoot.append(style, nav);

        // Mobile toggle
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-button');
        const navLinks = this.shadowRoot.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Feather icons
        if (window.feather) {
            window.feather.replace();
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);
