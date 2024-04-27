import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The 80/20 Rule (Part 2 of 3) - MyHealthily",
    description: "MyHealthily created an all-in-one platform to help brokers and agents better serve small group benefits in both a scalable and profitable way.",
};

interface Props { }

const RulePart2: React.FC<Props> = () => {

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
                                    <h2 className="font-weight-semi-bold">The 80/20 Rule (Part 2 of 3)</h2>
                                    <div className="post-meta">
                                        <span><i className="far fa-user"></i> By <a href="../team-bios#michael-malhame">Michael Malhame</a></span>
                                        <span><i className="far fa-folder"></i>  Brokers, Business, Healthcare Coverage, Small Group, 80/20 Rule</span>
                                        <span><i className="far fa-calendar"></i> MAR 10, 2023</span>
                                    </div>
                                    <img src="/img/blog/80-20-rule-part-2.jpg" className="img-fluid float-start me-4 mt-2" alt="" />

                                    <h3>Hard Truth About Small Group Health</h3>

                                    <p>Small group health insurance can be time consuming, costly, and can require extra customer service. These are a few of the hard truths brokers and agents have come to know about small group benefits, along with the fact that often times they just aren't profitable for a brokerage. What if you could keep your local reputation as a business leader while helping small businesses create realistic expectations and gain the benefits they desire for their teams and do so profitability. Many would say this is all too good to be true, while we would say this is what we help brokers do daily!</p>

                                    <h3>Be the Broker that Helps!</h3>

                                    <p>As a broker you are a leader in your community, you attend events and meetings and give business minded advice to friends and colleagues. By being a part of your community in this way you have become a business leader! While being a business leader is amazing, it also leads to more small business clients, which often times are the clients as noted in our last blog post, who require 80% of your time while producing 20% of less of your revenue. As a leader you want and need to help these small groups, but you need to ensure you are able to remain profitable at the same time. This is where you must use the resources at your disposal, to increase revenue and decrease time and cost of customer service.</p>

                                    <h3>Small Groups High Expectations</h3>

                                    <p>Small groups often require more time and customer service because their timeline and expectations do not align with the mainstream way of quoting and enrolling health insurance. Then add that because you are a business leader in the community often times clients can feel that helping them is your only priority. Things can get hectic quickly with clients like these, and every broker has them. Managing these expectations and using the resources you have at your disposal are key.</p>

                                    <p>Let's start with managing a client's expectations. This starts with the very first conversation you have with them about health insurance and ancillary benefits. This is where you learn about their business, employees, and current needs, and you layout how you are able to help. Set out a timeline along with your needs to quote them potential benefit plans, this outlines early on what everyone is to expect and helps reduce time spent with a customer service issue. Now for using your resources, assistants are a great place to start with small groups they are able to set appointments and phone calls to discuss needs and choices, while ensuring the client feels heard.</p>

                                    <h3>Work Smarter Not Harder</h3>

                                    <p>This old adage is often times easier said than done, but once you have the right resource to help in the process of quoting, enrolling, and servicing clients all of that will change. There are many resources at your disposal as a broker, one of which is platform offerings, and though there are many choices there is only one platform offering more carrier and plan options in seconds - MyHealthily!</p>

                                    <p><a href="/">MyHealthily</a> created an all-in-one platform to help brokers and agents better serve small group benefits in both a scalable and profitable way. This platform allows you to work smarter not harder for all of your clients, but especially small businesses who can often require more time while producing less profit.</p>

                                    <p>By being the broker that helps in your community you are gaining a reputation for the better while growing your business. This is amazing, but often times this gains you a number of small business clients who have high expectations for what you are able to do for them. You must first ensure everyone has reasonable expectations then use your resources to your advantage. Resources include assistants, and sometimes a platform that helps you meet and often times exceed small group client expectations. Allowing you to offer not only major medical, but ancillary coverage options in real time to clients! Set-up a demo today and learn how you too can become more profitable while saving time and growing your business.</p>

                                    <h4>80/20 Blog Series</h4>

                                    <p><a href="80-20-rule-part-1">Read Part 1</a> or <a href="80-20-rule-part-3">Read Part 3</a> of our 80/20 blog series.</p>

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

export default RulePart2;