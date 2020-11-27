import React, { Component } from 'react';

class myFooter extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return <footer className="copyright">
            <p
                style={{
                    color: '#000',
                    fontWeight: 'lighter',
                    // marginLeft: 20,
                    textAlign: 'center'
                }}>
                    <font color="#CF003C"
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>
                        BELMONT BEAUTY SALON
                    </font>
                <br />
                <span style={{ fontSize: 15 }}>
                    <a href="/contact" style={{...myStyle.myLink, fontWeight:500, fontSize:18}}>951 Old Country Rd. #4, Belmont, CA 94002</a> &nbsp;- &nbsp;
                </span>
                
                <span style={{ fontSize: 15 }}>
                <b><a id="tel-number" href="tel:(650) 595-2800" style={{...myStyle.myLink,fontWeight:'bold', fontSize:18}}>(650) 595-2800</a></b>
                </span>
            </p>
            <div className="col-md-12 social-footer" style={{ textAlign: 'right' }}>
                <div className="footer-social-links"><ul><li className="fb"><a href="https://www.facebook.com/belmontbeautysalon/"><i className="fa fa-facebook"></i></a></li><li className="insta"><a href="https://www.instagram.com/belmontbeautysalon/"><i className="fa fa-instagram"></i></a></li><li className="yelp"><a href="https://www.yelp.com/biz/belmont-beauty-salon-belmont/"><i className="fa fa-yelp"></i></a></li><li className="pint"><a href="https://www.pinterest.com/belmontbeautysalon/"><i className="fa fa-pinterest"></i></a></li></ul></div>
            </div>
        </footer>;
    }
}

const myStyle = {

    myLink:{
        textDecoration:'none', 
        color:'#000'
    }

};

export default myFooter;