import React, { Component } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
import sliderData from './sliderData'
import {Animated} from "react-animated-css";
import MySlider from 'react-animated-slider';
import { isMobile } from "react-device-detect";
import '../../assets/css/horizontal.css';

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    sliderRender = () => {
        
        return <div className="banner-info">
            <Container>
                <Row>
                    <Col>
                    <Animated animationIn="fadeInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={this.state.focus}>
                    
                    <div className="time-table" style={ isMobile ? {width: 315} : {}}>
                        <span><b>Belmont Beauty Salon</b></span><br /><br />
                        <span style={{fontSize:14}}>951 Old Country Rd. #4, <br/>  Belmont, CA 94002</span>
                        <br/> <br/>
                        <a id="tel-number" href="tel:(650) 595-2800"><span id="call-action">(650) 595-2800</span></a>
                    </div>
                 </Animated>
                    </Col>
                    <Col>
                    <Animated animationIn="fadeInRight" animationInDuration={1000} animationOutDuration={1000} isVisible={this.state.focus}>
                    <div className="time-table" style={ isMobile ? {width: 315} : {}}>
        					<span ><b>Open 7 Days A Week</b></span> <br /><br />
        					<span>Mon - Fri</span> <span style={{marginLeft:25}}>10:00 am - 7:30 pm</span> <br />
        					<strong><span>Sat</span></strong> <span style={{marginLeft:80}}>9:00 am - 7:00 pm</span> <br />
                            <strong><span>Sun</span></strong> <span style={{marginLeft:72}}> 10:00 am - 6:00 pm</span> <br /> <br />
                    </div>
                 </Animated>
                    </Col>
                </Row>
            </Container>
        </div>
    }
    render() {
        return <section className="page-slider">
            <div className={`slider`}>
                 {this.sliderRender()}
                <MySlider autoplay={3000}>
	{sliderData.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.original}') no-repeat center center`, backgroundPosition: "center",
            backgroundSize: "cover" }}
		>
           
		</div>
	))}
</MySlider>
            </div>
        </section>
    }
}

export default Slider;