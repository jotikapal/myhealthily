import React from "react";
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "MyHealthily | Blog for Agents and Brokers",
    description: "A blog for agents and brokers who seek to profitably quote, enroll, and service small group clients.",
};

interface Props { }

const Blog: React.FC<Props> = () => {
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

            {/* Blog container begins */}
            <div className="container py-4">
                <div className="row">
                    <div className="col">
                        <div className="blog-posts">
                            <div className="row">

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/how-employee-census-changes-your-business"><img src="../img/blog/how-employee-census-changes-your-business.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/how-employee-census-changes-your-business">How an Employee Census Changes Your Business?</Link></h2>
                                            <p>When paired with the right platform, an employee census can change the way you quote, enroll, and service clients.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/how-employee-census-changes-your-business" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/real-time-quoting-powerhouse"><img src="../img/blog/real-time-quoting-powerhouse.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/real-time-quoting-powerhouse">Unveiling the Real-Time Quoting Powerhouse</Link></h2>
                                            <p>Discover the transformative potential of real-time quoting with MyHealthily, empowering brokers with speed, accuracy.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/real-time-quoting-powerhouse" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/myhealthily-customization-capabilities"><img src="../img/blog/myhealthily-customization-capabilities.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/myhealthily-customization-capabilities">Unveiling MyHealthily's Customization Capabilities</Link></h2>
                                            <p>Explore the intricacies of customizing ancillary benefits, balancing client needs, compliance, and innovation for success.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/myhealthily-customization-capabilities" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/6-steps-dynamic-company-culture"><img src="../img/blog/6-steps-dynamic-company-culture.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/6-steps-dynamic-company-culture">Creating a Dynamic Company Culture</Link></h2>
                                            <p>Six steps brokers can implement to help their clients foster a dynamic company culture for a happier and healthier team.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/6-steps-dynamic-company-culture" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/navigating-health-insurance-regulations-2024"><img src="../img/blog/navigating-health-insurance-regulations-2024.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/navigating-health-insurance-regulations-2024">Navigating Compliance and Regulatory Changes for 2024</Link></h2>
                                            <p>As the healthcare industry continues to transform, the regulatory landscape is set for significant changes in 2024.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/navigating-health-insurance-regulations-2024" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/myhealthily-security-information"><img src="../img/blog/myhealthily-security-information.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/myhealthily-security-information">MyHealthily Security Information</Link></h2>
                                            <p>We work diligently to ensure our platform is always available for agents to use and their data is stored, managed, and secured.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/myhealthily-security-information" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/streamlining-benefits-brokerage"><img src="../img/blog/streamlining-benefits-brokerage.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/streamlining-benefits-brokerage">Transition from Ease to MyHealthily</Link></h2>
                                            <p>For health insurance brokerage firms, the transition from Ease to MyHealthily marks a pivotal moment.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/streamlining-benefits-brokerage" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/crafting-inclusive-benefits"><img src="../img/blog/crafting-inclusive-benefits.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/crafting-inclusive-benefits">Crafting Inclusive Benefits</Link></h2>
                                            <p>Crafting employee benefits that cater to the unique needs of a diverse workforce is a crucial step towards fostering inclusivity and employee satisfaction.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/crafting-inclusive-benefits" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/power-of-myhealthily"><img src="../img/blog/power-of-myhealthily.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/power-of-myhealthily">Unveiling the Power of MyHealthily</Link></h2>
                                            <p>A trailblazing platform designed to transform the way small group health insurance is quoted, enrolled, managed.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/power-of-myhealthily" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/insurance-conferences-2024"><img src="../img/blog/insurance-conferences-2024.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="Insurance Conferences 2024" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/insurance-conferences-2024">Top 10 Insurance Conferences of 2024</Link></h2>
                                            <p>These broker focused events ensure you are learning and growing every year to reach the full potential of your firm.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/insurance-conferences-2024" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/agents-strategies-for-success"><img src="../img/blog/agents-strategies-for-success.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/agents-strategies-for-success">Challenges for Agents and Strategies for Success</Link></h2>
                                            <p>Explore some of the top challenges for brokers and agents and discuss effective ways to overcome them.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/agents-strategies-for-success" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/streamlining-small-group-benefits"><img src="../img/blog/streamlining-small-group-benefits.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/streamlining-small-group-benefits">How Technology is Streamlining Small Group Benefits</Link></h2>
                                            <p>MyHealthily is shedding light on technology’s positive impact on healtcare benefits for small groups.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/streamlining-small-group-benefits" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/unlocking-profitable-healthcare-coverage"><img src="../img/blog/unlocking-profitable-healthcare-coverage.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/unlocking-profitable-healthcare-coverage">Unlocking Your Path to Profitable Healthcare Coverage</Link></h2>
                                            <p>Learn how MyHealthily provides you with a roadmap to simple enrollment, profitability, and growing your small group clients.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/unlocking-profitable-healthcare-coverage" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/preparing-for-open-enrollment"><img src="../img/blog/preparing-for-open-enrollment.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/preparing-for-open-enrollment">Preparing for Open Enrollment</Link></h2>
                                            <p>As a health insurance broker, one of the busiest and most critical periods in your calendar is undoubtedly the open enrollment season.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/preparing-for-open-enrollment" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/healthcare-terminology"><img src="../img/blog/healthcare-terminology.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/healthcare-terminology">Healthcare Terminology</Link></h2>
                                            <p>We have listed a few of the most commonly used terms in the health insurance industry to help enable you to explore healthcare with ease.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/healthcare-terminology" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/what-is-a-level-funded-plan"><img src="../img/blog/what-is-a-level-funded-plan.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/what-is-a-level-funded-plan">What Is a Level-Funded Plan?</Link></h2>
                                            <p>Level-funded healthcare plans are a cost-effective way for employers to offer quality health benefits to employees.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/what-is-a-level-funded-plan" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/illustrative-level-funding"><img src="../img/blog/illustrative-level-funding.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/illustrative-level-funding">Illustrative Level-Funding</Link></h2>
                                            <p>Complete one master questionnaire and receive plans for multiple carriers by using our new Illustrative Level-Funding feature.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/illustrative-level-funding" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/composite-vs-age-banding-pricing"><img src="../img/blog/composite-vs-age-banding-pricing.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/composite-vs-age-banding-pricing">Composite vs. Age Banding Pricing</Link></h2>
                                            <p>Let's explore the differences between these two pricing structures to better understand how they can impact your policyholders.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/composite-vs-age-banding-pricing" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/80-20-rule-part-1"><img src="../img/blog/80-20-rule-part-1.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/80-20-rule-part-1">The 80/20 Rule (Part 1 of 3)</Link></h2>
                                            <p>A major busines issue are your clients that require 80% of your time, but only create 20% of your profits.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/80-20-rule-part-1" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/80-20-rule-part-2"><img src="../img/blog/80-20-rule-part-2.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/80-20-rule-part-2">The 80/20 Rule (Part 2 of 3)</Link></h2>
                                            <p>What if you could help small businesses afford the healthcare benefits they desire for their employees, and do so profitability.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/80-20-rule-part-2" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/80-20-rule-part-3"><img src="../img/blog/80-20-rule-part-3.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/80-20-rule-part-3">The 80/20 Rule (Part 3 of 3)</Link></h2>
                                            <p>Enrollment technology has come a long way, quoting coverage now takes mere seconds with much less employee information.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/80-20-rule-part-3" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/brokers-increase-revenue-2023"><img src="../img/blog/brokers-increase-revenue-2023.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/brokers-increase-revenue-2023">Increase Revenue in 2023</Link></h2>
                                            <p>Learn how offering a wider range of health insurance options to your clients can help you generate more revenue in the new year.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/brokers-increase-revenue-2023" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4">
                                    <article className="post post-medium border-0 pb-0 mb-5">
                                        <div className="post-image">
                                            <Link href="blog/blogs/5-ways-to-grow-in-2023"><img src="../img/blog/5-ways-to-grow-in-2023.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><Link href="blog/blogs/5-ways-to-grow-in-2023">5 Ways to Grow in 2023</Link></h2>
                                            <p>Growth is always a goal, so let's look at 5 ways you can continue to grow this next year.</p>
                                            <div className="post-meta">
                                                <span className="d-block mt-2"><Link href="blog/blogs/5-ways-to-grow-in-2023" className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
