import React from "react";
import Layout from "../../components/Layout";
import GalleryRoll from "../../components/GalleryRoll";

export default class GalleryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="hero"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1>Latest Galleries</h1>
        </div>
        <section>
          <GalleryRoll />
        </section>
      </Layout>
    );
  }
}
