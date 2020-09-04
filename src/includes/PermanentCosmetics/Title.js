import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";


class Title extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return <div id={this.props.id}>
        <Row style={{marginTop:100}}>
            <Col className="col-md-4">
                <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div style={myStyle.line} />
                </Animated>

            </Col>
            <Col className="col-md-4" style={{textAlign:"center"}}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <b style={{ fontSize: 21, textAlign: 'center',  marginLeft:0, color: '#1D3557' }}>{this.props.header}</b>
                </Animated>
            </Col>
            <Col className="col-md-4">
                <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div style={myStyle.line} />
                </Animated>
            </Col>
        </Row>
        </div>
    }
}

const myStyle = {
    line : {
        width: "100%",
        marginTop: 16, 
        height: 2, 
        backgroundColor: '#CF003C'
    }
}

export default Title;