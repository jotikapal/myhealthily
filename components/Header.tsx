import React from "react";
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 70}">
            <div className="header-body border-top-0">
                <div className="header-container container">
                    <div className="header-row">
                        <div className="header-column">
                            <div className="header-row">
                                <div className="header-logo">
                                    <a href="/">
                                        <img src="../img/myhealthily-logo.png" alt="" width="200" height="55" data-sticky-width="180" data-sticky-height="49" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header-column justify-content-end">
                            <div className="header-row">
                                <div
                                    className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border order-2 order-lg-1">
                                    <div
                                        className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                        <nav className="collapse">
                                            <ul className="nav nav-pills" id="mainNav">
                                                <li className="dropdown"><Link href="/pages/platform/how-it-works">Platform</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" href="/pages/platform/how-it-works">How it Works</Link></li>
                                                        <li><Link className="dropdown-item" href="/pages/platform/marketing-support">Marketing Support</Link></li>
                                                        <li className="dropdown"><Link href="/pages/platform/faqs">FAQs</Link></li>
                                                        <li><a className="dropdown-item" href="https://app.myhealthily.com/shop/agency/signup" target="_new">Sign Up &nbsp; <i className="fa fa-external-link" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><Link href="/pages/blog">Blog</Link></li>
                                                <li className="dropdown"><Link href="/pages/company/about-myhealthily">Company</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" href="/pages/company/about-myhealthily">About</Link></li>
                                                        <li><Link className="dropdown-item" href="/pages/company/contact">Contact</Link></li>
                                                        <li><Link className="dropdown-item" href="/pages/company/press-releases">Press Releases</Link></li>
                                                        <li><Link className="dropdown-item" href="/pages/company/careers">Careers</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/pages/book-demo"><span className="badge badge-primary badge-md">BOOK YOUR DEMO</span></Link></li>
                                                <li><a href="https://app.myhealthily.com/" target="_new"><span className="badge badge-quaternary badge-md">LOGIN</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}