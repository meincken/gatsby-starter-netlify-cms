import React from "react";
import styled from "styled-components";

import Layout from "../../components/Layout";
import GalleryRoll from "../../components/GalleryRoll";

const Hero = styled.div`
  grid-column: span 12;
`;

const Section = styled.section`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;

  article {
    grid-column: span 12;
  }
`;

export default class GalleryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1>Latest Galleries</h1>
        </Hero>
        <Section>
          <GalleryRoll />
        </Section>
      </Layout>
    );
  }
}
