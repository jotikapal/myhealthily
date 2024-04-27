import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The 80/20 Rule (Part 1 of 3) - MyHealthily",
    description: "Clients that require 80% of your time only create 20% or less of your profit. Here are some tools and options to help get the balance back.",
};

interface Props { }

const RulePart1: React.FC<Props> = () => {

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
                                    <h2 className="font-weight-semi-bold">The 80/20 Rule (Part 1 of 3)</h2>
                                    <div className="post-meta">
                                        <span><i className="far fa-user"></i> By <a href="../team-bios#michael-malhame">Michael Malhame</a></span>
                                        <span><i className="far fa-folder"></i>  Business, Healthcare Coverage, Small Groups, 80/20 Rule</span>
                                        <span><i className="far fa-calendar"></i> FEB 24, 2023</span>
                                    </div>
                                    <img src="/img/blog/80-20-rule-part-1.jpg" className="img-fluid float-start me-4 mt-2" alt="" />
                                    <h3>The Delima of Customer Service</h3>

                                    <p>There is a consistent dilemma in business, between complete customer service and return on time invested. The main issue being those clients that require 80% of your time only create 20% or many times even less of your profit. The scale is imbalanced when you consider the time spent to quote and service. There are tools and options to help get the balance back:</p>

                                    <h3>Time Resources Revenue</h3>

                                    <p>Let's start by looking at your revenue per client compared to the time spent with that client.  Many of our clients notice small businesses are where they spend the majority of their time while seeing less overall revenue from these same groups. This in depth look into your book of business will help you see where you can make changes, better use your resources, or possibly add resources.</p>

                                    <p>Now that you have a better vision of time and revenue let's see what resources you have at your disposal to help tilt the scales back into a revenue producing conversation- this means less time spent on quoting, enrollment, and service. By reducing the workload of quoting, enrollment, and servicing of an account you are able to increase the return on time spent with each client. This means utilizing all your resources for the best possible outcome. Resources in this specific case can be an assistant to find a clients most direct need and help them find the right health insurance plans for those needs, or a software which can quote and start enrollment in as little as a 45 minute conversation between the broker and client. Software like this means no more weeks or months spent going back and forth between the client and carriers.</p>

                                    <h3>Get Your Answer Fast</h3>

                                    <p>Another way to look at your ROI of time spent is to look at your quoting time for clients who do not become customers. This could be a large volume of time spent within customer service. When you quote the traditional way, you speak with a client, learn about their needs, gain quotes from 2-3 carriers for a few plans and this entire process can take weeks or even months! All for a potential client to let you know they are going with another broker, or the price is more than they thought and it's not in their budget.</p>

                                    <p>What if you could get to the no from potential client in minutes and not weeks or months. Think of not only the time savings but the money as well. When you work with software that quotes both clients and potential clients instantly with hundreds of plan options from over 135 carriers including ancillary and supplemental insurance, you save so much time and money by getting to the potential no quicker.</p>

                                    <h3>Ancillary Coverage can be Sticky</h3>

                                    <p>When looking at client coverage options how many times do you skip <a href="/how-it-works">ancillary coverage</a> because of the time and money it takes to quote and then enroll? Ancillary coverage is a place where many brokers leave valuable money on the table with clients. Clients want all the options possible at the best price. For the average broker this means more time spent on quoting and customer service going back and forth between the client and carriers. By working with an all-in-one software platform like that created by <a href="/">MyHealthily</a> you are able to quote not only major medical, but ancillary coverage as well- this includes short term disability, dental, vision, cancer policies, hospital indemnity, and so much more all with a few simple clicks and it's done in seconds for all of your clients and their employees.</p>

                                    <p>When you narrow down your focus and look at the dilemma of customer service within your book of business, like many of our clients you may note your highest expenses come from the time spend quoting small groups, who may not become clients, or as a broker leaving revenue on the table by not including ancillary coverage. By reevaluating these potential clients and using resources at your disposal you will quickly see a change in not only your team and their usage of time, but your clients and the amount of time they require. Streamlined processes for quoting, enrollment, and servicing of clients keeps return on time spent on customer service scale in balance, and clients happier with a quicker process.</p>

                                    <h4>80/20 Blog Series</h4>

                                    <p><a href="80-20-rule-part-2">Read Part 2</a> or <a href="80-20-rule-part-3">Read Part 3</a> of our 80/20 blog series.</p>

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

export default RulePart1;