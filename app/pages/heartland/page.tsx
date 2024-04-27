import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Heartland &amp; MyHealthily Sales Team Portal",
    description: "This site is confidential and solely for the use of contracted distribution partners of MyHealhily.",
};

interface Props { }

const Heartland:React.FC<Props> = () => {
	
	return (
		<div role="main" className="main">
			
			<section className="page-header page-header-classNameic page-header-md">
				<div className="container">
					<div className="row">
						<div className="col-md-8 order-2 order-md-1 align-self-center p-static">
							<h1 data-title-border>Sales Team Portal</h1>
						</div>
					</div>
				</div>
			</section>

			{/* Top Image */}
			<div className="z-index-1">
				<div className="m-0 mb-4">
					<div>
						<img src="img/showcase-image.jpg" className="img-fluid" alt="" />
					</div>
				</div>
			</div>
			
			<div className="container container-xl-custom py-1 my-1">
				<div className="row justify-content-center">
					<div className="col-xl-9 text-center">
						<p className="line-height-9 text-4 opacity-9"
						   data-="fadeInUpShorter" data--delay="200">MyHealthily is a Ridiculously Simple Platform to Quote, Enroll, & Manage Small Group Benefits, Profitably!</p>
					</div>
				</div>
			</div>

			{/* Contact Heartland */}
			<div className="container">
				<div className="row text-center text-md-start pt-1 pb-5 my-1">
					<div className="col-lg-6 mb-5 mb-lg-0 text-center" data-="fadeInRightShorter" data--delay="1000">
						<img src="img/heartland-logo.png" className="img-fluid hover-effect-2 mb-3" alt="Heartland" />
					</div>
					<div className="col-lg-6 mb-5 mb-lg-0 text-center" data-="fadeInRightShorter" data--delay="600">
						<p><strong>Heartland Contact</strong><br/>Rowland Harris III<br/><a href="mailto:rowland.harris@heartland.us">rowland.harris@heartland.us</a> | (480) 535-4444<br />
						<a href="#demo" className="btn btn-modern btn-primary mt-3">Book Your Demo</a></p>
					</div>
				</div>
			</div>

			{/* Disclaimer */}
			<div id="examples" className="container py-1">
				<div className="row">
					<div className="col">
						<div className="row">
							<div className="col pb-3">
									<div className="alert alert-default text-center">
									Disclaimer: This site is confidential and solely for the use of contracted distribution partners of MyHealhily.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Why MyHealthily? */}
			<div className="container">
				<div className="row text-center text-md-start pt-4 pb-5 my-4">
					<div className="col-lg-6 mb-5 mb-lg-0 " data-="fadeInRightShorter" data--delay="600">
						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Why MyHealthily?</h2>
						<ul className="list list-icons list-primary">
							<li><i className="fas fa-check"></i> Real-time quoting</li>
							<li><i className="fas fa-check"></i> Zero paperwork</li>
							<li><i className="fas fa-check"></i> Reduced time from quoting to enrollment</li>
							<li><i className="fas fa-check"></i> Heartland is the exclusive payroll provider for MyHealthily</li>
						</ul>
					</div>
					<div className="col-lg-6 mb-5 mb-lg-0 " data-="fadeInRightShorter" data--delay="1000">
						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">&nbsp;</h2>
						<ul className="list list-icons list-primary">
							<li><i className="fas fa-check"></i> Full marketing support</li>
							<li><i className="fas fa-check"></i> More than 170 national carriers</li>
							<li><i className="fas fa-check"></i> Plans for part-time, full-time, and seasonal workers</li>
							<li><i className="fas fa-check"></i> Coverage options in all 50 states</li>
						</ul>
					</div>
				</div>
			</div>
			
			{/* Essential Sales & Marketing Tools */}
			<div className="container">
				<div className="featured-boxes py-5 mt-5 mb-4">
					<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Essential Sales &amp; Marketing Tools</h2>
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<div className="featured-box featured-box-primary featured-box-effect-1">
								<div className="box-content">
									<a href="downloads/MyHealthily-Sales-Placemat.pdf" target="_new"><i className="icon-featured icons icon-briefcase"></i></a>
									<h3 className="text-color-primary font-weight-bold text-3 mb-2 mt-3">Sales Placemat</h3>
									<p className="px-3">Learn to use the features and capabilities of the MyHealthily platform to better assist your clients.</p>
									<p><a href="downloads/MyHealthily-Sales-Placemat.pdf" target="_new" className="text-dark learn-more font-weight-bold text-2">Download PDF <i className="fas fa-chevron-right ms-2"></i></a></p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="featured-box featured-box-dark featured-box-effect-1">
								<div className="box-content">
									<a href="downloads/Agent-One-Pager.pdf" target="_new"><i className="icon-featured icons icon-doc"></i></a>
									<h3 className="font-weight-bold text-3 mb-2 mt-3">One-Pager</h3>
									<p className="px-3">MyHealthily enables agents and brokers to offer healthcare benefits to their small groups clients, profitably.</p>
									<p><a href="downloads/Agent-One-Pager.pdf" target="_new" className="text-dark learn-more font-weight-bold text-2">Download PDF <i className="fas fa-chevron-right ms-2"></i></a></p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="featured-box featured-box-primary featured-box-effect-1">
								<div className="box-content">
									<a href="downloads/Ebook-Level-Funding.pdf" target="_new"><i className="icon-featured icons icon-book-open"></i></a>
									<h3 className="text-color-primary font-weight-bold text-3 mb-2 mt-3">Level Funding eBook</h3>
									<p className="px-3">Learn more about level-funding plans along with how to explain the process to your clients and promote more savings.</p>
									<p><a href="downloads/Ebook-Level-Funding.pdf" target="_new" className="text-dark learn-more font-weight-bold text-2">Download PDF <i className="fas fa-chevron-right ms-2"></i></a></p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="featured-box featured-box-dark featured-box-effect-1">
								<div className="box-content">
									<a href="marketing-support"><i className="icon-featured icons icon-rocket"></i></a>
									<h3 className="font-weight-bold text-3 mb-2 mt-3">Marketing Support</h3>
									<p className="px-3">We provide a comprehensive range of media and marketing templates to help agencies achieve their business objectives.</p>
									<p><a href="marketing-support" className="text-dark learn-more font-weight-bold text-2">View Details <i className="fas fa-chevron-right ms-2"></i></a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Video Resources - Row 1 */}
			<div className="container py-4">
			<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Video Resources</h2>
				<div className="row py-3 justify-content-center">
					<div className="col-sm-8 col-md-4 mb-4 mb-md-0" data-appear-animation-delay="250">
						<article>
							<div className="row">
								<div className="col">
									<img src="img/how-to-get-started.jpg" className="img-fluid hover-effect-2 mb-3" alt="" />
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h4 className="mb-0">How to get started with MyHealhily</h4>
								</div>
							</div>
						</article>
					</div>
					<div className="col-sm-8 col-md-4 mb-4 mb-md-0" data-appear-animation-delay="250">
						<article>
							<div className="row">
								<div className="col">
									<img src="img/how-to-generate.jpg" className="img-fluid hover-effect-2 mb-3" alt="" />
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h4 className="mb-0">How to Generate an Electronic Proposal</h4>
								</div>
							</div>
						</article>
					</div>
					<div className="col-sm-8 col-md-4 mb-4 mb-md-0" data-appear-animation-delay="250">
						<article>
							<div className="row">
								<div className="col">
									<img src="img/how-to-quote-a-new-client.jpg" className="img-fluid hover-effect-2 mb-3" alt="" />
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h4 className="mb-0">How to Quote a New Client</h4>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>

			{/* Video Resources - Row 2 */}
			<div className="container py-4">
				<div className="row py-3 justify-content-center">
					<div className="col-sm-8 col-md-4 mb-4 mb-md-0" data-appear-animation-delay="250">
						<article>
							<div className="row">
								<div className="col">
									<img src="img/quote-enroll-manage.jpg" className="img-fluid hover-effect-2 mb-3" alt="" />
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h4 className="mb-0">Qutoe, Enroll, Manage, and Renew</h4>
								</div>
							</div>
						</article>
					</div>
					<div className="col-sm-8 col-md-4 mb-4 mb-md-0" data-appear-animation-delay="250">
						<article>
							<div className="row">
								<div className="col">
									<img src="img/how-to-go-paperless.jpg" className="img-fluid hover-effect-2 mb-3" alt="" />
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h4 className="mb-0">How to Go Paperless</h4>
								</div>
							</div>
						</article>
					</div>
					<div className="col-sm-8 col-md-4 mb-4 mb-md-0" data-appear-animation-delay="250">
						<article>
							<div className="row">
								<div className="col">
									<img src="img/.jpg" className="img-fluid hover-effect-2 mb-3" alt="" />
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h4 className="mb-0">&nbsp;</h4>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>

			{/* Client Onboarding */}
			<div className="container">
				<div className="row text-center text-md-start pt-4 pb-5 my-4">
					<div className="col-lg-6 mb-5 mb-lg-0 " data-="fadeInRightShorter" data--delay="600">
						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Client Onboarding</h2>
						<ul className="list list-icons list-primary">
							<li><i className="fas fa-check"></i> <strong>Step 1:</strong> Client Meets with MyHealthily Support Team</li>
							<li><i className="fas fa-check"></i> <strong>Step 2:</strong> Client Prepares for Official Launch</li>
						</ul>
					</div>
					<div className="col-lg-6 mb-5 mb-lg-0 " data-="fadeInRightShorter" data--delay="1000">
						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">&nbsp;</h2>
						<ul className="list list-icons list-primary">
							<li><i className="fas fa-check"></i> <strong>Step 3:</strong> Client goes through onboarding training with their team and MyHealthily</li>
							<li><i className="fas fa-check"></i> <strong>Step 4:</strong> Client quotes their first group to be enrolled in coverage through the MyHealthily platform.</li>
						</ul>
					</div>
				</div>
			</div>

			{/* EASE Transition Resources 
			<div className="container py-4 my-0">
				<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">EASE Transition Resources</h2>
				<div className="row featured-boxes featured-boxes-style-4">
					<div className="col-md-6 col-lg-3">
						<div className="featured-box featured-box-primary featured-box-effect-4" data-appear-animation="fadeIn">
							<div className="box-content px-4">
								<a href="#"><i className="icon-featured icon-microphone icons text-12"></i></a>
								<h4 className="font-weight-bold text-color-dark pb-1 mb-2">Talk Track</h4>
								<p className="mb-0">View our talking points to help agents transition from Ease to MyHealhily. <a href="#">Download PDF</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="featured-box featured-box-primary featured-box-effect-4" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
							<div className="box-content px-4">
							<a href="#"><i className="icon-featured icon-wallet icons text-12"></i></a>
								<h4 className="font-weight-bold text-color-dark pb-1 mb-2">Pricing</h4>
								<p className="mb-0">See which tier of the MyHealhily platform is right for you and your agency. <a href="#">View Pricing</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			*/}

			{/* Additional Resources */}
			<div className="container py-4 my-0">
				<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Additional Resources</h2>
				<div className="row featured-boxes featured-boxes-style-4">
					<div className="col-md-6 col-lg-3">
						<div className="featured-box featured-box-primary featured-box-effect-4" data-appear-animation="fadeIn">
							<div className="box-content px-4">
								<a href="blog"><i className="icon-featured icon-magnifier icons text-12"></i></a>
								<h4 className="font-weight-bold text-color-dark pb-1 mb-2">Blog</h4>
								<p className="mb-0">Everything agents and brokers need to know about small group health insurance. <a href="blog">View Blog</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="featured-box featured-box-primary featured-box-effect-4" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
							<div className="box-content px-4">
								<a href="downloads/Turn-7-Hours-Into-One-Call.pdf" target="_new"><i className="icon-featured icon-hourglass icons text-12"></i></a>
								<h4 className="font-weight-bold text-color-dark pb-1 mb-2">Save 70% on Time</h4>
								<p className="mb-0">Turn 7 hours of work into one 45-minute call with your small group clients. <a href="downloads/Turn-7-Hours-Into-One-Call.pdf" target="_new">Download PDF</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="featured-box featured-box-primary featured-box-effect-4" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
							<div className="box-content px-4">
								<a href="faqs"><i className="icon-featured icon-question icons text-12"></i></a>
								<h4 className="font-weight-bold text-color-dark pb-1 mb-2">FAQs</h4>
								<p className="mb-0">Answers to the most common questions about MyHealthily’s platform. <a href="faqs">View FAQs</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="featured-box featured-box-primary featured-box-effect-4" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
							<div className="box-content px-4">
							<a href="pricing"><i className="icon-featured icon-wallet icons text-12"></i></a>
								<h4 className="font-weight-bold text-color-dark pb-1 mb-2">Pricing</h4>
								<p className="mb-0">See which tier of the MyHealhily platform is right for you and your agency. <a href="pricing">View Pricing</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Carriers */}
			<section className="call-to-action">
				<div className="container">
					<div className="row text-center pb-2 mt-4">
						<h4>170+ National Carriers</h4>
						<div className="owl-carousel owl-theme carousel-center-active-item mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 5}}, 'autoplay': true, 'autoplayTimeout': 1500, 'dots': false}">
							<div><img className="img-fluid" src="/img/allstate.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/aflac.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/aetna.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/united.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/sidecar.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/principal.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/oscar.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/kaiser-permanente.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/humana.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/guardian-healthcare.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/friday-health-plans.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/cigna.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/careington.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/blue-cross.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/beam.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/anthem.jpg" alt=""/></div>
							<div><img className="img-fluid" src="/img/and-many-more.jpg" alt=""/></div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to action begins */}
			<div className="container" id="demo">
				<div className="row text-center text-md-start pt-4 pb-5 my-4">
					<div className="col-lg-6 mb-5 mb-lg-0 " data-="fadeInRightShorter" data--delay="600">
						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Book a Demo</h2>
						<p>Allow an experienced risk advisor to walk you through a live, customized demo of our platform, and answer your questions, to see if MyHealthily is the right choice for your agency. No pressure or obligations.</p>
						<h4 className="font-weight-bold text-5 line-height-1 ls-0 mb-4">Popular Demo Features</h4>
						<ul className="list list-icons list-primary">
							<li><i className="fas fa-check"></i> Quote and close in one 45-minute call</li>
							<li><i className="fas fa-check"></i> Eliminate paperwork </li>
							<li><i className="fas fa-check"></i> Plans comparison </li>
							<li><i className="fas fa-check"></i> Platform sales insights</li>
							<li><i className="fas fa-check"></i> Simple renewals process</li>
						</ul>
						<h4 className="font-weight-bold text-5 line-height-1 ls-0 mb-4">Contact Us</h4>
						<p><a href="mailto:support@my%68ealth%69ly.com">agents@myhealthily.com</a> | (888) 219-7952<br/>Hours of Operation: Weekdays 9 AM – 5 PM (EST)</p>
					</div>
					<div className="col-lg-6 mb-5 mb-lg-0 " data-="fadeInRightShorter" data--delay="1000">
						<iframe width='100%' height='750px' src='https://healthcareadvisormeeting.zohobookings.com/portal-embed#/heartland' frameBorder="0" allowFullScreen={true}
                        ></iframe>
					</div>
				</div>
			</div>

			{/* Disclaimer */}
			<div id="examples" className="container py-2">
				<div className="row">
					<div className="col">
						<div className="row">
							<div className="col pb-3">
									<div className="alert alert-default text-center">
									Disclaimer: This site is confidential and solely for the use of contracted distribution partners of MyHealhily.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Heartland;