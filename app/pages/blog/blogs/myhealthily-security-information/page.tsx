import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MyHealthily Security Information - MyHealthily",
    description: "We hold ourselves to high standards to ensure the MyHealthily platform is always available for you to use and your data is stored, managed, and secured.",
};

interface Props { }

const SecurityInformation:React.FC<Props> = () => {
	
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
									<h2 className="font-weight-semi-bold">MyHealthily Security Information</h2>
									<div className="post-meta">
										<span><i className="far fa-user"></i> By <a href="../team-bios#zanson-watt">Zanson Watt</a></span>
										<span><i className="far fa-folder"></i> Data Encryption, Security, Data Privacy</span>
										<span><i className="far fa-calendar"></i> FEB 7, 2024</span>
									</div>
									<img src="/img/blog/myhealthily-security-information.jpg" className="img-fluid float-start me-4 mt-2" alt=""/>
									<p>MyHealthily takes data privacy and security very seriously. We want to be your reliable and trusted platform for all of your small group benefit needs. In order to accomplish this, we use Amazon Web Services (AWS) to run our platform and store all data. Why is this important? Because AWS has a proven track record of reliability and security. They host everything from their own retail shop to highly secure government websites, and everything in between. Using their experience and tools allows us to stay up to date with the latest security patches and allows us to focus on what’s important to our clients.</p>

									<h3>Data Privacy</h3>

									<p>You own your data. It's as simple as that.</p>

									<p>There are a lot of services out there that have complex privacy policies, will take your data and sell it data brokers, or use it in ways you never intended. We are not like those other platforms, the data you give us is secure and private. Only being used for its intended purpose of quoting and managing your group’s benefits. Check out our <a href="/privacy-policy">privacy policy</a> for more details.</p>

									<p>This also means we take user permissions very seriously. Your data will never be at risk from being seen by another agency, employer, or employee unless granted permission. Personal Identifying Information (PII) gets leaked all the time across the internet, and most times it is through social engineering or just bad permissions being set. Rarely is it the software itself.</p>

									<h3>Data Security</h3>

									<p>It's all about the layers.</p>

									<p>When it comes to security there is never a silver bullet. The answer to security is layering, backups, and regular testing to look for vulnerabilities. Our software is cloud-based. What this means is data is stored, managed, and processed on a network of remote servers hosted on the internet, rather than on local servers or personal computers. AWS is one of the largest and most secure services for this type of infrastructure. Data is backed up nightly and secured with encryption. We use the latest standards for secure end to end encrypted browsing with HTTPS and SSL.</p>

									<p>Passwords are never stored in plain text and use the latest encryption standards, but we always recommend the use of a password manager. Using the same password across multiple applications is the primary reason data gets accessed by prying eyes.</p>
									
									<h3>Application Reliability</h3>

									<p>At Least 99.99% Up-time.</p>

									<p>We hold ourselves to high standards to ensure our platform is always available for you to use. Redundant systems are in place to ensure you can always access your data. We take pride in our system’s reliability and extensively test everything from the application UI to the deployments process. We constantly monitor our systems and make improvements so that you never have to think about it.</p>

									<h3>Our Software Engineering Team</h3>

									<p>Behind the scenes.</p>

									<p>We have a well-seasoned team of engineers that are always looking to improve your experience and keep the platform secure. With more than 30 years of combined professional experience, your mind can stay at ease knowing your data along with that of your clients is secure when using the <a href="/">MyHealthily</a> platform.</p>

									<p>Last Updated: 2/7/2024</p>


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

export default SecurityInformation;