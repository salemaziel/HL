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
            <Nav.Link as={Link} rel="preload" className={headerStyles.SideNavLink} to="/contact">
              Contact
            </Nav.Link>
            </Nav.Item>,
          <Nav.Item>          
            <Nav.Link className={headerStyles.SideNavLink} href="https://social.headlyceum.com">
              Sign In
            </Nav.Link>
            </Nav.Item>,            
            <Nav.Item>
                <Button
                style={{
                  backgroundColor: 'white',
                  border: '1px',
                  borderColor: '#fffff!important',
                  borderRadius: '5px',
                  padding: '0 2rem',
                  color: '#fffff'
                }}
                className=""
                onClick={() => navigateTo("/")}
              >
                Sign Up
              </Button>
              </Nav.Item>
          ]}
          itemStyle={{
            backgroundColor: 'rgba(0,0,0,0.1)!important',
            color: "#fff!important",
            fontSize: "1.4rem",
            padding: "10px 0",
            textAlign: "center",
            margin: '1rem 0',
            listStyleType: 'none',
            listStyleImage: 'none',
            borderColor: 'white'
          }}
          navStyle={{ width: "50%", maxWidth: '50vw', background: 'rgba(0,0,0,0.85)', color: 'white!important', marginTop: '3rem' }}
          showNav={this.state.showNav}
          onHideNav={() =>this.setState({ showNav: false })}
          
        />
      </>
    );
  }
}
export default Header;
