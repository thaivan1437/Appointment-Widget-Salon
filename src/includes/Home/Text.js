import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Covid19 from './Covid19';

class Text extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return  <Container>
                    <Covid19 />
                    <Row style={{ marginTop: 60, marginBottom:50, fontSize:23 }}>
                        <Col>
                            Belmont Beauty Salon is dedicated to providing you with professional, relaxing and excellent services in an environment that is sparkling with freshness and where the ambiance creates a relaxing & soothing sensation for every customer who walks through our doors.
                            Looking for top hair & color services? Belmont Beauty Salon offers high-quality haircuts for both adults and kids from highly trained, professional stylists at affordable prices. No matter if you want a quick haircut, a whole new look, or a new twist on your usual hairstyle, we can transform your hair the way your want.
                            <br /> <br />
                            Feel empowered with elegantly and stylishly fashionable nails done by professionals at Belmont Beauty Salon. No need to look at your friend’s nails in envy. Perfect your nails with a cleaning treatment and a new coat of polish from our salon.
                            We welcome walk-ins any day of the week. For a fair and reasonable price, you can enjoy a day filled with R&R (Rest and Relaxation) at our professional salon.
                            We are specialized in Haircut & Color, Kids Haircut, Manicure & Pedicure, Waxing, Facial, Threading, <a href="/permanent-cosmetics#MICROBLADING">Microblading Eyebrows</a>, <a href="/permanent-cosmetics#OMBRE">Ombré Powder Eyebrows</a>, <a href="/permanent-cosmetics#MAKEUP">Permanent Makeup Eyebrows</a>, <a href="/permanent-cosmetics#LIPS">Lips</a> & <a href="/permanent-cosmetics#EYELINERS">Eyeliners</a> services.
                            <br /> <br />
                            <b>NEW! Say Hello To Microblading</b> <br />
                            <b>A Natural Semi-permanent Brow Treatment That Looks Like Real Hair </b><br />
                            With Microblading eyebrow procedure, your eyebrows will look absolutely natural and beautiful as you were in your twenties!<br />
                            <b>Book your appointment today! please call us at (650) 595-2800</b>
                            <br/> <br />
                            Belmont Beauty Salon offers a wide variety of payment options, including payment by major credit cards.
                            <br /><br />
                            Our salon has a wheelchair accessible entrance. Belmont Beauty Salon also provides easy access to an adjacent lot in the rear. We offer perks like free Wi-Fi, hot & cold beverages and candies!
                            <br /><br />
                            We are open all year round, except on July 4th, Labor Day, Thanksgiving, Christmas and New Year Day.
                            <br /><br />
                            <b>Business Hours</b><br />
                            <span><b>Mon: </b> Closed</span><br />
                            <span><b>Tue - Fri: </b> 10:00 AM – 7:00 PM</span><br />
                            <span><b>Sat - Sun: </b> 10:00 AM – 6:00 PM</span><br />
                            <br />
                            <b>Need a last-minute beauty treatment? Please call us at (650) 595-2800</b>
                        </Col>
                    </Row>
                </Container>
    }
}

export default Text;