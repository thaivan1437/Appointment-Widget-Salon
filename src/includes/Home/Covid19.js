import React, { Component } from 'react';
import { CDN_URL } from "../../env";

class Covid19 extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return  <div className="covid__section">
                    <div className="covid__header">
                        <div className="row d-flex align-items-center">
                            <div className="col-12 col-md-5 mb-4 mb-md-0">
                                <div className="covid__photos">
                                    <img src={CDN_URL + '/site/Covid-19/women.png'} alt="" />
                                </div>
                                <div className="covid__label">
                                    Our new look with protective gear
                                </div>
                            </div>
                            <div className="col-12 col-md-7 pl-5">
                                <div className="covid__title">
                                    Our salon is now open!
                                </div>
                                <div className="colvid__desc">
                                    Please contact us for an appointment if you are not yet scheduled.
                                    <br />
                                    FOR YOUR SAFETY, WE DO NOT ACCEPT ANY WALK-INS AT THIS TIME.
                                    <br />
                                    We are transitioning our environment to the new normal for your safety.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="covid__content pt-5 pb-5">
                        <div className="row">
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-1.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        Please wear a mask before you enter the salon.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-2.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        We will take your temperature using a touchless infra-red thermometer.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-3.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        We serve our customers with one-time use disposable capes.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-4.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        We will ask some screening questions relating to COVID-19 symptoms.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-5.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        Social distancing in effect maintain 6 feet of distance at all times.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-6.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        Magazines and coffee/tea no longer available in the waiting room.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-7.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        Please use hand sanitizer upon entering the salon, restroom and rooms.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                            <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                <div className="covid__photos d-flex align-items-center justify-content-center">
                                    <img src={CDN_URL + '/site/Covid-19/img-8.png'} alt="" />
                                </div>
                                <div className="covid__text d-flex align-items-center">
                                    Only customers with appointments and one guardian permitted into the salon.
                                </div>
                            </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-9.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        Please allow us enough time for enhanced disinfection between customers.
                                    </div>
                                </div>
                            </div>
                            <div className="covid__item col-12 col-md-6 mb-4">
                                <div className="covid__item__wrap d-flex flex-row align-items-center pl-0 pr-lg-5">
                                    <div className="covid__photos d-flex align-items-center justify-content-center">
                                        <img src={CDN_URL + '/site/Covid-19/img-10.png'} alt="" />
                                    </div>
                                    <div className="covid__text d-flex align-items-center">
                                        Please reschedule if anyone in your household has been sick in the last 2 weeks.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default Covid19;