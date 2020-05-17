import React from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutPage from '../components/PageComponents/AboutPage/AboutPage'

const About = () => (
  <Layout>
    <SEO title="About" />
    <section id="about" />
    <AboutPage />


  </Layout>
);

export default About;
