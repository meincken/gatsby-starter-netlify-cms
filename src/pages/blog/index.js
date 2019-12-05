import React from "react";
import styled from "styled-components";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const Hero = styled.div`
  grid-column: span 12;
`;

const Section = styled.section`
  grid-column: 3 / span 8;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;

  article {
    grid-column: span 4;

    a {
      display: block;
    }
  }
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1>Latest Stories</h1>
        </Hero>
        <Section>
          <BlogRoll />
        </Section>
      </Layout>
    );
  }
}
