import React, { Component } from 'react';
import { Navbar, Nav, Image } from "react-bootstrap";
import menuDatas from './menu'
import { Animated } from "react-animated-css";
import { CDN_URL } from "../env";

class NavBar extends Component {
  state = {
    isTop: true,
  };
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  onMouseOver = (index) => {
    this.setState({ focus: true, activeIndex: index })
  }
  onMouseOut = () => {
    this.setState({ focus: false })
  }
  render() {
    return <div id="header">
      <Navbar className={this.state.isTop ? "navbar navbar-fixed-top" : "navbar navbar-fixed-top scrolled"} fixed="top" expand="lg">
        {/* <Navbar className={"navbar navbar-fixed-top scrolled"}> */}
        <Navbar.Brand className='navbar-brand' href="/">
          <Image src={CDN_URL + "site/logo.png"} style={{ width: 250 }} className='logo-brand ml-sm-5 img-fluid' />
        </Navbar.Brand>
        <Navbar.Toggle style={{ border: 0 }}>
          <img src="https://cdn.belmontbeautysalon.net/site/navbar-toggler-icon.png" height="20" width="20" alt="" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar" className="navbar-collapse collapse">
          <Nav id="top-menu" className="nav navbar-nav navbar-right">
            {
              menuDatas.map((item, index) => {
                return <Nav.Link
                  key={index}
                  href={item.route}
                  target={item.target}
                  style={{ marginTop: 10, flexDirection: 'row' }}
                  onMouseOver={() => { this.onMouseOver(index) }}
                  onMouseOut={this.onMouseOut}
                >
                  {item.title}
                  <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={this.state.focus}>
                    <div style={{ width: "100%", height: 2, backgroundColor: index === this.state.activeIndex ? '#CF003C' : 'transparent' }} />
                  </Animated>
                </Nav.Link>
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  }
}

export default NavBar;