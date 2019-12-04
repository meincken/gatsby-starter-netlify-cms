import React, { Component } from "react";
import styled from "styled-components";

var social = [
  {
    name: "twitter",
    url: "http://twitter.com/meincken",
    className: "twitter"
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/meincken/",
    className: "linkedin"
  },
  {
    name: "instagram",
    url: "http://instagram.com/meincken",
    className: "instagram"
  },
  {
    name: "strava",
    url: "https://www.strava.com/athletes/meincken",
    className: "strava"
  },
  {
    name: "github",
    url: "http://github.com/meincken",
    className: "github"
  }
];

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    margin: 0 10px;

    svg {
      max-width: 20px;
      height: auto;
    }
  }
`;

const SocialBlock = ({ social }) => (
  <>
    {social.map(network => (
      <a key={network.name} href={network.url}>
        {network.className}
      </a>
    ))}
  </>
);

class Social extends Component {
  render() {
    return (
      <>
        <SocialLinks>
          <SocialBlock social={social} />
        </SocialLinks>
      </>
    );
  }
}

export default Social;
