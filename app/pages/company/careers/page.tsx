import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Come Work at MyHealthily!",
};

interface Props { }

const Careers: React.FC<Props> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>Careers</h1>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container py-5 mt-3">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="overflow-hidden mb-2">
                            <h2 className="font-weight-normal text-7 mb-2 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">Find Your Opportunity</h2>
                        </div>
                        <div className="overflow-hidden mb-4">
                            <p className="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="400">From startup to industry disrupter, MyHealthily is a dynamic, fully remote, SaaS company made up of a talented workforce across the US.</p>
                        </div>
                        <p className="text-color-light-3 mb-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600">Come work with us! Join our fully-remote workforce and help us continue to innovate, strategize, support, and grow the MyHealthily platform. Our people connect, collaborate, challenge, and inspire each other, allowing us to focus on our client’s needs.</p>
                        <h2 className="word-rotator font-weight-semi-bold rotate-1 mb-2">
                            <span>Come be part of something </span>
                            <span className="word-rotator-words bg-primary">
                                <b className="is-visible">empowering</b>
                                <b>amazing</b>
                                <b>engaging</b>
                            </span>
                            <span>!</span>
                        </h2>
                    </div>

                    <div className="col-lg-4">
                        <div className="testimonial testimonial-primary appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="800">
                            <div className="owl-carousel owl-theme" data-plugin-options="{'items': 1, 'autoplay': true, 'autoplayTimeout': 10000}">
                                <div>
                                    <div className="testimonial testimonial-style-3">
                                        <blockquote>
                                            <p className="mb-0">I love that at MyHealthily being creative and trying is an expectation- while success is the goal failure of an experiment is more about learning what doesn’t work. The adventurous culture leads to innovative ways to do things without limiting creativity.</p>
                                        </blockquote>
                                        <div className="testimonial-arrow-down"></div>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-extra-bold">Cate, Marketing</strong><span>Springfield, GA</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial testimonial-style-3">
                                        <blockquote>
                                            <p className="mb-0">The environment at MyHealthily allows me to have flexibility in both project management and scheduling. I’m empowered to work and solve problems independently, with the knowledge that I can call on my team when I need help. That level of trust has helped my professional and personal growth immensely.</p>
                                        </blockquote>
                                        <div className="testimonial-arrow-down"></div>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-extra-bold">Adam, Product Team</strong><span> Philadelphia, PA</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial testimonial-style-3">
                                        <blockquote>
                                            <p className="mb-0">Working for MyHealthily is more exciting than watching fireworks on the 4th of July!</p>
                                        </blockquote>
                                        <div className="testimonial-arrow-down"></div>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-extra-bold">Jeremy, Leadership</strong><span>Canton, GA</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial testimonial-style-3">
                                        <blockquote>
                                            <p className="mb-0">I love working at MyHealthily. It’s a unique situation in that we are all remote, but there is still very much a “team” aspect and feeling to each day. Every time I log in to work, I feel supported and inspired to learn, grow, and succeed with the company.</p>
                                        </blockquote>
                                        <div className="testimonial-arrow-down"></div>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-extra-bold">Sarah, Marketing</strong><span>Cleveland, OH</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-default border-0 my-5 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="750">
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-md-6 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="1000">
                            <div className="owl-carousel owl-theme nav-inside mb-0" data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 6000, 'loop': true}">
                                <div><img alt="" className="img-fluid" src="/img/employee-map.jpg" /></div>
                                <div><img alt="" className="img-fluid" src="/img/zoom-call.jpg" /></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="overflow-hidden mb-2">
                                <h2 className="text-color-dark font-weight-normal text-7 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="1200">Why We Are Who We Are</h2>
                            </div>
                            <p className="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1400">At MyHealthily we are focused on genuine Customer Service. Always looking towards solution focused thinking. Obsessed with driving positive change, and more importantly, producing mind boggling results.</p>
                            <p className="mb-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1600">This mindset starts at the beginning with our propriety platform that takes the frustration out of group health insurance. Small business owners, employees and the Brokers that serve them are stuck in an un-evolving loop. It’s no secret that small group health insurance isn’t the most advanced industry. We fix that.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* current jobs begins */}
            <section className="section section-default border-0 m-0">
                <div className="container py-4">
                    <div className="row pb-4">
                        <div className="col-md-8">
                            <div className="appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="200">
                                <h4 className="mt-2 mb-2">Current Openings</h4>

                                <div className="accordion accordion-modern accordion-modern-grey-scale-1 without-bg mt-4" id="accordion11">
                                    <div className="card card-default mb-2">
                                        <div className="card-header">
                                            <h4 className="card-title m-0">
                                                <a className="accordion-toggle text-3" data-bs-toggle="collapse" data-bs-parent="#accordion11" href="#collapse11One">Enrollment Specialist</a>
                                            </h4>
                                        </div>
                                        <div id="collapse11One" className="collapse">
                                            <div className="card-body mt-3">
                                                <h5>Who We’re Looking For</h5>
                                                <p>At MyHealthily we look for people who bring their whole genuine self-daily. You are self-motivated. You think like an entrepreneur. You crave being part of something different. You are detail oriented.</p>
                                                <p>We are looking for that person that can lead a team of people whose objective is to provide that WOW customer service, whether it’s for direct business or assisting our partner Agency’s utilizing our proprietary software.</p>

                                                <h5>Company Culture Is Our Heart</h5>
                                                <ul>
                                                    <li>We strive to deliver WOW customer service</li>
                                                    <li>Be creative, adventurous and open-minded</li>
                                                    <li>Bring passion and determination</li>
                                                    <li>Embrace and drive change</li>
                                                    <li>Pursue growth and learning </li>
                                                </ul>

                                                <h5>Responsibilities</h5>
                                                <ul>
                                                    <li>Act as player and coach as you support sales and business development for internal and partner Agents</li>
                                                    <li>Actively manage, lead, and perform hands on tasks to ensure accounts are successfully enrolled with insurance carriers</li>
                                                    <li>Interpret small group enrollment requirements across multiple carriers and multiple states to ensure accuracy of enrollments</li>
                                                    <li>Maintain an understanding of the product helping the team and customers maximize the use of the platform</li>
                                                    <li>Identify and play a leadership role in identifying gaps and improving department/company processes</li>
                                                    <li>Ensure customer inquiries are quickly and accurately satisfied with WOW satisfaction</li>
                                                    <li>Maintain documentation on workflows, procedures, and protocols</li>
                                                    <li>Maintain awareness on current and evolving health insurance industry standards and best practices</li>
                                                </ul>

                                                <h5>Requirements </h5>
                                                <ul>
                                                    <li>10+ years experience in services and enrollments, preferably in health and medical insurance</li>
                                                    <li>Health insurance license</li>
                                                    <li>Healthcare and Medical Insurance brokerage experience, preferred</li>
                                                    <li>College degree, preferred</li>
                                                    <li>Excellent verbal and communications skills</li>
                                                    <li>Must be good with technology</li>
                                                    <li>Experience with ZOHO, preferred</li>
                                                </ul>


                                                <h5>How to Apply</h5>
                                                <p>If you feel you would be a good fit for this role, email your resume and cover letter by clicking the button below.</p>

                                                <ul className="list list-inline mt-4 mb-3 text-2">
                                                    <li className="list-inline-item">
                                                        <strong>LOCATION:</strong> FULLY REMOTE (US)
                                                    </li>
                                                    <li className="list-inline-item ms-md-3"><strong>SALARY:</strong> BASED ON EXPERENCE</li>
                                                </ul>
                                                <a href="mailto&#58;%6Aobs&#64;m&#37;79h%&#54;5alt&#104;ily%2&#69;&#37;63om" className="btn btn-modern btn-dark">Email</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-default mb-2">
                                        <div className="card-header">
                                            <h4 className="card-title m-0">
                                                <a className="accordion-toggle text-3" data-bs-toggle="collapse" data-bs-parent="#accordion11" href="#collapse11Two">Small Group Health Insurance Sales Agent</a>
                                            </h4>
                                        </div>
                                        <div id="collapse11Two" className="collapse">
                                            <div className="card-body mt-3">
                                                <h5>Who We’re Looking For</h5>
                                                <p>At MyHealthily we look for people who bring their whole genuine self-daily. You are self-motivated. You think like an entrepreneur. You crave being part of something different. We are looking for that person that will take full advantage of and opportunity of a steady set of leads from our agreements with over 45 different associations.</p>
                                                <p>We average about 35 qualified small business leads per month and that is growing! And by utilizing the MyHealthily proprietary software, you will be able to quote and propose to clients in minutes, not days.</p>

                                                <h5>Company Culture Is Our Heart</h5>
                                                <ul>
                                                    <li>We strive to deliver WOW customer service</li>
                                                    <li>Be creative, adventurous and open-minded</li>
                                                    <li>Bring passion and determination</li>
                                                    <li>Embrace and drive change</li>
                                                    <li>Pursue growth and learning </li>
                                                </ul>

                                                <h5>Responsibilities</h5>
                                                <ul>
                                                    <li>Qualify, educate, and enroll small groups into healthcare plans that meet their needs</li>
                                                    <li>Demonstrate MyHealthily platform to agents and brokers to facilitate sales of our inhouse technology</li>
                                                    <li>Maintain and keep current all licenses and continuing education requirements</li>
                                                    <li>Meet monthly/weekly sales performance targets</li>
                                                    <li>Effective lead pipeline management</li>
                                                    <li>Follow up with marketing generated warm leads</li>
                                                    <li>Achieve assigned sales quota</li>
                                                    <li>Prepare and deliver sales and product demonstrations</li>
                                                    <li>Participate in on-site events as needed (conferences, trade shows, etc.)</li>
                                                    <li>Monitors competition by gathering current marketplace information on pricing, products, new products, delivery schedules, and merchandising techniques.</li>
                                                    <li>Maintain professional and technical knowledge of company products and technology</li>
                                                </ul>

                                                <h5>Requirements</h5>
                                                <ul>
                                                    <li>2+ years small group health insurance sales experience</li>
                                                    <li>Must be good with technology</li>
                                                    <li>Closing Skills</li>
                                                    <li>Excellent communication skills</li>
                                                    <li>Active Health and life insurance license required</li>
                                                </ul>

                                                <h5>How to Apply</h5>
                                                <p>If you feel you would be a good fit for this role, email your resume and cover letter by clicking the button below.</p>

                                                <ul className="list list-inline mt-4 mb-3 text-2">
                                                    <li className="list-inline-item"><strong>LOCATION:</strong> FULLY REMOTE (US)
                                                    </li>
                                                    <li className="list-inline-item ms-md-3"><strong>SALARY:</strong> $60k + COMMISSIONS</li>
                                                </ul>
                                                <a href="mailto&#58;%6Aobs&#64;m&#37;79h%&#54;5alt&#104;ily%2&#69;&#37;63om" className="btn btn-modern btn-dark">Email</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="400">
                                <div className="toggle toggle-primary toggle-simple" data-plugin-toggle>
                                    <section className="toggle active">
                                        <a className="toggle-title">True Work-Life Balance</a>
                                        <div className="toggle-content">
                                            <p>Work from the comfort of your home and gain more flexibility and control over your lifestyle. Most of our team is based on the East Coast, but you’re welcome to work from the location of your choosing in the United States.</p>
                                        </div>
                                    </section>
                                    <section className="toggle">
                                        <a className="toggle-title">Engagement</a>
                                        <div className="toggle-content">
                                            <p>Our employees stay engaged through a daily team standup each morning to talk about what we did yesterday, what we’re going to today, and if we need help. We also have a weekly companywide meeting where department leads share what their teams are working on, plus company goals, news, and feedback and thoughts from leadership. This is a time for employees to stay abreast, ask questions, or make suggestions. All ideas are welcome!</p>
                                        </div>
                                    </section>
                                    <section className="toggle">
                                        <a className="toggle-title">Culture</a>
                                        <div className="toggle-content">
                                            <p>MyHealthily delivers WOW Customer Service, in creative and adventurous ways. We believe in supporting one another with open and honest communication, driving passion and embracing change along the way. By making people the priority we are able to respect each other and grow an amazing industry disruptive business.</p>
                                        </div>
                                    </section>
                                    <section className="toggle">
                                        <a className="toggle-title">Philosophy</a>
                                        <div className="toggle-content">
                                            <p>We encourage our teams to try new tactics on all aspects of our daily work. We feel exploring new approaches can make a difference in our efforts to reach new clients, solve problems, and continue to help make our platform the best in our space. We also look at failure as learning opportunities.</p>
                                        </div>
                                    </section>
                                    <section className="toggle">
                                        <a className="toggle-title">Benefits</a>
                                        <div className="toggle-content">
                                            <ul>
                                                <li>Competitive Compensation</li>
                                                <li>Fun and Exciting Fully Remote Company</li>
                                                <li>Complete Health Benefits Package</li>
                                                <li>Generous Paid Time Off</li>
                                                <li>10 Paid Holidays Annually</li>
                                                <li>Casual, Friendly Work Environment</li>
                                                <li>Work / Life Balance</li>
                                                <li>Stock Options</li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;
