import {useState} from "react";

const ProductImages = ({images, title}) => {
    const [image, setImage] = useState(images[0]);

    return (
        <section className="">
            <img
                src={image.url}
                data-zoom={image.url}
                alt={`image de produit ${title}`}
                className="h-[400px]  lg:w-full drift-trigger"
            />
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4  gap-3">
                {images.map(({url, key}) => {
                    return (
                        <img
                            key={key}
                            src={url}
                            className={`w-full object-cover cursor-pointer h-[75px] border-secondary brightness-75 rounded-box ${
                                image === url ? "border-2" : null
                            }`}
                            onClick={() => setImage(url)}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ProductImages;
