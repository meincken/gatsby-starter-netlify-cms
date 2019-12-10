import React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import styled from "styled-components";

const HeroBlock = styled.header`
  background-size: cover;
  background-position: center;
  grid-column: span 12;
  height: 100vh;
`;

const HeroBlockInner = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Section = styled.section`
  display: grid;
  grid-column: 3 / span 8;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);

  > article.tile {
    grid-column: span 1;
  }
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HeroBlock
          className="hero"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <HeroBlockInner>
            <h1>Latest Stories</h1>
          </HeroBlockInner>
        </HeroBlock>
        <Section>
          <BlogRoll />
        </Section>
      </Layout>
    );
  }
}
