import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import styled from "styled-components";

const Header = styled.header`
  position: relative;
  display: flex;
  flex-flow: column;
  height: 50vh;
  min-height: 400px;

  a {
    font-size: 50px;
    font-weight: bold;
    grid-column: span 12;
    display: block;
    text-align: left;
    text-decoration: none;
    height: 100%;
    position: absolute;
    display: flex;
    width: 100%;
    text-transform: uppercase;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
  }
`;

class GalleryRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <article
              key={post.id}
              className={`tile${
                post.frontmatter.featuredpost ? " is-featured" : ""
              }`}
            >
              <Header>
                {post.frontmatter.featuredimage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.title}`
                    }}
                  />
                ) : null}
                <Link className="title" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </Header>
            </article>
          ))}
      </>
    );
  }
}

GalleryRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query GalleryRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "gallery-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <GalleryRoll data={data} count={count} />}
  />
);
