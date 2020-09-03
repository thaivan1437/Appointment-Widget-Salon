import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import classes from './PermanentCosmetics.scss'

class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return this.props.reverse === false ?
        <Row style={{marginTop:50}}>
                <Col md={5} sm={12} >
                    <img src={this.props.imgUrl} className={classes.img} alt='img'/>
                </Col>
                <Col md={7} sm={12} style={{fontSize:23}}>
                <p style={{marginTop:this.props.top}}>
               {this.props.text}
                </p>
                </Col>
            </Row>
            :
            <Row style={{marginTop:50}}>
                <Col md={7} sm={12} style={{fontSize:23}}>
                <p style={{marginTop:this.props.top}}>
                    {this.props.text}
                </p>
                </Col>
                <Col md={5} sm={12}>
                    <img src={this.props.imgUrl} className={classes.img} alt='img' />
                </Col>
            </Row>
    }
}

export default Body;