import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";

const Section = styled.section`
  grid-column: 3 / span 12;
`;

export const GalleryPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const GalleryPostContent = contentComponent || Content;

  return (
    <Section>
      {helmet || ""}
      <h1>{title}</h1>
      <p>{description}</p>
      <GalleryPostContent content={content} />
    </Section>
  );
};

GalleryPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  flickrgallery: propTypes.string
};

const GalleryPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GalleryPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Gallery">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

GalleryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default GalleryPost;

export const pageQuery = graphql`
  query GalleryPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        flickrgallery
      }
    }
  }
`;
