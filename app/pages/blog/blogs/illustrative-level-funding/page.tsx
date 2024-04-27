import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Illustrative Level-Funding in Healthcare Coverage - MyHealthily",
    description: "With a completed master questionnaire, your small group clients will receive plans for multiple national carriers to choose from in one platform.",
};

interface Props { }

const IllustrativeLevelFunding: React.FC<Props> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>MyHealthily Blog</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-4">
                <div className="row">
                    <div className="col">
                        <div className="blog-posts single-post">
                            <article className="post post-large blog-single-post border-0 m-0 p-0">
                                <div className="post-content ms-0">
                                    {/* Title, author, tags, year */}
                                    <h2 className="font-weight-semi-bold">Illustrative Level-Funding</h2>
                                    <div className="post-meta">
                                        <span><i className="far fa-user"></i> By <a href="../team-bios#jeremy-mclendon">Jeremy McLendon</a></span>
                                        <span><i className="far fa-folder"></i> Healthcare Platform, Illustrative Level-Funding</span>
                                        <span><i className="far fa-calendar"></i> JAN, 19 2023</span>
                                    </div>
                                    <img src="/img/blog/illustrative-level-funding.jpg" className="img-fluid float-start me-4 mt-2" alt="" />

                                    <p>At MyHealthily, we open an entire new world of health insurance for brokers and agents. With over 170 carriers quoted with the click of a button, you and your clients are no longer limited by plan options. Though if you have a relatively healthy group and want to look at offering them more saving with a level funded health plan, we have you covered there as well.</p>

                                    <p>When searching your plans, you will notice a level-funded option with four carriers listed. From there you can select the carriers you wish to receive plans from. Once you move forward you will notice illustrative pricing. This is MyHealthily's Illustrative Level-Funding feature.</p>

                                    <h3>How it Works</h3>

                                    <p>This illustrative pricing gives you and your clients a starting point for the cost of these coverage options. Once you choose to learn more about these plan options each team member will receive a link to a simple health questionnaire via email. As soon as the questionnaire has been completed by all of the team members, you will receive plan options from the carriers you selected.</p>

                                    <h3>Multiple Quotes from Multiple Carriers</h3>

                                    <p>Yes, you can complete one master questionnaire and receive plans for multiple carriers! When you receive the plan options, 99% of the time the pricing is significantly less than what was represented with the illustrative pricing. Now you and your client can make an educated decision about their healthcare coverage options having all the information possible at your fingertips.</p>

                                    <p>By using Illustrative Level-Funding by <a href="/how-it-works">MyHealthily</a>, you can pair the savings of level-funded healthcare plans with a significantly lower cost. As an added bonus for your clients, every level-funded plan includes a suite of FREE non-insurance benefits called Prosper Benefits. By taking advanatage of MyHealthily's Illustrative Level-Funding, you create more opportunities to better serve clients while increasing your revenue and reducing your time spent per client with a platform that offers more and does it all from quoting to enrollment to renewal.</p>

                                    <h3>Want a Quick Demo?</h3>

                                    <p>Contact our MyHealthily team to <a href="/book-demo">request a quick demo</a> of MyHealthily's Illustrative Level-Funding feature. Another way MyHealthily is here to help you do more for your agency and your clients.</p>

                                    <a href="/blog" className="mb-1 mt-1 me-1 btn btn-light"><i className="fas fa-arrow-left"></i> Return to Blog</a>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IllustrativeLevelFunding;