import React, { useEffect } from "react";
import Drift from "drift-zoom";

import imgSrc from "../assets/images/carousel-01.jpeg";

const Products = () => {
  useEffect(() => {
    new Drift(document.querySelector(".drift-demo-trigger"), {
      // Settings
      paneContainer: document.querySelector("#details-container"),
      inlinePane: 769,
      inlineOffsetY: -85,
      containInline: true,
      hoverBoundingBox: true,
    });
  });
  return (
    <div>
      <div id="thumbnail-container">
        <img className="drift-demo-trigger" data-zoom={imgSrc} src={imgSrc} />
      </div>
      <div id="details-container" style={{ position: "relative" }}></div>
    </div>
  );
};

export default Products;
