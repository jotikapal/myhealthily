import React from "react";
import type { Metadata } from "next";

interface Props { }

const MainComponent: React.FC<Props> = () => {
    return <>
        <div className="container container-xl-custom py-1 my-1">
            <div className="row justify-content-center">
                <div className="col-xl-9 text-center">
                    <h2 className="font-weight-bold text-11 appear-animation"
                        data-appear-animation="fadeInUpShorter">MyHealthily is a Game Changer!</h2>
                    <p className="line-height-9 text-4 opacity-9 appear-animation"
                        data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">MyHealthily allows agents and brokers to profitably quote, enroll, and service small group clients in less than 45 minutes.</p>
                </div>
            </div>
        </div>

        <div className="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">
            <div className="home-concept mt-5">
                <div className="container">

                    <div className="row text-center">
                        <span className="sun"></span>
                        <span className="cloud"></span>
                        <div className="col-lg-2 ms-lg-auto">
                            <div className="process-image">
                                <img src="/img/health.jpg" alt="" />
                                <strong>Health</strong>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="process-image process-image-on-middle">
                                <img src="/img/ancillary.jpg" alt="" />
                                <strong>Ancillary</strong>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="process-image">
                                <img src="/img/profitably.jpg" alt="" />
                                <strong>Profitably</strong>
                            </div>
                        </div>
                        <div className="col-lg-4 ms-lg-auto">
                            <div className="project-image">
                                <div id="fcSlideshow" className="fc-slideshow">
                                    <ul className="fc-slides">
                                        <li><a href="book-demo" aria-label=""><img className="img-fluid" src="/img/circle-myhealthily.jpg" alt="Book a Demo" /></a></li>
                                        <li><a href="book-demo" aria-label=""><img className="img-fluid" src="/img/circle-laptop.jpg" alt="Book a Demo" /></a></li>
                                    </ul>
                                </div>
                                <strong className="our-work">MyHealthily</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export const metadata: Metadata = {
    title: "MyHealthily | How it Works",
    description: "MyHealthily is a platform that allows agents and brokers to profitably provide healthcare benefits to their small group clients in one call.",
};

interface Propss { }

const HowItWorks: React.FC<Propss> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>How it Works</h1>
                        </div>
                    </div>
                </div>
            </section>

            <MainComponent />

            <div className="container py-4">
                <div className="row">
                    <div className="col-md-7 order-2">
                        <div className="overflow-hidden">
                            <h2 className="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">How We’re Different</h2>
                        </div>
                        <div className="overflow-hidden mb-3">
                            <p className="font-weight-bold text-primary text-uppercase mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">MyHealthily</p>
                        </div>
                        <p className="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">For agents who serve small businesses, MyHealthily provides differentiation through our proprietary platform.</p>

                        <p className="pb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800">With a completed census, you can quote medical, ancillary, and voluntary benefits, complete contribution strategies, and start enrollment in one 45 minute meeting.</p>
                        <hr className="solid my-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="900" />
                        <div className="row align-items-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
                            <div className="col-lg-6">
                                <a href="book-demo" className="btn btn-modern btn-primary mt-3">Book Your Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter">
                        <img src="/img/agent-using-myhealthily.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="row featured-boxes-full">
                    <div className="col-lg-3 featured-box-full featured-box-full-primary">
                        <i className="fa fa-medkit  "></i>
                        <h4 className="font-weight-normal text-5">More Carriers & Plans</h4>
                        <p className="mb-0">Offer your clients thousands of plan options from more than 170 carriers and ancillary products. </p>
                    </div>
                    <div className="col-lg-3 featured-box-full featured-box-full-secondary">
                        <i className="fa fa-hourglass"></i>
                        <h4 className="font-weight-normal text-5">One 45 minute Call</h4>
                        <p className="mb-0">With a completed census, turn days and weeks of work into one 45 minute meeting with your client. </p>
                    </div>
                    <div className="col-lg-3 featured-box-full featured-box-full-tertiary">
                        <i className="fa fa-money-bill-wave"></i>
                        <h4 className="font-weight-normal text-5">$399 per Month </h4>
                        <p className="mb-0">Your subscription will automatically renew on the first of each month. Once you’ve enrolled 500 lives your monthly fee will be waived. Agents keep 100% of retail commissions.</p>
                    </div>
                    <div className="col-lg-3 featured-box-full featured-box-full-quaternary">
                        <i className="fa fa-star"></i>
                        <h4 className="font-weight-normal text-5">Differentiate Your Agency</h4>
                        <p className="mb-0">Access more medical and ancillary rates in real-time with technology that provides access to quote, enroll, and manage small group health insurance profitably.</p>
                    </div>
                </div>
            </div>

            {/* Large icons, title, copy */}
            <div className="container mt-5">
                <div className="row">
                    <div className="featured-boxes featured-boxes-style-2">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="700">
                                <div className="featured-box featured-box-effect-4">
                                    <div className="box-content">
                                        <i className="icon-featured icon-calculator icons text-color-primary bg-color-grey"></i>
                                        <h4 className="font-weight-bold">Age Banding</h4>
                                        <p className="px-3">MyHealthily is the only platform than can display age banded or composite pricing from all carriers, in all 50 states.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="900">
                                <div className="featured-box featured-box-effect-4">
                                    <div className="box-content">
                                        <i className="icon-featured icon-target icons text-color-light bg-color-primary"></i>
                                        <h4 className="font-weight-bold">Marketing Support</h4>
                                        <p className="px-3">We provide marketing materials to send to your clients and prospects such as email templates, blog articles, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1100">
                                <div className="featured-box featured-box-effect-4">
                                    <div className="box-content">
                                        <i className="icon-featured icon-emotsmile icons text-color-primary bg-color-grey"></i>
                                        <h4 className="font-weight-bold">WOW Customer Service</h4>
                                        <p className="px-3">We’re here to help you and your clients resolve issues by providing full customer support. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="1500">
                                <div className="featured-box featured-box-effect-4">
                                    <div className="box-content">
                                        <i className="icon-featured icon-list icons text-color-light bg-color-primary"></i>
                                        <h4 className="font-weight-bold">Full Access</h4>
                                        <p className="px-3">Benefit choices include fully insured, medically underwritten, and ancillary health insurance products.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="1300">
                                <div className="featured-box featured-box-effect-4">
                                    <div className="box-content">
                                        <i className="icon-featured icon-screen-desktop icons text-color-primary bg-color-grey"></i>
                                        <h4 className="font-weight-bold">Easy-to-Use Platform</h4>
                                        <p className="px-3">We’ve developed a straight-forward user experience that makes enrollment and client management a breeze.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="1100">
                                <div className="featured-box featured-box-effect-4">
                                    <div className="box-content">
                                        <i className="icon-featured icon-wrench icons text-color-light bg-color-primary"></i>
                                        <h4 className="font-weight-bold">Cost Saving Tools</h4>
                                        <p className="px-3">All level funded plans include a suite of non-insurance tools designed to lower clams and reduce cost for employers and employees.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carriers */}
            <section className="call-to-action">
                <div className="container">
                    <div className="row text-center pb-2 mt-4">
                        <h4>170+ National Carriers</h4>
                        <div className="owl-carousel owl-theme carousel-center-active-item mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 5}}, 'autoplay': true, 'autoplayTimeout': 1500, 'dots': false}">
                            <div><img className="img-fluid" src="/img/allstate.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/aflac.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/aetna.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/united.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/sidecar.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/principal.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/oscar.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/kaiser-permanente.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/humana.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/guardian-healthcare.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/friday-health-plans.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/cigna.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/careington.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/blue-cross.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/beam.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/anthem.jpg" alt="" /></div>
                            <div><img className="img-fluid" src="/img/and-many-more.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial begins */}
            <div className="container">
                <div className="row my-3"></div>
                <div className="row my-5 pb-2">
                    <div className="col-lg-4">
                        <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
                            <div className="card-body py-3 px-2">
                                <div className="testimonial testimonial-style-4 border-0 box-shadow-none m-0 p-0">
                                    <div className="testimonial-author pb-3">
                                        <div className="testimonial-author-thumbnail">
                                            <img src="img/logo-ima.jpg" className="img-fluid rounded-circle" alt="" />
                                        </div>
                                        <p><strong className="font-weight-bold">Jodi G.</strong><span>Senior Benefits Account Executive - ima</span>
                                        </p>
                                    </div>
                                    <div className="px-4 mx-2 pt-2 pb-3">
                                        <h4 className="font-weight-semi-bold">Easy to Use Platform</h4>
                                        <p>The ability to quote and present health and life options to clients on a
                                            user-friendly platform is a game-changer! The Technology is ideal for us! It
                                            makes small accounts less cumbersome.</p>
                                        <p className="mb-0"><i className="fas fa-star text-color-primary text-2"></i><i
                                            className="fas fa-star text-color-primary text-2"></i><i
                                                className="fas fa-star text-color-primary text-2"></i><i
                                                    className="fas fa-star text-color-primary text-2"></i><i
                                                        className="fas fa-star text-color-primary text-2"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
                            <div className="card-body py-3 px-2">
                                <div className="testimonial testimonial-style-4 border-0 box-shadow-none m-0 p-0">
                                    <div className="testimonial-author pb-3">
                                        <div className="testimonial-author-thumbnail">
                                            <img src="img/logo-deland-gibson.jpg" className="img-fluid rounded-circle"
                                                alt="" />
                                        </div>
                                        <p><strong className="font-weight-bold">Erin C.</strong><span>Account Executive - Deland, Gibson Insurance</span>
                                        </p>
                                    </div>
                                    <div className="px-4 mx-2 pt-2 pb-3">
                                        <h4 className="font-weight-semi-bold">Super Time Saver</h4>
                                        <p>Improved efficiency on both the enrollment and renewal sides is easy to see.
                                            80% of our current clients would appreciate this. You quickly see competitive
                                            rates, and it’s simple. This platform cuts the amount we spend by at least
                                            70%! It turns a 7-hour job into a 45 minute call!</p>
                                        <p className="mb-0"><i className="fas fa-star text-color-primary text-2"></i><i
                                            className="fas fa-star text-color-primary text-2"></i><i
                                                className="fas fa-star text-color-primary text-2"></i><i
                                                    className="fas fa-star text-color-primary text-2"></i><i
                                                        className="fas fa-star text-color-primary text-2"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
                            <div className="card-body py-3 px-2">
                                <div className="testimonial testimonial-style-4 border-0 box-shadow-none m-0 p-0">
                                    <div className="testimonial-author pb-3">
                                        <div className="testimonial-author-thumbnail">
                                            <img src="img/logo-insurica.jpg" className="img-fluid rounded-circle" alt="" />
                                        </div>
                                        <p><strong className="font-weight-bold">Gregg G.</strong><span>Virtual Sales Director/Advisor - Insurica</span>
                                        </p>
                                    </div>
                                    <div className="px-4 mx-2 pt-2 pb-3">
                                        <h4 className="font-weight-semi-bold">Simplified the Process</h4>
                                        <p>What you’ve done here is taken something that could be hugely complex and time
                                            consuming and you have shaved 70% – 80% of that time and complexity out of
                                            it.</p>
                                        <p className="mb-0"><i className="fas fa-star text-color-primary text-2"></i><i
                                            className="fas fa-star text-color-primary text-2"></i><i
                                                className="fas fa-star text-color-primary text-2"></i><i
                                                    className="fas fa-star text-color-primary text-2"></i><i
                                                        className="fas fa-star text-color-primary text-2"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial ended */}

            {/* Call to action begins */}
            <section className="call-to-action call-to-action-default with-button-arrow call-to-action-in-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-lg-9">
                            <div className="call-to-action-content">
                                <h3>Schedule a Demo</h3>
                                <p className="mb-0">Give us a few minutes to walk you through our platform, answer
                                    questions, and get you signed up!</p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="call-to-action-btn">
                                <a href="book-demo"
                                    className="btn btn-modern text-2 btn-primary">LET'S TALK</a><span
                                        className="arrow hlb d-none d-md-block cta-padding" data-appear-animation="rotateInUpLeft"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default HowItWorks;
