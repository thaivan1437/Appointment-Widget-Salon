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
        return <Card className="myCard" style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25, marginTop: 50 }}>
            <div style={{backgroundColor:`${this.props.bgColor}`,  width:'100%', borderTopLeftRadius: 25, borderTopRightRadius: 25,}}>
                <center>
                <div className="myCardImage" style={{marginLeft:this.props.leftMargin, marginTop:10, alignSelf:'center',borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundImage:`url(${this.props.imgUrl})`, backgroundRepeat  : 'no-repeat', height:155, width:155, justifyContent:'center'}} />

                </center>
            </div>
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
        fontSize: 23
    },
    cardCol: {
        marginTop: 50,
    },
    cardImg: {

    }
}

export default Cards;