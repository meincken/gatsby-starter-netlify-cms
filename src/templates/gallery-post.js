import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const GalleryPostTemplate = ({
  content,
  contentComponent,
  flickrgallery,
  description,
  title,
  helmet
}) => {
  const GalleryPostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ""}
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{flickrgallery}</p>
      <GalleryPostContent content={content} />
    </section>
  );
};

GalleryPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  flickrgallery: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const GalleryPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GalleryPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        flickrgallery={post.frontmatter.flickrgallery}
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
        flickrgallery
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
