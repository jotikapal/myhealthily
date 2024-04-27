import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MyHealthily - Healthcare, Dental, Vision, and More!",
};

interface Props { }

const BookDemo:React.FC<Props> = () => {
	
	return (
		<div role="main" className="main">
			
			<section className="page-header page-header-classic page-header-md">
				<div className="container">
					<div className="row">
						<div className="col-md-8 order-2 order-md-1 align-self-center p-static">
							<h1 data-title-border>Book Your Demo</h1>
						</div>
					</div>
				</div>
			</section>

			{/* Two Columns */}
			<div className="container">
				<div className="row text-center text-md-start pt-4 pb-5 my-4">
					<div className="col-lg-6 mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">
						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">See MyHealthily in Action!</h2>
						<p>Give us about 45-minutes to walk you through a live, customized demo of our platform, answer questions, and see if MyHealthily is the right choice for your agency. No pressure or obligations.</p>

						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Popular Demo Features</h2>
						<ul className="list list-icons list-primary">
							<li><i className="fas fa-check"></i> Quote and close in one 45-minute call</li>
							<li><i className="fas fa-check"></i> Eliminate paperwork </li>
							<li><i className="fas fa-check"></i> Plans comparison </li>
							<li><i className="fas fa-check"></i> Platform sales insights</li>
							<li><i className="fas fa-check"></i> Simple renewals process</li>
						</ul>

						<h2 className="font-weight-bold text-6 line-height-1 ls-0 mb-4">Contact Us</h2>
						<p><a href="mailto:support@my%68ealth%69ly.com">agents@myhealthily.com</a> | (888) 219-7952<br/>Hours of Operation: Weekdays 9 AM – 5 PM (EST)</p>
					</div>
					<div className="col-lg-6 mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1000">
						<iframe loading="lazy" width="100%" height="800px" src="https://healthcareadvisormeeting.zohobookings.com/portal-embed#/customer/brokers" frameBorder="0" allowFullScreen={true}></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookDemo;
