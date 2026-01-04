class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                background: #121212;
                color: #e5e5e5;
            }

            footer {
                padding: 4rem 0 2rem;
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 3rem;
            }

            .brand {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .logo {
                display: flex;
                align-items: center;
                gap: 0.6rem;
                font-size: 1.4rem;
                font-weight: 700;
                color: #ffffff;
                letter-spacing: -0.4px;
            }

            .description {
                font-size: 0.95rem;
                line-height: 1.6;
                color: #a3a3a3;
                max-width: 320px;
            }

            .socials {
                display: flex;
                gap: 0.75rem;
                margin-top: 0.5rem;
            }

            .social {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background: #1f1f1f;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ffffff;
                transition: background 0.25s ease, transform 0.25s ease;
            }

            .social:hover {
                background: #1f7a3f;
                transform: translateY(-2px);
            }

            .section h4 {
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 1.2rem;
                color: #ffffff;
            }

            .links {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 0.7rem;
            }

            .links a,
            .links li {
                font-size: 0.9rem;
                color: #a3a3a3;
                text-decoration: none;
                transition: color 0.25s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .links a:hover {
                color: #ffffff;
            }

            .bottom {
                margin-top: 3rem;
                padding-top: 1.5rem;
                border-top: 1px solid rgba(255,255,255,0.08);
                text-align: center;
                font-size: 0.85rem;
                color: #8a8a8a;
            }

            @media (max-width: 768px) {
                footer {
                    padding: 3rem 0 1.5rem;
                }
            }
        `;

        const footer = document.createElement('footer');
        footer.innerHTML = `
            <div class="container">
                <div class="brand">
                    <div class="logo">
                        <i data-feather="scissors"></i>
                        Clear Cut Crew
                    </div>
                    <p class="description">
                        Professional lawn care, landscaping, and snow removal services
                        across Canada. Clean work. Reliable results.
                    </p>
                    <div class="socials">
                        <a href="#" class="social"><i data-feather="facebook"></i></a>
                        <a href="#" class="social"><i data-feather="instagram"></i></a>
                        <a href="#" class="social"><i data-feather="twitter"></i></a>
                        <a href="#" class="social"><i data-feather="linkedin"></i></a>
                    </div>
                </div>

                <div class="section">
                    <h4>Services</h4>
                    <ul class="links">
                        <li><a href="/services#lawn">Lawn Maintenance</a></li>
                        <li><a href="/services#snow">Snow Removal</a></li>
                        <li><a href="/services#landscaping">Landscaping</a></li>
                        <li><a href="/services#seasonal">Seasonal Cleanup</a></li>
                    </ul>
                </div>

                <div class="section">
                    <h4>Contact</h4>
                    <ul class="links">
                        <li><i data-feather="phone"></i> (514) 555-1234</li>
                        <li><i data-feather="mail"></i> info@clearcutcrew.com</li>
                        <li><i data-feather="map-pin"></i> Canada</li>
                    </ul>
                </div>
            </div>

            <div class="bottom">
                © ${new Date().getFullYear()} Clear Cut Crew. All rights reserved.
            </div>
        `;

        this.shadowRoot.append(style, footer);

        if (window.feather) {
            window.feather.replace();
        }
    }
}

customElements.define('custom-footer', CustomFooter);
