import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How MyHealthily Works",
};

interface Props { }

const MarketingSupport: React.FC<Props> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>Marketing Support</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container container-xl-custom py-1 my-1">
                <div className="row justify-content-center">
                    <div className="col-xl-9 text-center">
                        <p className="line-height-9 text-4 opacity-9 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">Marketing is an essential aspect of any agency’s success, and it can be overwhelming to tackle alone. That's where MyHealthily’s marketing support comes into play. We provide a comprehensive range of media and materials templates to help agencies achieve their marketing goals by reaching existing clients and potential prospects.</p>
                    </div>
                </div>
            </div>

            {/* Feature - 3 images */}
            <section className="section section-height-3 bg-color-grey-scale-1 m-0 border-0">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 pb-sm-4 pb-lg-0 pe-lg-5 mb-sm-5 mb-lg-0">
                            <h2 className="text-color-dark font-weight-normal text-6 mb-2">Experienced Marketing Professionals</h2>
                            <p className="lead">Marketing is a complex and constantly evolving field, and it can be challenging for business owners to keep up with the latest trends and best practices.</p>
                            <p className="pe-5 me-5">Full marketing support from MyHealthily allows agencies to benefit from the expertise of our marketing experts. By working with our team, agencies can tap into the knowledge and experience of a department of professionals who stay up-to-date with the latest developments in the small group healthcare space.</p>
                        </div>
                        <div className="col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-md-4 offset-lg-2 position-relative mt-sm-5 image-padding-top">
                            <img src="/img/marketing-leads.jpg" className="img-fluid position-absolute d-none d-sm-block appear-animation image-padding-1" data-appear-animation="expandIn" data-appear-animation-delay="300" alt="" />
                            <img src="/img/marketing-drawings.jpg" className="img-fluid position-absolute d-none d-sm-block appear-animation image-padding-2" data-appear-animation="expandIn" alt="" />
                            <img src="/img/marketing-support.jpg" className="img-fluid position-relative appear-animation mb-2" data-appear-animation="expandIn" data-appear-animation-delay="600" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Columns */}
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-4 appear-animation" data-appear-animation="fadeInLeftShorter"
                        data-appear-animation-delay="800">
                        <h3 className="font-weight-bold text-4 mb-2">Marketing Support Includes</h3>
                        <ul className="list list-icons list-dark mt-4">
                            <li><i className="fa fa-desktop"></i> Digital ads</li>
                            <li><i className="fa fa-book"></i> Print ads</li>
                            <li><i className="fa fa-share-square"></i> Social media content</li>
                        </ul>
                    </div>
                    <div className="col-md-4 appear-animation" data-appear-animation="fadeIn"
                        data-appear-animation-delay="600">
                        <h3 className="font-weight-bold text-4 mb-2">&nbsp;</h3>
                        <ul className="list list-icons list-dark mt-4">
                            <li><i className="fa fa-rss"></i> Blog copy</li>
                            <li><i className="fa fa-file"></i> Brochures</li>
                            <li><i className="fa fa-envelope"></i> Email templates</li>
                        </ul>
                    </div>
                    <div className="col-md-4 appear-animation" data-appear-animation="fadeInRightShorter"
                        data-appear-animation-delay="800">
                        <h3 className="font-weight-bold text-4 mb-2">&nbsp;</h3>
                        <ul className="list list-icons list-dark mt-4">
                            <li><i className="fa fa-play"></i> Videos</li>
                            <li><i className="fa fa-laptop"></i> Webinars</li>
                            <li><i className="fa fa-plus-circle"></i> And More</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* One Column */}
            <div className="container pt-3 pb-2">
                <div className="row pt-2">
                    <div className="col">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Differentiate Your Agency</h2>
                        <p>MyHealthily’s marketing support can be a valuable benefit for agencies that want to improve and expand their marketing efforts. It provides agents and brokers with a vehicle to reach their target audience and differentiate their agency from the others. Whether it is email content for your drip campaigns, compelling images for your social media accounts, or brochures to hand out at events or meetings, our marketing team is here for you.</p>
                    </div>
                </div>
            </div>

            {/* One Column */}
            <div className="container pt-3 pb-2">
                <div className="row pt-2">
                    <div className="col">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Custom Content Solutions</h2>
                        <p>If you need branded marketing media or materials, we can help. Our marketing department can create custom videos, flyers, banner ads, and much more. Contact your customer services specialist for full details.</p>
                    </div>
                </div>
            </div>

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

export default MarketingSupport;
