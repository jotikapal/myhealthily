import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agents & Brokers - Partner with MyHealthily",
};

interface Props { }

const Contact: React.FC<Props> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>Contact MyHealthily</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Columns */}
            <div className="container">
                <div className="row text-center text-md-start pt-4 pb-4 my-4">
                    <div className="col-lg-6 mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Let's Talk</h2>
                        <p><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#103;&#101;&#110;&#116;&#115;&#64;&#109;&#121;&#104;&#101;&#97;&#108;&#116;&#104;&#105;&#108;&#121;&#46;&#99;&#111;&#109;">&#97;&#103;&#101;&#110;&#116;&#115;&#64;&#109;&#121;&#104;&#101;&#97;&#108;&#116;&#104;&#105;&#108;&#121;&#46;&#99;&#111;&#109;</a><br />(888) 219-7952<br />Hours: Weekdays 9 AM – 5 PM (EST)</p>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1000">
                        <h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">&nbsp;</h2>
                        <p><strong>MyHealthily</strong><br />25 Rockwood Place<br />Suite 210<br />Englewood, NJ 07631</p>
                    </div>
                </div>
            </div>

            <section className="call-to-action call-to-action-default with-button-arrow call-to-action-in-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-lg-9">
                            <div className="call-to-action-content">
                                <h3>Schedule a Demo</h3>
                                <p className="mb-0">Give us a few minutes to walk you through our platform, answer questions, and get you signed up!</p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="call-to-action-btn">
                                <a href="book-demo"
                                    className="btn btn-modern text-2 btn-primary">LET'S TALK</a><span
                                        className="arrow hlb d-none d-md-block" data-appear-animation="rotateInUpLeft"
                                        style={{ "left": "110%", top: "-40px" }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row my-5"></div>
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
        </div>
    );
}

export default Contact;
