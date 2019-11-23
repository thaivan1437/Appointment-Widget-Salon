import React, { Component } from 'react';
import sliderData from './salonPictureData'
import MySlider from 'react-animated-slider';
import '../../assets/css/horizontal.css';

class SalonPicture extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {
        return <section className="page-slider">
            <div>
                <MySlider className={`slider2`}>
                    {sliderData.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: `url('${item.original}') no-repeat center center`, backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        />
                    ))}
                </MySlider>
            </div>
        </section>
    }
}

export default SalonPicture;