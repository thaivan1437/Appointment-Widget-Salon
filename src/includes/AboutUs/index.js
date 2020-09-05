import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Cards from "./Cards";
import cardData from "./cardData"

import classes from './AboutUs.scss'


class Permanent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return <Container className={classes.container}>
            <Row>
                <Col style={myStyle.sloganText}>"Our salon is completely remodeled and under new management"</Col>
            </Row>
            <Row>
            {
                cardData.map((item,index) => {
                    return <Cards key={index} body={item.body} imgUrl={item.imgUrl} bgColor={item.bgColor} leftMargin={item.leftMargin} />
                })
            }
            </Row>
        </Container>
    }
}

const myStyle = {
    sloganText: {
        marginTop:70,
        fontSize:30,
        color: '#1D3557',
        fontWeight: 'bold',
        textAlign:'center'
    }
}

export default Permanent;