import React, { Component } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
// import dynamic from 'next/dynamic'
import sliderData from './sliderData'
import { Animated } from "react-animated-css";
import MySlider from 'react-animated-slider';
import { isMobile } from "react-device-detect";

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAnimated: false
        }
    }

    componentDidMount() {
        this.setState({
            showAnimated: true
        })
    }

    sliderRender = () => {

        return  <div className="banner-info">
                    <Container>
                        <Row>
                            <Col>
                            <Animated animationIn="fadeInLeft" animationInDuration={3000} animationOutDuration={3000} isVisible={this.state.focus}>

                            <div className="time-table" style={ isMobile ? {width: 315} : {}}>
                                <span><b>Belmont Beauty Salon</b></span><br /><br />
                                <span style={{fontSize:14}}>951 Old Country Rd. #4, <br/>  Belmont, CA 94002</span>
                                <br/> <br/>
                                <a id="tel-number" href="tel:(650) 595-2800"><span id="call-action">(650) 595-2800</span></a>
                            </div>
                        </Animated>
                            </Col>
                            <Col>
                            <Animated animationIn="fadeInRight" animationInDuration={3000} animationOutDuration={3000} isVisible={this.state.focus}>
                            <div className="time-table" style={ isMobile ? {width: 315} : {}}>
                                    <span><b>Business Hours</b></span> <br /><br />
                                    {/* <span>Mon</span> <span style={{marginLeft:127}}>Closed</span> <br /> */}
                                    <strong><span>Mon - Fri</span></strong> <span style={{marginLeft:90}}>10:00 AM – 7:00 PM</span> <br />
                                    <strong><span>Sat - Sun</span></strong> <span style={{marginLeft:82}}>10:00 AM – 6:00 PM</span> <br /> <br />

                            </div>
                        </Animated>
                            </Col>
                        </Row>
                    </Container>
                </div>
    }
    render() {
        const { showAnimated } = this.state
        return  <section className="page-slider">
                    <div className={`slider`}>
                        {showAnimated && this.sliderRender()}
                        <MySlider autoplay={4000}>
                            {sliderData.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: `url('${item ? item.original : ""}') no-repeat center center`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover" 
                                    }}
                                ></div>
                            ))}
                        </MySlider>
                    </div>
                </section>
    }
}

export default Slider;