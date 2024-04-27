import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "5 Ways to Grow Your Agency in 2023 - MyHealthily",
    description: "Discover practical steps to achieve growth in your insurance agency in 2023. Set goals, reduce quoting time, plan client calls, explore ancillary benefits, and invest in training for success.",
};

interface Props { }

const WaysToGrow2023: React.FC<Props> = () => {

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
                                    <h2 className="font-weight-semi-bold">5 Ways to Grow in 2023</h2>
                                    <div className="post-meta">
                                        <span><i className="far fa-user"></i> By Cate Kirkland</span>
                                        <span><i className="far fa-folder"></i> Brokers, Business, Healthcare Coverage, Technology</span>
                                        <span><i className="far fa-calendar"></i> JAN 27, 2023</span>
                                    </div>
                                    <img src="/img/blog/5-ways-to-grow-in-2023.jpg" className="img-fluid float-start me-4 mt-2" alt="" />

                                    <h3>Growth is Always the Goal</h3>

                                    <p>Growing a business isn't something that happens overnight, it takes time, hard work and determination. You know this and as a Broker, you see it happening year after year, while some years are better than others; growth is always the goal whether it be personal or professional, or maybe even based in metrics like seeing your revenue or commissions grow. Growth is always a goal, so let's look at 5 ways you can continue to grow this next year.</p>

                                    <h3>1. Set Goals</h3>

                                    <p>Set your yearly goals! Set your goals for 2023 with growth in mind. Where are you looking to grow this next year is it one area, two, or in any way possible.  Sit down and really look at your business and take the time to set these growth goals with true intention. Then start looking for software options to help you reach each of these goals. It could be as simple as adding <a href="https://www.canva.com/" target="_new">Canva</a> for your team to help grow social media, or adding an all-in-one quoting, enrollment, and service platform to help make your business more profitable.</p>

                                    <h3>2. Reduce Quoting Time</h3>

                                    <p>Find a platform (like the one from <a href="/">MyHealthily</a>) that reduces your time spent quoting enrollment options to 15 seconds for over 135 carriers. By cutting this amount of time you are gaining weeks of back and forth between carriers- which would normally give you 2-3 options. When you find a platform or software to automate step, step you gain weeks&#8217; worth of time back into your schedule to further your growth!</p>

                                    <h3>3. Have a Plan</h3>

                                    <p>Create a plan for each client before their call. When you know about an upcoming call with a client take a look at their census and possible coverage options to ensure the call is effective and educational. Many clients are more worried about the cost than the coverage they are receiving. This call is a great time to show them all of their options and ease their mind about price. Being able to show a client all their options will ease their mind about missing out on a deal, and you can transition the tone to what is really important, their coverage, and educating them on which options are the best. Some platforms even let you create an instant proposal for each client. These proposals are a great way to show them you have already done the work of sorting through their plan options- start by showing them how many plans are available to them -with the MyHealthily software it can be in the hundreds so narrowing it down makes it easier.</p>

                                    <h3>4. Don&#8217;t Sleep on Ancillary Benefits</h3>

                                    <p>Ancillary benefits help round out health insurance plan options. Normally these types of coverage include dental and vision but depending on your client they can include so much more like, short term disability, life insurance, cancer coverage, and so many other types of coverage. Adding plan options- many of which do not require contributions from the employer &#8211; is a great way to increase your revenue.</p>

                                    <h3>5. Invest in Training</h3>

                                    <p>Invest your time in training. This could start with your continuing education classes, start with not putting these off until the last minute. Find courses that will help you grow and plan to take those instead of settling for whatever is available at the last minute. Next is to look at training offered through the software you already use- these types of training are normally quick and to the point but help you to better understand and use the software. This means saving even more time by planning and attending short training sessions throughout the year. Make it a goal to attend 1 training a month and see how much you learn!</p>

                                    <p>These 5 steps sound pretty simple, and the main point is that prior proper planning helps you achieve your goals no matter what they are. Be sure to sit down and work through your goals for 2023 and ensure your growth both personal and professional is headed in the right direction.</p>

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

export default WaysToGrow2023;