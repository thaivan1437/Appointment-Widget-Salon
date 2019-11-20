import React, { Component } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
import sliderData from './salonPictureData'
import { Animated } from "react-animated-css";
import MySlider from 'react-animated-slider';
import { isMobile } from "react-device-detect";
import '../../assets/css/horizontal.css';

class SalonPicture extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {
        return   <div>
             <div >
                <MySlider className={`slider2`}>
                    {sliderData.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: `url('${item.original}') no-repeat center center`, backgroundPosition: "center",
                                backgroundSize: "cover",
                                // height:400
                            }}
                        >
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.48)', color: '#FFF', fontSize: 16, width:'30%', bottom:150, right:0, position:'absolute' }}>
                                <span>{item.title}</span>
                                <br />
                                <span>{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </MySlider>
            </div>
            </div>
    }
}

export default SalonPicture;