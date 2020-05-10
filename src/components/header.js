import React from "react";
import SideNav from 'react-simple-sidenav'
import { Link, navigateTo } from 'gatsby'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import headerStyles from './header.module.css'

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    };
  }
  render() {
    return (
      <>
        <header id="header" className="alt">
          <span className="logo">
            <a href="/">
             DeepChats <span> by HeadLyceum</span>
            </a>
          </span>
          <div id="#menu"
          onClick={() => this.setState({ showNav: true })}
          >
            <span>Menu</span>
          </div>
        </header>
        <SideNav
          openFromRight={true}
          title={
            <div style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                height: 'auto'
            }}>
             {/* <Link>
                <img src={LogoLG} width="100%" alt='' />
             </Link>*/}
            </div>
          }
          titleStyle={{
            background: "inherit",
            backgroundColor: "transparent",
            color: "black",
            width: "200px",
            margin: "auto",
          }}
          items={[
              <Nav.Item>
            <Nav.Link as={Link} rel="preload" className={headerStyles.SideNavLink} to="/">
              Home
            </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
            <Nav.Link as={Link} rel="preload" className={headerStyles.SideNavLink}  to="/about">
              About
            </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
            <Nav.Link as={Link} rel="preload" className={headerStyles.SideNavLink} to="/">
            Topics
          </Nav.Link>
          </Nav.Item>,  
          <Nav.Item>          
            <Nav.Link as={Link} rel="preload" className={headerStyles.SideNavLink} to="/">
              Contact
            </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
                <Button
                className=""
                onClick={() => navigateTo("/")}
              >
                Sign Up
              </Button>
              </Nav.Item>
          ]}
          itemStyle={{
            background: 'inherit',
            backgroundColor: 'none',
            color: "#fff!important",
            fontSize: "1.4rem",
            padding: "10px 0",
            textAlign: "center",
            margin: '1rem auto',
            listStyleType: 'none',
            listStyleImage: 'none',
          }}
          navStyle={{ width: "30vw", maxWidth: '50vw', background: 'rgba(0,0,0,0.85)', color: 'white!important' }}
          showNav={this.state.showNav}
          onHideNav={() =>this.setState({ showNav: false })}
          
        />
      </>
    );
  }
}
export default Header;
