import { useState } from "react";

const ProductImages = ({ images, title }) => {
  const [image, setImage] = useState(images[0]);

  return (
    <section>
      <img
        src={image}
        alt={`image de produit ${title}`}
        className="h-[400px]  lg:w-full"
      />
      <div className="mt-2 grid grid-cols-5 gap-3">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              className={`w-full object-cover cursor-pointer h-[75px] border-secondary brightness-75 rounded-box ${
                image === img ? "border-2" : null
              }`}
              onClick={() => setImage(img)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
