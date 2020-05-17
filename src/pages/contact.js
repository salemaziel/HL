import React from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactPage from '../components/PageComponents/ContactPage/ContactPage'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section id="contact" />
    <ContactPage />

  </Layout>
);

export default Contact
