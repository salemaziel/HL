import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import Header from '../components/header'

const IndexPage = () => (
  <>
  {/*<Layout>*/}
    <SEO title="Home" />
<div id="page-wrapper">
  <Header />
  {/* Header */}
{/*  <header id="header" className="alt">
    <span className="logo"><a href="index.html">Standout <span>by Pixelarity</span></a></span>
    <a href="#menu"><span>Menu</span></a>
</header> */}
  {/* Nav */}
 {/* <nav id="menu">
    <div className="inner">
      <h2>Menu</h2>
      <ul className="links">
        <li><a href="index.html">Home</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="generic.html">Generic</a></li>
        <li><a href="elements.html">Elements</a></li>
      </ul>
      <a className="close"><span>Close</span></a>
    </div>
  </nav>*/}
  {/* Banner */}
  <section id="banner">
    <div className="inner">
      <h1 style={{textShadow:"3px 3px 3px black", textAlign: 'left', textAlignLast: 'auto'}}> Do You Really Think? <br />
      <h2 style={{background: 'rgba(0,0,0,0.9)', width: 'fit-content', padding: '5px'}}>Or Are You <span style={{color: 'red'}}> Told </span> What To Think?</h2> 
      </h1>
      <div className="content">
        <p style={{textShadow:"3px 3px 3px black", fontWeight: 'bold'}}>Most Alleged "Free Thinkers" Are Anything But.</p>
        <ul className="actions special">
          <li><a href="portfolio.html" className="button large next">Our Work</a></li>
        </ul>
      </div>
    </div>
  </section>
  {/* Footer */}
  <section id="footer" className="wrapper">
    <div className="inner">
      <div className="split">
        <div className="content">
          <header>
            <h2>About</h2>
          </header>
          <p>Lorem ipsum dolor amet et donec convallis placerat varius. Phasellus sagittis, urna blanSapien lectus lorem tempus ut purus consequat. Sed veroeros et nisl urna lacinia lorem. Aenean at adipiscing lorem. Nunc risus augue, ullamcorper eget posuere.</p>
          <ul className="actions">
            <li><a href="#" className="button next">Full Story</a></li>
          </ul>
        </div>
        <ul className="contact-icons">
          <li><a href="#" className="icon brands alt fa-twitter"><span className="label">twitter.com/untitled</span></a></li>
          <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">facebook.com/untitled</span></a></li>
          <li><a href="#" className="icon brands alt fa-instagram"><span className="label">instagram.com/untitled</span></a></li>
          <li><a href="#" className="icon solid alt fa-envelope"><span className="label">contact@untitled.tld</span></a></li>
        </ul>
      </div>
    </div>
  </section>
  {/* Copyright */}
  <section className="wrapper style2 copyright">
    <div className="inner">
      © Untitled. All rights reserved. Lorem ipsum dolor sit amet.
    </div>
  </section>
</div>

{/*</Layout>*/}
</>
);

export default IndexPage;
