import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";

class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        // return  <Col style={myStyle.cardCol}>
            return <Card className="myCard" style={{borderTopLeftRadius:25, borderTopRightRadius:25, marginTop:50}}>
                <Card.Img className="myCardImage" style={{borderTopRightRadius:25, borderTopLeftRadius:25}} variant="top" src={this.props.imgUrl} />
                <Card.Body style={myStyle.cardBody}>
                {this.props.body}
                </Card.Body>
            </Card>
        // </Col>
    }
}

const myStyle = {
    cardBody: {
        color: '#1D3557',
        // fontWeight: 'bold',
        textAlign:'center',
        fontSize:14
    },
    cardCol: {
        marginTop:50,
    },
    cardImg: {
        
    }
}

export default Cards;