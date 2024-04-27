import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MyHealthily | A Small Group Healthcare Benefits Platform for Agents",
  description: "MyHealthily enables agents and brokers to profitably quote, enroll, and service small group clients in 70% less time than traditional quoting.",
};

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {

  return (
    <>
      
      <div role="main" className="main">

        <section className="section section-overlay-opacity section-overlay-opacity-scale-7 border-0 m-0" style={{ backgroundImage: "url(../img/bg-hp-1.jpg)", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="container py-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center mb-5 mb-lg-0">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                  <h3 className="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation" data-appear-animation="fadeInDownShorterPlus" data-plugin-options="{'minWindowWidth': 0}">
                    <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                      <img src="/img/slides/slide-title-border.png" className="w-auto appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
                    </span>
                    A ridiculously simple platform to
                    <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                      <img src="/img/slides/slide-title-border.png" className="w-auto appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
                    </span>
                  </h3>
                  <h1 className="text-color-light font-weight-extra-bold text-12 mb-2 appear-animation" data-appear-animation="blurIn" data-appear-animation-delay="1300" data-plugin-options="{'minWindowWidth': 0}">Quote, Enroll, & Manage</h1>
                  <p className="text-4 text-color-light font-weight-light opacity-7 mb-0" data-plugin-animated-letters data-plugin-options="{'startDelay': 3500, 'minWindowWidth': 0}">Small Group Benefits, Profitably</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="home-intro" id="home-intro">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <p>We enable agents to offer healthcare benefits to small groups.<span>Book a demo of our platform to get started!</span></p>
              </div>
              <div className="col-lg-4">
                <div className="get-started text-start text-lg-end">
                  <Link href="/pages/book-demo" className="btn btn-primary btn-lg text-3 font-weight-semibold px-4 py-3">BOOK YOUR DEMO</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-height-1 border-1 mt-1 mb-1">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="row align-items-center pt-4 appear-animation" data-appear-animation="fadeInLeftShorter">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <img className="img-fluid scale-2 pe-5 pe-md-0 my-4" src="img/laptop-screen-shot.png" alt="layout styles" />
                  </div>
                  <div className="col-md-8 ps-md-5">
                    <h2 className="font-weight-normal text-6 mb-2 line-height-3">Love your small groups, but don’t love the oversized workload?</h2>
                    <p className="text-4">Our workflow management platform allows you to shop, quote, and select plans alongside your client, all within 45 minutes.</p>
                    <p>No more dealing with complicated spreadsheets, presentations, endless emails, or miscommunication. Experience clear, straightforward shopping and selection with all your clients.</p>
                    <p>Enhance your plan selection, provide faster service, and save time setting up, enrolling, and managing your small group clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">

          <div className="row pt-3 appear-animation" data-appear-animation="fadeInUpShorter">
            <div className="col-lg-7 pe-lg-5">
              <div className="row pt-4 my-4">
                <div className="col-lg-6">
                  <div className="feature-box feature-box-style-2 mb-4">
                    <div className="feature-box-icon">
                      <i className="icons icon-screen-desktop text-color-primary"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="font-weight-bold text-4 mb-0">Real-Time Quoting</h4>
                      <p className="mb-4">Access plans from 170+ carriers, both ACA and medically underwritten, along with ancillary options like dental, vision, worksite, disability, and life.</p>
                    </div>
                  </div>
                  <div className="feature-box feature-box-style-2 mb-4">
                    <div className="feature-box-icon">
                      <i className="icons icon-people text-color-primary"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="font-weight-bold text-4 mb-0">1 for 5</h4>
                      <p className="mb-4">Employees complete 1 medical questionnaire and receive quotes from up to five level-funded carriers.</p>
                    </div>
                  </div>
                  <div className="feature-box feature-box-style-2 mb-4 mb-lg-0">
                    <div className="feature-box-icon">
                      <i className="icons icon-support text-color-primary"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="font-weight-bold text-4 mb-0">Marketing support</h4>
                      <p className="mb-4">Full marketing support to reach clients and prospects.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-box feature-box-style-2 mb-4">
                    <div className="feature-box-icon">
                      <i className="icons icon-ban text-color-primary"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="font-weight-bold text-4 mb-0">Zero paperwork</h4>
                      <p className="mb-4">All paperwork is done online with e-signatures for security and ease of enrollment.</p>
                    </div>
                  </div>
                  <div className="feature-box feature-box-style-2 mb-4">
                    <div className="feature-box-icon">
                      <i className="icons icon-clock text-color-primary"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="font-weight-bold text-4 mb-0">Reduce Time</h4>
                      <p className="mb-4">Spend 70% less time on quoting, plan selection, enrollment, and management of clients.</p>
                    </div>
                  </div>
                  <div className="feature-box feature-box-style-2">
                    <div className="feature-box-icon">
                      <i className="icons icon-plus text-color-primary"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="font-weight-bold text-4 mb-0">Co-management with clients</h4>
                      <p className="mb-4">Employers alongside agents are able to manage employee information and management by employers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5">
              <h4 className="font-weight-normal">Get Started</h4>
              <ul className="list list-icons list-icons-style-3 mt-3">
                <li><i className="fas fa-calendar"></i> Schedule a demo</li>
                <li><i className="far fa-user"></i> Attend your demo</li>
                <li><i className="far fa-check-circle"></i> Signup for MyHealthily</li>
                <li><i className="far fa-clock"></i> All in about 30-minutes</li>
                <Link href="/pages/book-demo" className="btn btn-modern btn-primary btn-effect-1 mt-3">BOOK YOUR DEMO</Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial begins */}
        <div className="container">
          <div className="row my-5 pb-2">
            <div className="col-lg-4">

              <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
                <div className="card-body py-3 px-2">
                  <div className="testimonial testimonial-style-4 border-0 box-shadow-none m-0 p-0">
                    <div className="testimonial-author pb-3">
                      <div className="testimonial-author-thumbnail">
                        <img src="img/logo-ima.jpg" className="img-fluid rounded-circle" alt="" />
                      </div>
                      <p><strong className="font-weight-bold">Jodi G.</strong><span>Senior Benefits Account Executive - ima</span>
                      </p>
                    </div>
                    <div className="px-4 mx-2 pt-2 pb-3">
                      <h4 className="font-weight-semi-bold">Easy to Use Platform</h4>
                      <p>The ability to quote and present health and life options to clients on a
                        user-friendly platform is a game-changer! The Technology is ideal for us! It
                        makes small accounts less cumbersome.</p>
                      <p className="mb-0"><i className="fas fa-star text-color-primary text-2"></i><i
                        className="fas fa-star text-color-primary text-2"></i><i
                          className="fas fa-star text-color-primary text-2"></i><i
                            className="fas fa-star text-color-primary text-2"></i><i
                              className="fas fa-star text-color-primary text-2"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">

              <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
                <div className="card-body py-3 px-2">
                  <div className="testimonial testimonial-style-4 border-0 box-shadow-none m-0 p-0">
                    <div className="testimonial-author pb-3">
                      <div className="testimonial-author-thumbnail">
                        <img src="img/logo-deland-gibson.jpg" className="img-fluid rounded-circle"
                          alt="" />
                      </div>
                      <p><strong className="font-weight-bold">Erin C.</strong><span>Account Executive - Deland, Gibson Insurance</span>
                      </p>
                    </div>
                    <div className="px-4 mx-2 pt-2 pb-3">
                      <h4 className="font-weight-semi-bold">Super Time Saver</h4>
                      <p>Improved efficiency on both the enrollment and renewal sides is easy to see.
                        80% of our current clients would appreciate this. You quickly see competitive
                        rates, and it’s simple. This platform cuts the amount we spend by at least
                        70%! It turns a 7-hour job into a 45-minute call!</p>
                      <p className="mb-0"><i className="fas fa-star text-color-primary text-2"></i><i
                        className="fas fa-star text-color-primary text-2"></i><i
                          className="fas fa-star text-color-primary text-2"></i><i
                            className="fas fa-star text-color-primary text-2"></i><i
                              className="fas fa-star text-color-primary text-2"></i></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4">

              <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
                <div className="card-body py-3 px-2">
                  <div className="testimonial testimonial-style-4 border-0 box-shadow-none m-0 p-0">
                    <div className="testimonial-author pb-3">
                      <div className="testimonial-author-thumbnail">
                        <img src="img/logo-insurica.jpg" className="img-fluid rounded-circle" alt="" />
                      </div>
                      <p><strong className="font-weight-bold">Gregg G.</strong><span>Virtual Sales Director/Advisor - Insurica</span>
                      </p>
                    </div>
                    <div className="px-4 mx-2 pt-2 pb-3">
                      <h4 className="font-weight-semi-bold">Simplified the Process</h4>
                      <p>What you’ve done here is taken something that could be hugely complex and time
                        consuming and you have shaved 70% – 80% of that time and complexity out of
                        it.</p>
                      <p className="mb-0"><i className="fas fa-star text-color-primary text-2"></i><i
                        className="fas fa-star text-color-primary text-2"></i><i
                          className="fas fa-star text-color-primary text-2"></i><i
                            className="fas fa-star text-color-primary text-2"></i><i
                              className="fas fa-star text-color-primary text-2"></i></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Testimonial ended */}

        {/* Carriers */}
        <section className="call-to-action">
          <div className="container">
            <div className="row text-center pb-2 mt-4">
              <h4>170+ National Carriers</h4>
              <div className="owl-carousel owl-theme carousel-center-active-item mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 5}}, 'autoplay': true, 'autoplayTimeout': 1500, 'dots': false}">
                <div><img className="img-fluid" src="/public/img/allstate.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/aflac.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/aetna.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/united.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/sidecar.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/principal.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/oscar.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/kaiser-permanente.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/humana.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/guardian-healthcare.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/friday-health-plans.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/cigna.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/careington.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/blue-cross.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/beam.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/anthem.jpg" alt="" /></div>
                <div><img className="img-fluid" src="/img/and-many-more.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="call-to-action call-to-action-default with-button-arrow call-to-action-in-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-lg-9">
                <div className="call-to-action-content">
                  <h3>Get Started</h3>
                  <p className="mb-0">Our advisors will answer your questions, and get you signed up in about 30-minutes.</p>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="call-to-action-btn">
                  <Link href="/pages/book-demo" className="btn btn-modern text-2 btn-primary">BOOK YOUR DEMO</Link><span className="arrow hlb d-none d-md-block button-adjust" data-appear-animation="rotateInUpLeft"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
}
export default Home;