import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import GalleryRoll from "../components/GalleryRoll";
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
  grid-column: 3 / span 8;
`;

const FeaturesBlock = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);

  > section {
    grid-column: span 4;
  }

  a {
    grid-column: span 12;
    text-align: center;
  }
`;

const Blog = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);

  > .tile {
    grid-column: span 4;
  }

  > a {
    grid-column: span 12;
  }
`;

const Heading3 = styled.h3`
  grid-column: span 12;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <>
    <HeroBlock
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <HeroBlockInner>
        <h1>{title}</h1>
        <h3>{subheading}</h3>
      </HeroBlockInner>
    </HeroBlock>

    <Section>
      <div className="tile">
        <h1 className="title">{mainpitch.title}</h1>
        <h3 className="subtitle">{mainpitch.description}</h3>
      </div>

      <div className="tile">
        <Heading3>{heading}</Heading3>
        <p>{description}</p>
      </div>

      <FeaturesBlock>
        <Features gridItems={intro.blurbs} />
        <Link className="btn" to="/products">
          See all products
        </Link>
      </FeaturesBlock>

      <Blog>
        <Heading3>Latest stories</Heading3>
        <BlogRoll />
        <Link className="btn" to="/gallery">
          Read more
        </Link>
      </Blog>

      <div className="Gallery">
        <Heading3>Gallery</Heading3>
        <GalleryRoll />
        <Link className="btn" to="/gallery">
          See more
        </Link>
      </div>
    </Section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
