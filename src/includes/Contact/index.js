import React, { Component } from 'react';
import { isMobile } from "react-device-detect";



class ContactInclude extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4210242796053!2d-122.2778344852653!3d37.521571434460796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9f4fbf6bc1cb%3A0xb4092e6325a63013!2sBelmont+Beauty+Salon!5e0!3m2!1sen!2sin!4v1527402152212"
                    width="100%"
                    height="460"
                    style={{borderWidth:0, marginTop:isMobile ? 85 : 112,display:'block',background:'#000', border:'none', height:'70vh', width:'100%'}}>
                </iframe>
    }
}

export default ContactInclude;