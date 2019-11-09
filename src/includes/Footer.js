import React, { Component } from 'react';
import { Container, Row, Col} from "react-bootstrap";

class myFooter extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render(){
        return <footer className="copyright">
    <Row style={{marginLeft:50}}>
			<Col>
            <div class="col-md-8">
				<p style={{color:'#000', fontWeight:'lighter'}}><a href="https://belmontbeautysalon.com"> <font color="#CF003C" style={{fontWeight:'bold'}}>BELMONT BEAUTY SALON</font> </a> &nbsp; 951 Old County Rd. Ste 4, Belmont, CA 94002 </p>
			</div>
            </Col>
            </Row>
    </footer>;
    }
}

export default myFooter;