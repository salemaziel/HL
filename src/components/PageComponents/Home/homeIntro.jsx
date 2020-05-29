import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import introStyles from './home.module.css'

const HomeIntro = () => (
  <section id="intro" className={introStyles.wrapper}>
    <div className={introStyles.inner}>
        <div className="content">
            <header>
                <h2>At The Same Time, </h2>
                <h3 style={{textTransform: 'uppercase'}}>
                 professional philosophers, academics, and thinkers have failed us.</h3>
            </header>
            <p>
                
            </p>
        </div>
    </div>
  </section>
);

export default HomeIntro;
