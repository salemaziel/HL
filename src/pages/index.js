import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import HomePage from '../components/PageComponents/Home/HomePage'
//import Header from '../components/header'
import '../assets/css/styles.css'
const Index = () => (
    <Layout>
            <SEO title="Home" />

        <HomePage />


    </Layout>
)

export default Index