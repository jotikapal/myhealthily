import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get Started - Healthcare, Dental, Vision, and More!",
};

interface Props { }

const GetStarted: React.FC<Props> = () => {

    return (
        <div role="main" className="main">
            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>Get Started</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container container-xl-custom py-1 my-1">
                <div className="row justify-content-center">
                    <div className="col-xl-9 text-center">
                        <h2 className="font-weight-bold text-11 appear-animation"
                            data-appear-animation="fadeInUpShorter">Who Are You Looking to Cover?</h2>
                        <p className="line-height-9 text-4 opacity-9 appear-animation"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">Please select the
                            shopping experience that best describes you.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center text-md-start pt-4 pb-5 my-4">
                    <div className="col-lg-6 mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter"
                        data-appear-animation-delay="600">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Group Coverage</h2>
                        <ul className="list list-icons list-primary">
                            <li><i className="fas fa-check"></i> I own a business</li>
                            <li><i className="fas fa-check"></i> I employees between 2 – 500+ people</li>
                            <li><i className="fas fa-check"></i> I’m looking to get healthcare for my employees</li>
                            <li><i className="fas fa-check"></i> I’m looking to get healthcare for myself, my spouse
                                and/or children
                            </li>
                        </ul>
                        <a href="/schedule" className="btn btn-modern btn-primary btn-effect-1 mt-32">CONTINUE</a>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter"
                        data-appear-animation-delay="1000">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Individual & Family Coverage</h2>
                        <ul className="list list-icons list-primary">
                            <li><i className="fas fa-check"></i> I am looking to get healthcare for myself, my spouse
                                and/or children (none of which are employeed by my business)
                            </li>
                        </ul>
                        <a href="https://myhealthily.com/individuals/"
                            className="btn btn-modern btn-primary btn-effect-1 mt-3">CONTINUE</a>
                    </div>
                </div>
            </div>

            <div id="examples" className="container py-2">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col pb-3">
                                <h4>About Your Plan​</h4>
                                <div className="alert alert-default">
                                    You are not joining a group healthcare plan that is part of an association.​ Our
                                    licensed advisors will help you narrow down the right coverage for you, based on your
                                    specific needs.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;