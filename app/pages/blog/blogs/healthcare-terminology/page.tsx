import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Healthcare Terminology - MyHealthily",
    description: "Definitions of the most commonly used health insurance industry terms, names, and acronyms to help you navigate the world of healthcare.",
};

interface Props { }

const HealthcareTerminology: React.FC<Props> = () => {

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
                                    <h2 className="font-weight-semi-bold">Healthcare Terminology</h2>
                                    <div className="post-meta">
                                        <span><i className="far fa-user"></i> By Cate Kirkland</span>
                                        <span><i className="far fa-folder"></i> Healthcare Terminology</span>
                                        <span><i className="far fa-calendar"></i> Aug, 15 2023</span>
                                    </div>
                                    <img src="/img/blog/healthcare-terminology.jpg" className="img-fluid float-start me-4 mt-2" alt="Healthcare Terminology" />
                                    <p>There is no denying it - shopping for healthcare is NOT fun. It can be stressful and a little overwhelming, especially when it comes to terminology and acronyms. Sometimes it might even feel like a foreign language. This can be frustrating when shopping and navigating the world of health insurance.</p>

                                    <p>You may not know and understand every single term, name, or acronym, but you can certainly get the hang of the basics. We have listed a few of the most commonly used terms in the health insurance industry to help enable you to explore healthcare with ease.</p>

                                    <h3>Basic Health Insurance Terms:</h3>

                                    <ul>
                                        <li><strong>Copayment</strong> – One of the most frequently used terms when it comes time to shop for healthcare, visit the doctor, and deal with claims. A co-payment is an amount set by the insurance company that you will be required to pay for each visit to the doctor, hospital, urgent care, or specialist. (This amount is almost always required to be paid at the time of service.)</li>
                                        <li><strong>Coinsurance</strong> – Similar to copays, this term refers to the amount of the bill you will be required to pay after your annual deductible has been met. For example, you may pay 20% of the bill while your insurance covers the other 80%.</li>
                                        <li><strong>Deductible</strong> – This has been mentioned twice already, so you may be wondering what a deductible is. This is the set amount of money you are required to pay for healthcare services before your insurance plan kicks in. For example, you may have a deductible of $1,600. Once you have paid this much out of pocket, your insurance company will cover further expenses and you may only be required to manage copayments or coinsurance.</li>
                                        <li><strong>In-Network</strong> – This is an extremely important term to pay attention to when you are shopping for your health insurance. If you or someone on your team must utilize a specific doctor or hospital, you will want to make sure they are "In-Network." This means that these providers are in a contract with your insurance company to be covered for care.</li>
                                        <li><strong>Premium</strong> – This is the amount you will pay to your health insurance company each month (regardless of deductible).</li>
                                        <li><strong>Open Enrollment</strong> – Much like it sounds, this is the period throughout the year in which you can enroll in a new health insurance plan. Although not all companies and plans will require you to enroll during this time, it is important to know when this is and how it impacts your rates.</li>
                                        <li><strong>Ancillary Coverage</strong> – This coverage is important to pay attention to. Even though it sounds nice, there just isn’t a healthcare plan that will cover every need. This is where ancillary coverage comes in to fill in the gaps as a secondary health insurance.</li>
                                    </ul>

                                    <h3>Health Insurance Acronyms</h3>

                                    <p>Acronyms in health insurance are usually a little more complex but can still be extremely beneficial to understand.</p>

                                    <p><strong>PPO</strong> – PPO or "Preferred Provider Organization" is one of the more common types of managed healthcare plans. It can be especially helpful when it comes to saving on healthcare as the insurance company forms a partnership with certain providers (preferred providers) to create lower-cost visits. You can choose to seek care from a doctor or physician outside of this list, it just may cost more.</p>

                                    <p><strong>HMO</strong> – also known as a "Health Maintenance Organization" is another quite common form of a managed healthcare plan. These plans are like PPOs in that they collaborate with specific doctors and hospitals, however, if you choose to go outside of this plan, you may not have any coverage at all.</p>

                                    <p><strong>HSA</strong> – a "Health Savings Account" is another wonderful way to save with healthcare. These personal savings accounts are not taxed and can be used for qualified healthcare expenses.</p>

                                    <h3>Why It is important to know what health insurance terminology means:</h3>

                                    <p>Although you may not remember each of these terms, it is important to at least have a basic understanding of what they mean and how they can impact you:</p>

                                    <ul>
                                        <li><strong>Savings:</strong> certain plans may mean cost savings for you and your team</li>
                                        <li><strong>The right fit:</strong> knowing the basics will enable you to find the right plan that meets YOUR needs</li>
                                        <li><strong>No surprises:</strong> you will know what you are paying for and when. This means no unexpected bills.</li>
                                    </ul>

                                    <p>The terminology we have covered only begins to scratch the surface of what you may see while shopping for healthcare. They are, however, important things to know to gain confidence when searching for the right plan. For the rest of it which you may still be confused by, <a href="/">MyHealthily</a> is here to help. <a href="/book-demo">Contact a trusted advisor</a> to learn more about the world of health insurance, available savings, and so much more!</p>

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

export default HealthcareTerminology;