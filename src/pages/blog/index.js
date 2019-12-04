import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1>Latest Stories</h1>
        </div>
        <BlogRoll />
      </Layout>
    );
  }
}
