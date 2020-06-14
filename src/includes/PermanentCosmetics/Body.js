import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";


class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return this.props.reverse === false ?
        <Row style={{marginTop:50}}>
                <Col className="col-md-5">
                    <img src={this.props.imgUrl} style={{borderRadius:10,width:isMobile ? 330 : 420,height: isMobile ? 220 : 250}} />
                </Col>
                <Col className="col-md-7" style={{fontSize:23}}>
                <p style={{marginTop:this.props.top}}>
               {this.props.text}
                </p>
                </Col>
            </Row>
            :
            <Row style={{marginTop:50}}>
                <Col className="col-md-7" style={{fontSize:23}}>
                <p style={{marginTop:this.props.top}}>
               {this.props.text}
                </p>
                </Col>
                <Col className="col-md-5">
                    <img src={this.props.imgUrl} style={{borderRadius:10,width:isMobile ? 330 : 420,height: isMobile ? 220 : 250}} />
                </Col>
            </Row>
    }
}

export default Body;