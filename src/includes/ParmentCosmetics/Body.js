import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import {Animated} from "react-animated-css";


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
                    <img src={this.props.imgUrl} style={{borderRadius:10,width:420,height:250}} />
                </Col>
                <Col className="col-md-7" style={{fontSize:20}}>
                <p style={{marginTop:this.props.top}}>
               {this.props.text}
                </p>
                </Col>
            </Row>
            :
            <Row style={{marginTop:50}}>
                <Col className="col-md-7" style={{fontSize:20}}>
                <p style={{marginTop:this.props.top}}>
               {this.props.text}
                </p>
                </Col>
                <Col className="col-md-5">
                    <img src={this.props.imgUrl} style={{borderRadius:10,width:420,height:250}} />
                </Col>
            </Row>
    }
}

export default Body;