import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var social = [
  {
    name: "twitter",
    url: "http://twitter.com/meincken"
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/meincken/"
  },
  {
    name: "instagram",
    url: "http://instagram.com/meincken"
  },
  {
    name: "strava",
    url: "https://www.strava.com/athletes/meincken"
  },
  {
    name: "github",
    url: "http://github.com/meincken"
  }
];

const SocialBlock = ({ social }) => (
  <>
    {social.map(network => (
      <a
        key={network.name}
        href={network.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", network.name]} size="2x" />
      </a>
    ))}
  </>
);

class Social extends Component {
  render() {
    return (
      <>
        <div className="SocialLinks">
          <SocialBlock social={social} />
        </div>
      </>
    );
  }
}

export default Social;
