import React, { Component } from 'react';
import { isMobile } from "react-device-detect";
import { Row, Col } from 'react-bootstrap';

class myFooter extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    
    render(){
        return <footer className="copyright">
       
				<p style={{color:'#000', fontWeight:'lighter', marginLeft:20}}><a href="/"> <font color="#CF003C" style={{fontWeight:'bold'}}>BELMONT BEAUTY SALON</font> </a> <br /> 951 Old Country Rd. #4, Belmont, CA 94002 </p>
                <div className="col-md-12 social-footer" style={{textAlign:'right'}}>
				<div className="footer-social-links"><ul><li className="fb"><a href="https://www.facebook.com/belmontbeautysalon/"><i className="fa fa-facebook"></i></a></li><li className="insta"><a href="https://www.instagram.com/belmontbeautysalon/"><i className="fa fa-instagram"></i></a></li><li className="yelp"><a href="https://www.yelp.com/biz/belmont-beauty-salon-belmont/"><i className="fa fa-yelp"></i></a></li><li className="pint"><a href="https://www.pinterest.com/belmontbeautysalon/"><i className="fa fa-pinterest"></i></a></li></ul></div>
			</div>
            
    </footer>;
    }
}

export default myFooter;