import React, { useEffect } from "react";
import Drift from "drift-zoom";

import imgSrc from "../assets/images/carousel-01.jpeg";

const Products = () => {
  useEffect(() => {
    new Drift(document.querySelector(".drift-demo-trigger"), {
      // paneContainer: document.querySelector(".details"),
      inlinePane: true,
      zoomFactor: 6,
    });
  });
  return (
    <div>
      <div className="columns">
        <div className="column">
          <div className="thumbnail-container">
            <img
              className="drift-demo-trigger"
              data-zoom="https://awik.io/demo/webshop-zoom/shoe-large.jpg"
              src="https://awik.io/demo/webshop-zoom/shoe-small.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
