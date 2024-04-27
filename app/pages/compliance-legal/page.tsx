import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How MyHealthily Works",
};

interface Props { }

const HowItWorks: React.FC<Props> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>Compliance and Legal</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* One Column */}
            <div className="container pt-3 pb-2">
                <div className="row pt-2">
                    <p>MyHealthily grants permission to view, copy, print and distribute the information found on this Web site provided that the above copyright notice appears on all copies, use is for internal informational purposes only, and no modification is made to any materials. Any other use, reproduction or distribution must be first approved by MyHealthily.</p>

                    <h3>PRIVACY</h3>
                    <p>Your privacy is important to us. MyHealthily does not share personal information with third parties without notice, your consent, or as required by law. MyHealthily only shares your information for the purposes of providing services which you have engaged MyHealthily to perform on your behalf such as placing your insurance, and/or providing you with insurance-related products and/or services.</p>

                    <h3>DISCLAIMER</h3>
                    <p>The content of this Web site is provided for informational purposes only, from a general insurance/risk management perspective, with the understanding that MyHealthily is not rendering legal, accounting or other professional advice on specific matters. Accordingly, MyHealthily assumes no liability whatsoever in connection with the use of such content. MyHealthily recommends that you consult your legal counsel or other professional advisor with respect to your individual situation.</p>

                    <h3>NO WARRANTIES</h3>
                    <p>MyHealthily makes no representation or warranty whatsoever and assumes no responsibility or liability whatsoever in connection with the accuracy, completeness, or currency of the materials or the suitability, functionality, or operation of the materials on this or any other site which may be hyperlinked to this site. MyHealthily is in no way responsible for the views, content or accuracy of any site which is either hyperlinked to or from this site, nor does MyHealthily endorse any content or products that may be advertised or noted on these sites. Information on this Web site is subject to change at any time without prior notice.</p>

                    <h3>LIMITATION OF LIABILITY</h3>
                    <p>MyHealthily provides these materials and Web site on an &#8220;as is&#8221; &#8220;when available&#8221; basis without warranty of any kind, express or implied, including but not limited to any implied warranty of merchantability or fitness for a particular purpose or non-infringement. In no event will MyHealthily be liable for any damages, including but not limited to special, indirect, incidental or consequential damages, or for acts of negligence arising in connection with any information, result, error, omission, defect, delay or system malfunction relating to MyHealthily &#8216;s web site regardless of whether MyHealthily has been advised of the possibility of such damages.</p>

                    <h3>WARNING</h3>
                    <p>Unauthorized access to secured databases or circumvention of security measures on this Web site may be a violation of state and federal laws. Access to this website may be monitored and use of this site constitutes consent to monitoring.</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
