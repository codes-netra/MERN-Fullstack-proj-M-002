import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>ProductSales</h2>
                <p>© {currentYear} Product Sales Company. All rights reserved.</p>
                <p>Location: Kathmandu</p>
                <div className="social-media">
                    {['Facebook', 'Twitter', 'Instagram'].map(platform => (
                        <a 
                            key={platform} 
                            href={`https://${platform.toLowerCase()}.com`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
