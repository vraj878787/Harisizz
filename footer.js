class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #0E0E0E;
                    color: #F6F4F1;
                    padding: 4rem 0 2rem;
                    border-top: 1px solid rgba(197, 138, 58, 0.2);
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }
                
                .footer-section h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                    color: #C58A3A;
                }
                
                .footer-section p, .footer-section a {
                    color: #F6F4F1;
                    opacity: 0.8;
                    margin-bottom: 0.75rem;
                    display: block;
                    transition: opacity 0.3s ease;
                }
                
                .footer-section a:hover {
                    opacity: 1;
                    color: #C58A3A;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(197, 138, 58, 0.1);
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background-color: #C58A3A;
                }
                
                .footer-bottom {
                    text-align: center;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(197, 138, 58, 0.1);
                    font-size: 0.875rem;
                    opacity: 0.7;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            </style>
            
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>The Razor's Edge</h3>
                        <p>Precision cuts, timeless shaves, and elevated grooming rituals for the modern gentleman.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#book">Book Now</a>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <p>123 Luxury Lane, London NW1 4SA</p>
                        <p>+44 20 7123 4567</p>
                        <p>hello@therazorsedge.com</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Hours</h3>
                        <p>Monday - Friday: 9am - 7pm</p>
                        <p>Saturday: 10am - 5pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} The Razor's Edge. All rights reserved.</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);