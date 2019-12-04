import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <>
    {gridItems.map(item => (
      <section className="section section-block" key={item.text}>
        <div
          style={{
            width: "240px",
            display: "inline-block"
          }}
        >
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <p>{item.text}</p>
      </section>
    ))}
  </>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
