import React from "react";
import "./footer.css"
import Link from 'next/link';

 const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-ribbon"><span>MyHealthily</span></div>
                <div className="row py-5 my-4">
                    <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <h5 className="text-3 mb-3">AWARD WINNING</h5>
                        <p className="pe-1 footer-text-color">MyHealthiy is an award winning platform, checkout our reviews below!</p>
                        <a href="https://www.softwareadvice.com/insurance/myhealthily-profile" target="_new">
                            <img
                                // border="0" 
                                width="30%" src="https://badges.softwareadvice.com/reviews/586a03dd-8716-42cc-88e6-af9816f25338" />
                        </a>
                        <a href="https://www.capterra.com/reviews/249765/MyHealthily?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge" target="_new">
                            <img
                                // border="0" 
                                width="30%"
                                // hspace="5" 
                                src="https://assets.capterra.com/badge/c6c24312b6441e05f77f30387cb2d448.svg?v=2206224&p=249765" />
                        </a>
                        <a href="https://www.getapp.com/industries-software/a/myhealthily/reviews/" target="_new">
                            <img
                                // border="0" 
                                width="30%" src="https://www.getapp.com/ext/reviews_widget/v1/dark/myhealthily-application" />
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h5 className="text-3 mb-3">QUICK LINKS</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 pb-1">
                                <Link href="/pages/company/careers">
                                    <p className="text-3 text-color-light opacity-8 mb-0"><i className="fas fa-angle-right text-color-primary"></i><span className="ms-2 footer-text-color">Careers</span></p>
                                </Link>
                            </li>
                            <li className="mb-2 pb-1">
                                <Link href="/pages/book-demo">
                                    <p className="text-3 text-color-light opacity-8 mb-0"><i className="fas fa-angle-right text-color-primary"></i><span className="ms-2 footer-text-color">Book Your Demo</span></p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/company/about-myhealthily">
                                    <p className="text-3 text-color-light opacity-8 mb-0"><i className="fas fa-angle-right text-color-primary"></i><span className="ms-2 footer-text-color">About Us</span></p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <div className="contact-details">
                            <h5 className="text-3 mb-3">CONTACT US</h5>
                            <ul className="list list-icons list-icons-lg">
                                <li className="mb-1"><i className="fab fa-whatsapp text-color-primary"></i><p className="m-0 footer-text-color">(888) 219-7952</p></li>
                                <li className="mb-1"><i className="far fa-envelope text-color-primary"></i><p className="m-0"><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#103;&#101;&#110;&#116;&#115;&#64;&#109;&#121;&#104;&#101;&#97;&#108;&#116;&#104;&#105;&#108;&#121;&#46;&#99;&#111;&#109;"><span className="footer-text-color">&#97;&#103;&#101;&#110;&#116;&#115;&#64;&#109;&#121;&#104;&#101;&#97;&#108;&#116;&#104;&#105;&#108;&#121;&#46;&#99;&#111;&#109;</span></a></p></li>
                                <li className="mb-1"><i className="fa fa-map-marker text-color-primary"></i><p className="m-0 footer-text-color">25 Rockwood Place, Suite 210<br />Englewood, NJ 07631</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-3 mb-3">LET'S CONNECT</h5>
                        <ul className="social-icons">
                            <li className="social-icons-facebook"><a href="https://www.facebook.com/MyHealthily/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="social-icons-twitter"><a href="https://twitter.com/myhealthily" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                            <li className="social-icons-linkedin"><a href="https://www.linkedin.com/company/myhealthily/mycompany/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                            <li className="social-icons-Instagram"><a href="https://www.instagram.com/myhealthily/" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                        </ul>

                        {/* Trustpilot widget */}
                        <div className="trustpilot-widget mt-3" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="6115586b14771b001dd1d747" data-style-height="150px" data-style-width="100%" data-theme="dark">
                            <a href="https://web.archive.org/web/20230322162740/https://www.trustpilot.com/review/myhealthily.com" target="_blank" rel="noopener">Trustpilot</a></div>

                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container py-2">
                    <div className="row py-4">
                        <div className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                            <a href="/" className="logo pe-0 pe-lg-3">
                                <img alt="" src="../img/logo-footer.png" className="opacity-5" width="60" height="33" data-plugin-options="{'appearEffect': 'fadeIn'}" />
                            </a>
                        </div>
                        <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                            <p>&copy; 2020 - {new Date().getFullYear()}, <a href="/" target="_new"><span
                                className="footer-text-color">MyHealthily Insurance Solutions, LLC</span></a></p>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
                            <nav id="sub-menu">
                                <ul>
                                    <li><i className="fas fa-angle-right"></i><Link href="/pages/compliance-legal" className="ms-1 text-decoration-none"> Compliance & Legal</Link></li>
                                    <li><i className="fas fa-angle-right"></i><Link href="/pages/privacy-policy" className="ms-1 text-decoration-none"> Privacy Policy</Link></li>
                                    <li><i className="fas fa-angle-right"></i><Link href="/pages/company/contact" className="ms-1 text-decoration-none"> Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
