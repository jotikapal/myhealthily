import React from "react";
import type { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
    title: "How MyHealthily Works",
};

interface Props { }

const Faqs: React.FC<Props> = () => {

    return (
        <div role="main" className="main">
            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>FAQs</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container container-xl-custom py-1 my-1">
                <div className="row justify-content-center">
                    <div className="col-xl-9 text-center">
                        <p className="line-height-9 text-4 opacity-9 appear-animation"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">Answers to the most common questions about MyHealthily’s platform.</p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="toggle toggle-primary m-0">
                            <Faq title="What is MyHealthily?">
                                MyHealthily is an online platform built by agents, for agents to profitably quote, enroll, service and renew healthcare coverage and ancillary lines for small businesses.
                            </Faq>

                            <Faq title="Can I see a demo?">
                                Yes! We invite you to <a href="book-demo">book a demo</a> today.
                            </Faq>

                            <Faq title="How much does MyHealthily cost?">
                                $399 per month – No contracts, cancel anytime! Once you'e enrolled 500 lives your monthly fee will be waived.
                            </Faq>

                            <Faq title="How do I sign up for MyHealthily?">
                                Simply <a href="https://app.myhealthily.com/shop/agency/signup">create an account</a> to get started.
                            </Faq>

                            <Faq title="How do commissions work?">
                                Agents retain 100% of all retail commissions.
                            </Faq>

                            <Faq title="What states does MyHealthily operate in?">
                                MyHealthily operates in all 50 states and the District of Columbia.
                            </Faq>

                            <Faq title="What carriers are included on this platform?">
                                MyHealthily works with more than 170 carriers, including Aetna, Aflac, Allstate Benefits, Anthem, Bean, Blue Cross, Cigna, Kaiser, Principal, Sidecar Health, United Healthcare, and many, many others. Plus, we are continuously adding new carriers to our ever-expanding platform.
                            </Faq>

                            <Faq title="Is MyHealthily just for medical plans?">
                                No. MyHealthily empowers agents to quote medical, dental, vision, voluntary, supplemental, and life plans. We also include our proprietary Prosper Benefits with all level funded plans or as a standalone benefit.
                            </Faq>

                            <Faq title="Will MyHealthily add new products?">
                                Yes! We will continue to expand our product portfolio ongoing.
                            </Faq>

                            <Faq title="Does MyHealthily quote level-funded plans?">
                                Yes! You can quote level-funded plans alongside fully insured plans.
                            </Faq>

                            <Faq title="Who at my agency should have a MyHealthily account?">
                                We recommend anyone who works directly with clients such as agents, producers, assistants, and office support to have their own account.
                            </Faq>

                            <Faq title="What if I am already using a quoting tool?">
                                MyHealthily offers more quoting options than any other platform, and we're a lot more than just a quoting tool. We are a full-service platform that assists in selling, completes electronic enrollment, and allows for total servicing of all accounts. <a href="book-demo">Book your demo</a> today.
                            </Faq>

                            <Faq title="Is my data safe on MyHealthily?">
                                Yes! MyHealthily takes data security and privacy very seriously. <a href="/blog/myhealthily-security-information">Learn more</a> about how we protect your data.
                            </Faq>

                            <Faq title="Does MyHealthily support adds, changes, and deletes?">
                                Yes, MyHealthily supports the most common benefit administration needs, including employee changes throughout the year.
                            </Faq>

                            <Faq title="What happens if I BOR a case, can I load that into MyHealthily’s software?">
                                Yes, MyHealthily’s Agency Dashboard is designed with you in the driver’s seat. You can add and remove clients from the sales system as you need to help to manage the sales and enrollment of your groups.
                            </Faq>

                            <Faq title="Do you provide training and support?">
                                Yes! You will have access to a large library of training videos, product details, and knowledge base. MyHealthily is here to provide WOW customer service to our agents and their clients.
                            </Faq>

                            <Faq title="What types of medical plans are offered?">
                                MyHealthily is an all-inclusive platform that provides quote and enrolment capabilities with Fully Insured, Level Funded, Referenced Based, MEC, and more. Zip code and Situs State drive the quote results, but MyHealthily typically provides hundreds of options for each client.
                            </Faq>

                            <Faq title="Can I use MyHealthily to administer my small group’s renewal?">
                                Yes, MyHealthily specializes in not on the sale of small group benefits, but also in assisting the agent in managing renewals for those same clients year over year.
                            </Faq>

                            <Faq title="How does MyHealthily get its data?">
                                To ensure our data is timely and accurate, we source it directly from the carrier when possible. We also source out third-party data when needed.
                            </Faq>

                            <Faq title="Can I add plans not pre-loaded in MyHealthily?">
                                No, not currently for enrollment. Our comparison tool does allow for entering current plan costs for comparison purposes.
                            </Faq>

                            <Faq title="What ancillary lines are offered?">
                                We offer dental, vision, life, LTD, STD, and EAP – with more supplemental plans added frequently.
                            </Faq>

                            <Faq title="What if my census changes in the middle of the sales process?">
                                MyHealthily supports census changes throughout the underwriting process.
                            </Faq>

                            <Faq title="Does MyHealthily work with other benefits admin platforms?">
                                Our software does not currently integrate with other benefits admin platforms, but we do provide full payroll and enrollment reports in multiple formats to upload into payroll and benefit admin platforms.
                            </Faq>

                            <Faq title="How do I sell level funded, reference based pricing, and other outside of the box options? My clients only seem to be comfortable with fully insured plans.">
                                MyHealthily quotes fully insured plans, but also allows agents the ability to show their clients the difference and ease of moving from fully insured to a more competitively priced level funded or other health solution.
                            </Faq>

                            <Faq title="What is Prosper Benefits?">
                                Free with all level-funded plans, your clients can use these services and tools when they need to see a doctor, counselor, health consultant, or get a prescription filled. Learn more about <a href="/prosper">Prosper Benefits</a>
                            </Faq>

                            <Faq title="Can an agent continue working with their local carrier reps?">
                                In several instances the relationship between local rep and agent will remain unchanged, however the placement of the selected plan will be through MyHealthily’s software. If the agent works with Allstate before signing on, we need to know who their field rep is when they sign up so we can make sure that is accounted for. For Aflac, the agent will need to work through our system with its self-service setup for employee enrollment. With an enhanced enrollment approach for Aflac with MyHealthily, there is no longer a need for the onsite and face to face representation for Aflac plans.
                            </Faq>
                        </div>
                    </div>
                </div>
            </div>
            <div><br /><br /><br /></div>
        </div>
    );
}

export default Faqs;
