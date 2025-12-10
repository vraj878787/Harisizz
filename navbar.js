class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(14, 14, 14, 0.95);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    height: 70px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #F6F4F1;
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-link {
                    color: #F6F4F1;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 1rem;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .nav-link:hover {
                    color: #C58A3A;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #C58A3A;
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #F6F4F1;
                    font-size: 1.8rem;
                    cursor: pointer;
                }

                .mobile-menu {
                    display: none;
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background-color: #0E0E0E;
                    padding: 2rem 1.5rem;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
                }

                .mobile-menu.active {
                    display: block;
                }

                .mobile-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>

            <div class="container">
                <a href="/" class="logo">The Razor's Edge</a>

                <div class="nav-links">
                    <a href="#home" class="nav-link">Home</a>
                    <a href="#services" class="nav-link">Services</a>
                    <a href="#gallery" class="nav-link">Gallery</a>
                    <a href="#reviews" class="nav-link">Reviews</a>
                    <a href="#book" class="nav-link">Book Now</a>
                </div>

                <!-- Fixed inline SVG icon -->
                <button class="mobile-menu-btn" aria-label="Toggle Menu">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F6F4F1" stroke-width="2" stroke-linecap="round">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                </button>

                <div class="mobile-menu">
                    <div class="mobile-links">
                        <a href="#home" class="nav-link">Home</a>
                        <a href="#services" class="nav-link">Services</a>
                        <a href="#gallery" class="nav-link">Gallery</a>
                        <a href="#reviews" class="nav-link">Reviews</a>
                        <a href="#book" class="nav-link">Book Now</a>
                    </div>
                </div>
            </div>
        `;

        const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Auto close menu after click
        const links = this.shadowRoot.querySelectorAll('.mobile-links .nav-link');
        links.forEach(link =>
            link.addEventListener('click', () => mobileMenu.classList.remove('active'))
        );
    }
}

customElements.define('custom-navbar', CustomNavbar);
