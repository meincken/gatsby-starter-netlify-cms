import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import GalleryRoll from "../components/GalleryRoll";

const HeroBlock = styled.div`
  background-postion: top left;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 25vh;
  margin-bottom: 20px;
  min-height: 400px;
  grid-column: span 12;
`;

const Section = styled.section`
  grid-column: 3 / span 8;

  .flex {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;

    max-width: 1100px;
    width: 100vw;
    margin: 0 auto;

    .section-block {
      margin-bottom: 40px;
      grid-column: span 6;
    }

    a {
      grid-column: span 12;
    }
  }
`;

const Blog = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  margin: 20px auto;

  h3 {
    grid-column: span 12;
  }

  header {
    display: flex;
    flex-flow: column;
  }

  article {
    grid-column: span 4;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    a {
      grid-column: span 12;
      display: block;
      margin-top: 10px;
      text-align: left;
      text-decoration: none;
    }
  }

  a {
    grid-column: span 12;
    text-align: center;
    text-decoration: none;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  margin: 20px auto;

  h3 {
    grid-column: span 12;
  }

  header {
    display: flex;
    flex-flow: column;
  }

  article {
    grid-column: span 6;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    a {
      grid-column: span 12;
      display: block;
      margin-top: 10px;
      text-align: left;
      text-decoration: none;
    }
  }

  a {
    grid-column: span 12;
    text-align: center;
    text-decoration: none;
  }
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
      <div>
        <h1>{title}</h1>
        <h3>{subheading}</h3>
      </div>
    </HeroBlock>
    <Section>
      <div className="tile">
        <h1 className="title">{mainpitch.title}</h1>
        <h3 className="subtitle">{mainpitch.description}</h3>
      </div>

      <h3>{heading}</h3>
      <p>{description}</p>
      <div className="flex">
        <Features gridItems={intro.blurbs} />

        <Link className="btn" to="/products">
          See all products
        </Link>
      </div>

      <Blog>
        <h3>Latest stories</h3>
        <BlogRoll />
        <Link className="btn" to="/gallery">
          Read more
        </Link>
      </Blog>

      <Gallery>
        <h3>Gallery</h3>
        <GalleryRoll />
        <Link className="btn" to="/gallery">
          See more
        </Link>
      </Gallery>
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
