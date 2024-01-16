import { useState } from "react";

const ProductImages = ({ images, image, title }) => {
  const [img, setImage] = useState(images[0]);
  return (
    <section>
      <img
        src={img}
        alt={`image de produit ${title}`}
        className="w-96 h-[96] object-cover lg:w-full"
      />
      <div className="mt-2 grid grid-cols-5 gap-3">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              className="w-full cursor-pointer h-[100px] active:border-2 border-secondary brightness-75"
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
