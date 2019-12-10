import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { GlobalStyle } from "../shared/Global";

import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import styled from "styled-components";
import { color } from "./../shared/styles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content={color.black} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
