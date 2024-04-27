import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MyHealthily Carriers",
};

interface Props { }

const Carriers: React.FC<Props> = () => {

    return (
        <div role="main" className="main">

            <section className="page-header page-header-classNameic page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                            <h1 data-title-border>MyHealthily Carriers</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* One Column */}
            <div className="container pt-3 pb-2">
                <div className="row pt-2">
                    <div className="col">
                        <p>MyHealthily's complete list of healthcare and ancillary carriers in all 50 states and the District of Columbia.</p>
                        <p>LAST UPDATED: FEB 12, 2024 | CONFIDENTIAL | DO NOT DISTRIBUTE</p>
                    </div>
                </div>
            </div>

            <div className="container pt-3 pb-2">
                <div className="accordion accordion-modern-status accordion-modern-status-primary" id="accordion100">

                    {/* Alabama */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingOne">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100One" aria-expanded="false" aria-controls="collapse100One">
                                    Alabama
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100One" className="collapse" aria-labelledby="collapse100HeadingOne" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of Alabama<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />UnitedHealthcare Level Funded<br />Vault Strategies<br />Vault Level Funded<br />VIVA Health</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Alaska */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwo">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Two" aria-expanded="false" aria-controls="collapse100Two">
                                    Alaska
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Two" className="collapse" aria-labelledby="collapse100HeadingTwo" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Health Benefit Alliance<br />Moda Health<br />Premera BlueCross BlueShield of Alaska<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum<br />Trustmark</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Arkansas */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThree">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Three" aria-expanded="false" aria-controls="collapse100Three">
                                    Arkansas
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Three" className="collapse" aria-labelledby="collapse100HeadingThree" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Arkansas BlueCross BlueShield<br />Allstate Benefits Level Funded<br />Health Benefit Alliance<br />Health Advantage<br />Sidecar<br />QualChoice<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Arkansas BlueCross BlueShield<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Arizona */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFour">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Four" aria-expanded="false" aria-controls="collapse100Four">
                                    Arizona
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Four" className="collapse" aria-labelledby="collapse100HeadingFour" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Angle Health<br />Banner Health & Aetna Health Insurance Company<br />BlueCross BlueShield of Arizona<br />Cigna+Oscar<br />Cigna Healthcare<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />UnitedHealthcare Level Funded<br />Vault Strategies<br />Vault Level Funded<br />WMI Mutual Insurance Co</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* California */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFive">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Five" aria-expanded="false" aria-controls="collapse100Five">
                                    California
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Five" className="collapse" aria-labelledby="collapse100HeadingFive" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Anthem<br />Allstate Benefits Level Funded<br />BlueShield of California<br />CalChoice<br />Chinese Community Health Plan<br />Cigna+Oscar<br />CoveredCA<br />Health Benefit Alliance<br />Health Net<br />Kaiser Permanente<br />Medi-Excel<br />Sharp Health Plan<br />Sutter Health Plus<br />UnitedHealthcare<br />Western Health Advantage<br />Vault Strategies</td>				<td>Aflac<br />Anthem<br />Beam<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Colorado */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingSix">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Six" aria-expanded="false" aria-controls="collapse100Six">
                                    Colorado
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Six" className="collapse" aria-labelledby="collapse100HeadingSix" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Anthem<br />Angle Health<br />Allstate Benefits Level Funded<br />Health Benefit Alliance<br />Kaiser Permanente<br />Allstate Benefits Level Funded<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Connecticut */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingSeven">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Seven" aria-expanded="false" aria-controls="collapse100Seven">
                                    Connecticut
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Seven" className="collapse" aria-labelledby="collapse100HeadingSeven" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Anthem<br />Cigna+Oscar<br />Health Benefit Alliance<br />Oxford <br />UnitedHealthcare<br />Vault Strategies</td>	<td>Aflac<br />Anthem<br />Benecare<br />Beam<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Delaware */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingEight">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Eight" aria-expanded="false" aria-controls="collapse100Eight">
                                    Delaware
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Eight" className="collapse" aria-labelledby="collapse100HeadingEight" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Health Benefit Alliance<br />Highmark BlueCross BlueShield<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Beam<br />BeneCare<br />Companion Life<br />Guardian<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* District of Columbia */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingNine">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Nine" aria-expanded="false" aria-controls="collapse100Nine">
                                    District of Columbia
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Nine" className="collapse" aria-labelledby="collapse100HeadingNine" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />CareFirst BlueCross BlueShield<br />Health Benefit Alliance<br />Kaiser Permanente<br />Vault Strategies<br />UnitedHealthcare</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Florida */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Ten" aria-expanded="false" aria-controls="collapse100Ten">
                                    Florida
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Ten" className="collapse" aria-labelledby="collapse100HeadingTen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Fully Insured<br />Allstate Benefits Level Funded<br />Angle Health<br />AvMed<br />Capital Health Plan<br />Florida Blue<br />Florida Health Care Plans<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Georgia */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingEleven">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Eleven" aria-expanded="false" aria-controls="collapse100Eleven">
                                    Georgia
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Eleven" className="collapse" aria-labelledby="collapse100HeadingEleven" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Anthem<br />Angle Health<br />Cigna+Oscar<br />Health Benefit Alliance<br />Kaiser Permanente<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Hawaii */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwelve">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twelve" aria-expanded="false" aria-controls="collapse100Twelve">
                                    Hawaii
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twelve" className="collapse" aria-labelledby="collapse100HeadingTwelve" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hawaii Medical Service Association<br />Health Benefit Alliance<br />Kaiser Permanente<br />UnitedHealthcare<br />University Health Alliance<br />Vault Strategies</td>
                                            <td>Aflac<br />BEST Life<br />Guardian<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Idaho */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirteen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirteen" aria-expanded="false" aria-controls="collapse100Thirteen">
                                    Idaho
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirteen" className="collapse" aria-labelledby="collapse100HeadingThirteen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross of Idaho<br />Health Benefit Alliance<br />Moda Health<br />Mountain Health CO-OP<br />PacificSource Health Plans<br />Regence BlueShield of Idaho<br />SelectHealth<br />St Luke's Health Plan<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Illinois */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFourteen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fourteen" aria-expanded="false" aria-controls="collapse100Fourteen">
                                    Illinois
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fourteen" className="collapse" aria-labelledby="collapse100HeadingFourteen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />BlueCross BlueShield of Illinois<br />Health Alliance<br />Health Benefit Alliance<br />Medical Associates Health Plan<br />MercyCare Health Plans<br />Quartz<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Indiana */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFifteen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fifteen" aria-expanded="false" aria-controls="collapse100Fifteen">
                                    Indiana
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fifteen" className="collapse" aria-labelledby="collapse100HeadingFifteen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Fully Insured<br />Allstate Benefits Level Funded<br />Angle Health<br />Anthem<br />Health Benefit Alliance<br />IU Health Plans<br />Physicians Health Plan of Northern Indiana<br />Sidecar Health<br />SIHO Insurance Services<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Iowa */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingSixteen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Sixteen" aria-expanded="false" aria-controls="collapse100Sixteen">
                                    Iowa
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Sixteen" className="collapse" aria-labelledby="collapse100HeadingSixteen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Avera Health Plans<br />Health Alliance<br />Health Benefit Alliance<br />HealthPartners<br />Medical Associates Health Plans<br />Quartz<br />Sanford Health Plan<br />UnitedHealthcare<br />Wellmark BlueCross BlueShield of Iowa<br />Vault Strategies<br />Vault Level Funded<br />Medica</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Kansas */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingSeventeen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Seventeen" aria-expanded="false" aria-controls="collapse100Seventeen">
                                    Kansas
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Seventeen" className="collapse" aria-labelledby="collapse100HeadingSeventeen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />BlueCross BlueShield of Kansas<br />BlueCross BlueShield of Kansas City<br />Cigna+Oscar<br />Health Benefit Alliance<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Kentucky */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingEighteen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Eighteen" aria-expanded="false" aria-controls="collapse100Eighteen">
                                    Kentucky
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Eighteen" className="collapse" aria-labelledby="collapse100HeadingEighteen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Anthem<br />Angle Health<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Louisiana */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingNineteen">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Nineteen" aria-expanded="false" aria-controls="collapse100Nineteen">
                                    Louisiana
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Nineteen" className="collapse" aria-labelledby="collapse100HeadingNineteen" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of Louisiana<br />Health Benefit Alliance<br />Vault Strategies<br />Vault Level Funded<br />UnitedHealthcare</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Maine */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwenty">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twenty" aria-expanded="false" aria-controls="collapse100Twenty">
                                    Maine
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twenty" className="collapse" aria-labelledby="collapse100HeadingTwenty" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Anthem<br />Community Health Options<br />Harvard Pilgrim<br />Health Benefit Alliance<br />Taro Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Maryland */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentyone">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentyone" aria-expanded="false" aria-controls="collapse100Twentyone">
                                    Maryland
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentyone" className="collapse" aria-labelledby="collapse100HeadingTwentyone" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />CareFirst BlueCross BlueShield <br />Health Benefit Alliance<br />Kaiser Permanente<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Benecare<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Massachusetts */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentytwo">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentytwo" aria-expanded="false" aria-controls="collapse100Twentytwo">
                                    Massachusetts
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentytwo" className="collapse" aria-labelledby="collapse100HeadingTwentytwo" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of Massachusetts<br />Fallon Health<br />Harvard Pilgrim<br />Health Benefit Alliance<br />Health New England<br />Tufts Health Plan<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded<br />ConnectiCare<br />Mass General Brigham Health<br />WellSense Health Plan</td>
                                            <td>Aflac<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Michigan */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentythree">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentythree" aria-expanded="false" aria-controls="collapse100Twentythree">
                                    Michigan
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentythree" className="collapse" aria-labelledby="collapse100HeadingTwentythree" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield  of Michigan<br />HAP<br />Health Benefit Alliance<br />Paramount Insurance<br />Physicians Health Plan<br />Priority Health<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Blue Cross Blue Shield of Michigan<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Minnesota */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentyfour">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentyfour" aria-expanded="false" aria-controls="collapse100Twentyfour">
                                    Minnesota
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentyfour" className="collapse" aria-labelledby="collapse100HeadingTwentyfour" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of Minnesota<br />HealthPartners<br />Health Benefit Alliance<br />Medica<br />Quartz<br />Sanford Health Plan<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Mississippi */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentyfive">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentyfive" aria-expanded="false" aria-controls="collapse100Twentyfive">
                                    Mississippi
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentyfive" className="collapse" aria-labelledby="collapse100HeadingTwentyfive" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield  of Mississippi<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Missouri */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentysix">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentysix" aria-expanded="false" aria-controls="collapse100Twentysix">
                                    Missouri
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentysix" className="collapse" aria-labelledby="collapse100HeadingTwentysix" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Fully Insured<br />Allstate Benefits Level Funded<br />Angle Health<br />Anthem<br />BlueCross BlueShield  of Kansas City<br />Cigna+Oscar<br />Cox Health Systems Insurance Company<br />Health Benefit Alliance<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Montana */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentyseven">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentyseven" aria-expanded="false" aria-controls="collapse100Twentyseven">
                                    Montana
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentyseven" className="collapse" aria-labelledby="collapse100HeadingTwentyseven" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield  of Montana<br />Health Benefit Alliance<br />Montana Health Co-Op<br />PacificSource Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Nebraska */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentyeight">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentyeight" aria-expanded="false" aria-controls="collapse100Twentyeight">
                                    Nebraska
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentyeight" className="collapse" aria-labelledby="collapse100HeadingTwentyeight" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />BlueCross BlueShield  of Nebraska<br />Health Benefit Alliance<br />Medica<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Nevada */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingTwentynine">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Twentynine" aria-expanded="false" aria-controls="collapse100Twentynine">
                                    Nevada
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Twentynine" className="collapse" aria-labelledby="collapse100HeadingTwentynine" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Anthem<br />Angle Health<br />Health Benefit Alliance<br />Health Plan of Nevada<br />Hometown Health<br />Prominence Health Plan<br />UnitedHealthcare<br />SelectHealth<br />Sierra Health and Life<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* New Hampshire */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirty">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirty" aria-expanded="false" aria-controls="collapse100Thirty">
                                    New Hampshire
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirty" className="collapse" aria-labelledby="collapse100HeadingThirty" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Anthem<br />Harvard Pilgrim<br />Health Benefit Alliance<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* New Jersey */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtyone">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtyone" aria-expanded="false" aria-controls="collapse100Thirtyone">
                                    New Jersey
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtyone" className="collapse" aria-labelledby="collapse100HeadingThirtyone" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />AmeriHealth<br />Health Benefit Alliance<br />Horizon BlueCross BlueShield of New Jersey<br />Oscar<br />Oxford<br />Vault Strategies</td>
                                            <td>Aflac<br />BeneCare<br />Beam<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* New Mexico */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtytwo">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtytwo" aria-expanded="false" aria-controls="collapse100Thirtytwo">
                                    New Mexico
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtytwo" className="collapse" aria-labelledby="collapse100HeadingThirtytwo" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of New Mexico<br />Health Benefit Alliance<br />Presbyterian Health Plan<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* New York */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtythree">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtythree" aria-expanded="false" aria-controls="collapse100Thirtythree">
                                    New York
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtythree" className="collapse" aria-labelledby="collapse100HeadingThirtythree" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Anthem<br />CDPHP<br />EmblemHealth<br />Excellus<br />HealthPass<br />Health Benefit Alliance<br />Highmark of Northeastern New York<br />Highmark of Western New York<br />Independent Health<br />MVP Health Plans<br />Oscar<br />Oxford<br />UnitedHealthcare<br />Vault Strategies</td>
                                            <td>Aflac<br />Anthem<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* North Carolina */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtyfour">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtyfour" aria-expanded="false" aria-controls="collapse100Thirtyfour">
                                    North Carolina
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtyfour" className="collapse" aria-labelledby="collapse100HeadingThirtyfour" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Angle Health<br />BlueCross BlueShield of North Carolina<br />FirstCarolinaCare Insurance Company<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* North Dakota */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtyfive">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtyfive" aria-expanded="false" aria-controls="collapse100Thirtyfive">
                                    North Dakota
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtyfive" className="collapse" aria-labelledby="collapse100HeadingThirtyfive" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of North Dakota<br />HealthPartners<br />Health Benefit Alliance<br />Medica Insurance Company<br />Sanford Health Plan<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Ohio */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtysix">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtysix" aria-expanded="false" aria-controls="collapse100Thirtysix">
                                    Ohio
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtysix" className="collapse" aria-labelledby="collapse100HeadingThirtysix" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Angle Health<br />Anthem<br />AultCare Insurance<br />Health Benefit Alliance<br />Medical Mutual<br />Paramount Insurance<br />Sidecar Health<br />SummaCare<br />The Health Plan<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Oklahoma */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtyseven">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtyseven" aria-expanded="false" aria-controls="collapse100Thirtyseven">
                                    Oklahoma
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtyseven" className="collapse" aria-labelledby="collapse100HeadingThirtyseven" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />BlueCross BlueShield of Oklahoma<br />CommunityCare<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Oregon */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtyeight">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtyeight" aria-expanded="false" aria-controls="collapse100Thirtyeight">
                                    Oregon
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtyeight" className="collapse" aria-labelledby="collapse100HeadingThirtyeight" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Health Benefit Alliance<br />Health Net<br />Kaiser Permanente<br />Moda Health<br />PacificSource Health Plans<br />Providence Health Plan<br />Regence BlueCross BlueShield<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pennsylvania */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingThirtynine">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Thirtynine" aria-expanded="false" aria-controls="collapse100Thirtynine">
                                    Pennsylvania
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Thirtynine" className="collapse" aria-labelledby="collapse100HeadingThirtynine" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Capital BlueCross<br />Cigna+Oscar<br />Geisinger<br />Health Benefit Alliance<br />Highmark BlueCross BlueShield<br />Independence Blue Cross<br />UPMC<br />UnitedHealthcare<br />Vault Strategies</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />BeneCare<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Rhode Island */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingForty">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Forty" aria-expanded="false" aria-controls="collapse100Forty">
                                    Rhode Island
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Forty" className="collapse" aria-labelledby="collapse100HeadingForty" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of Rhode Island<br />Health Benefit Alliance<br />Neighborhood Health Plan of Rhode Island<br />Harvard Pilgrim<br />UnitedHealthcare<br />Vault Strategies</td>
                                            <td>Aflac<br />Guardian<br />OneAmerica<br />Principal<br />UnitedHealthcare</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* South Carolina */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortyone">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortyone" aria-expanded="false" aria-controls="collapse100Fortyone">
                                    South Carolina
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortyone" className="collapse" aria-labelledby="collapse100HeadingFortyone" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Angle Health<br />BlueChoice HealthPlan of South Carolina<br />BlueCross BlueShield of South Carolina<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* South Dakota */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortytwo">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortytwo" aria-expanded="false" aria-controls="collapse100Fortytwo">
                                    South Dakota
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortytwo" className="collapse" aria-labelledby="collapse100HeadingFortytwo" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Avera Health Plans<br />HealthPartners<br />Health Benefit Alliance<br />Medica<br />Sanford Health Plan<br />UnitedHealthcare<br />Wellmark BlueCross BlueShield of South Dakota<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Tennessee */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortythree">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortythree" aria-expanded="false" aria-controls="collapse100Fortythree">
                                    Tennessee
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortythree" className="collapse" aria-labelledby="collapse100HeadingFortythree" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Angle Health<br />Cigna+Oscar<br />Health Benefit Alliance<br />Sidecar Health<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded<br />BCBS of TN</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Texas */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortyfour">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortyfour" aria-expanded="false" aria-controls="collapse100Fortyfour">
                                    Texas
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortyfour" className="collapse" aria-labelledby="collapse100HeadingFortyfour" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Fully Insured<br />Allstate Benefits Level Funded<br />Angle Health<br />Baylor Scott & White<br />BlueCross BlueShield of Texas<br />CHRISTUS Health<br />Health Benefit Alliance<br />Memorial Hermann Health Plan<br />Sidecar Health<br />Texas Health + Aetna<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Utah */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortyfive">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortyfive" aria-expanded="false" aria-controls="collapse100Fortyfive">
                                    Utah
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortyfive" className="collapse" aria-labelledby="collapse100HeadingFortyfive" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Angle Health<br />Angle Health Fully Insured<br />Health Benefit Alliance<br />Regence BlueCross BlueShield<br />SelectHealth<br />SidecarHealth<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Vermont */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortysix">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortysix" aria-expanded="false" aria-controls="collapse100Fortysix">
                                    Vermont
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortysix" className="collapse" aria-labelledby="collapse100HeadingFortysix" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of Vermont<br />Health Benefit Alliance<br />MVP Health Plans<br />Vault Strategies</td>
                                            <td>Aflac<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Virginia */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortyseven">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortyseven" aria-expanded="false" aria-controls="collapse100Fortyseven">
                                    Virginia
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortyseven" className="collapse" aria-labelledby="collapse100HeadingFortyseven" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Anthem<br />CareFirst BlueCross BlueShield<br />Health Benefit Alliance<br />Innovation Health<br />Kaiser Permanente<br />Sentara Health Plans<br />Piedmont HealthCare<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />BEST Life<br />Beam<br />Companion Life<br />Delta Dental of Virginia<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Washington */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortyeight">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortyeight" aria-expanded="false" aria-controls="collapse100Fortyeight">
                                    Washington
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortyeight" className="collapse" aria-labelledby="collapse100HeadingFortyeight" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aetna<br />Allstate Benefits Level Funded<br />Asuris Northwest Health<br />Health Alliance<br />Kaiser Permanente<br />PacificSource Health Plans<br />Premera Blue Cross<br />Regence BlueCross BlueShield<br />Regence Blue Shield<br />UnitedHealthcare<br />Vault Strategies</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* West Virginia */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFortynine">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fortynine" aria-expanded="false" aria-controls="collapse100Fortynine">
                                    West Virginia
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fortynine" className="collapse" aria-labelledby="collapse100HeadingFortynine" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Health Benefit Alliance<br />Highmark BlueCross BlueShield<br />The Health Plan<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Wisconsin */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFifty">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fifty" aria-expanded="false" aria-controls="collapse100Fifty">
                                    Wisconsin
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fifty" className="collapse" aria-labelledby="collapse100HeadingFifty" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />Anthem<br />Aspirus Health Plan<br />Common Ground Healthcare Cooperative<br />Dean Health Plan<br />Group Health Co-Op of Eau Claire<br />Group Health Co-Op of Central Wisconsin<br />HealthPartners<br />Medica<br />Medical Associates Health Plans<br />MercyCare Health Plans<br />Network Health Plan<br />Quartz<br />Security Health Plan<br />UnitedHealthcare<br />Wisconsin Physicians Svc Insurance Corp<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />Anthem<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Wyoming */}
                    <div className="card card-default">
                        <div className="card-header" id="collapse100HeadingFiftyone">
                            <h4 className="card-title m-0">
                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#collapse100Fiftyone" aria-expanded="false" aria-controls="collapse100Fiftyone">
                                    Wyoming
                                </a>
                            </h4>
                        </div>
                        <div id="collapse100Fiftyone" className="collapse" aria-labelledby="collapse100HeadingFiftyone" data-bs-parent="#accordion100">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Health Carrier</th>
                                            <th>Ancillary Carrier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Allstate Benefits Level Funded<br />BlueCross BlueShield of Wyoming<br />Health Benefit Alliance<br />Mountain Health CO-OP<br />UnitedHealthcare<br />Vault Strategies<br />Vault Level Funded</td>
                                            <td>Aflac<br />BEST Life<br />Beam<br />Companion Life<br />Guardian<br />Humana<br />OneAmerica<br />Principal<br />UnitedHealthcare<br />Unum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Carriers;
