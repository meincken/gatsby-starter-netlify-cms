import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Section = styled.section`
  grid-column: 3 / span 12;
  padding: 30px 0;
`;

const NotFoundPage = () => (
  <Layout>
    <Section>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
);

export default NotFoundPage;
