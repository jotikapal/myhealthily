import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About MyHealthily - A Small Group Platform for Agents",
};

interface Props { }

const AboutMyHealthily: React.FC<Props> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>About MyHealthily</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container container-xl-custom py-1 my-1">
                <div className="row justify-content-center">
                    <div className="col-xl-9 text-center">
                        <p className="line-height-9 text-4 opacity-9 appear-animation"
                            data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">A ridiculously simple platform to quote, enroll, and manage small group benefits.</p>
                    </div>
                </div>
            </div>

            {/* Feature - 3 images */}
            <section className="section section-height-3 bg-color-grey-scale-1 m-0 border-0">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 pb-sm-4 pb-lg-0 pe-lg-5 mb-sm-5 mb-lg-0">
                            <h2 className="text-color-dark font-weight-normal text-6 mb-2">Serving the Small Businesses Market</h2>
                            <p className="lead">MyHealthily was founded in Englewood, New Jersey by Michael Malhame, a 30+ year veteran of the insurance industry.</p>
                            <p className="pe-5 me-5">It all started when Michael noticed a recurring problem – small groups were being overlooked by brokers because they couldn’t profitably write business. In addition, when plans were presented, they were often too expensive or offered minimum coverage. There had to be a better way.</p>
                        </div>
                        <div className="col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-md-4 offset-lg-2 position-relative mt-sm-5 image-padding-top">
                            <img src="/img/about-myhealthily.jpg" className="img-fluid position-absolute d-none d-sm-block appear-animation image-padding-1" data-appear-animation="expandIn" data-appear-animation-delay="300" alt="" />
                            <img src="/img/about-profits.jpg" className="img-fluid position-absolute d-none d-sm-block appear-animation image-padding-2" data-appear-animation="expandIn" alt="" />
                            <img src="/img/about-people.jpg" className="img-fluid position-relative appear-animation mb-2" data-appear-animation="expandIn" data-appear-animation-delay="600" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* One Column */}
            <div className="container pt-5 pb-0">
                <div className="row pt-2">
                    <div className="col">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Built by Agents for Agents</h2>
                        <p>MyHealthily is on a mission to provide complete healthcare coverage, WOW customer service, and real savings to small businesses and the agents who serve them. Our platform enables agents to offer affordable healthcare insurance and ancillary products to businesses with 1 – 500+ employees. From online quoting, to binding, enrollment, and services, MyHealthily takes the nonvalue added paperwork out of the process. Write business quickly, but more importantly, profitably.</p>
                    </div>
                </div>
            </div>

            {/* Meet the team */}
            <section className="section section-default border-0 my-5">
                <div className="container py-4">
                    <div className="row">
                        <div className="col pb-4 text-center">
                            <h2 className="text-color-dark font-weight-normal text-7 mb-0 pt-2">Meet Our Team</h2>
                            <p>MyHealthily’s executive management team is made up of industry veterans, leaders, investors, experts, geeks, musicians, gamers, and very kind people. Learn more about the <a href="/team-bios">MyHealthily leadership team</a>.</p>
                        </div>
                    </div>
                    {/* Meet the team - row 1 */}
                    <div className="row pb-4 mb-2">
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                <span className="thumb-info-wrapper border-radius-0">
                                    <a href="team-bios#michael-malhame"><img src="/img/michael-malhame.jpg" className="img-fluid border-radius-0" alt="" /></a>
                                    <span className="thumb-info-title">
                                        <span className="thumb-info-inner">Michael Malhame</span>
                                        <span className="thumb-info-type">CEO & Owner</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                <span className="thumb-info-wrapper border-radius-0">
                                    <a href="team-bios#ben-levitan"><img src="/img/ben-levitan.jpg" className="img-fluid border-radius-0" alt="" /></a>
                                    <span className="thumb-info-title">
                                        <span className="thumb-info-inner">Ben Levitan</span>
                                        <span className="thumb-info-type">Strategic Advisor</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                <span className="thumb-info-wrapper border-radius-0">
                                    <a href="team-bios#jeremy-mclendon"><img src="/img/jeremy-mclendon.jpg" className="img-fluid border-radius-0" alt="" /></a>
                                    <span className="thumb-info-title">
                                        <span className="thumb-info-inner">Jeremy McLendon</span>
                                        <span className="thumb-info-type">Vice President</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="col-sm-6 col-lg-3 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                <span className="thumb-info-wrapper border-radius-0">
                                    <a href="team-bios#john-grothusen"><img src="/img/john-grothusen.jpg" className="img-fluid border-radius-0" alt="" /></a>
                                    <span className="thumb-info-title">
                                        <span className="thumb-info-inner">John Grothusen</span>
                                        <span className="thumb-info-type">Chief Financial Officer</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Meet the team - row 2 */}
                    <div className="row pb-4 mb-2">
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                <span className="thumb-info-wrapper border-radius-0">
                                    <a href="team-bios#kelly-quinn"><img src="/img/kelly-quinn.jpg" className="img-fluid border-radius-0" alt="" /></a>
                                    <span className="thumb-info-title">
                                        <span className="thumb-info-inner">Kelly Quinn</span>
                                        <span className="thumb-info-type">Director of Operations</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                <span className="thumb-info-wrapper border-radius-0">
                                    <a href="team-bios#john-david-garletts"><img src="/img/john-david-garletts.jpg" className="img-fluid border-radius-0" alt="" /></a>
                                    <span className="thumb-info-title">
                                        <span className="thumb-info-inner">John David Garletts</span>
                                        <span className="thumb-info-type">Senior Risk Manager</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                <span className="thumb-info-wrapper border-radius-0">
                                    <a href="team-bios#zanson-watt"><img src="/img/zanson-watt.jpg" className="img-fluid border-radius-0" alt="" /></a>
                                    <span className="thumb-info-title">
                                        <span className="thumb-info-inner">Zanson Watt</span>
                                        <span className="thumb-info-type">VP of Software Engineering</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="col-sm-6 col-lg-3 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">
                            <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
                                &nbsp;
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pt-3 pb-5">
                <div className="row pt-2">
                    <div className="col">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">An Interview with the CEO</h2>
                        <p>We sat down with 30 year industry expert and CEO of MyHealthily, Michael Malhame, and learned how he developed the insurance technology platform MyHealthily to solve a serious industry need. Powered by Trellis.</p>
                        <div className="et_pb_text_inner">
                            <h4>Podcast: The Entrepreneur's Story</h4>
                            <iframe loading="lazy" title="Libsyn Player" src="//html5-player.libsyn.com/embed/episode/id/21089651/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/" height="90" width="100%" scrolling="no" allowFullScreen={true}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMyHealthily;
