import {useState} from "react";

const ProductImages = ({images, title}) => {
    const [image, setImage] = useState(images[0] ? images[0] : null);
    images[0] = {"url": "https://picsum.photos/200/300"}
    images[1] = {"url": "https://picsum.photos/200/300"}
    images[2] = {"url": "https://picsum.photos/200/300"}
    images[3] = {"url": "https://picsum.photos/200/300"}
    return (
        <section className="">
            <img
                src={image?.url ? image.url : "https://picsum.photos/200/300"}
                data-zoom={image?.url ? image.url : "https://picsum.photos/200/300"}
                alt={`image de produit ${title}`}
                className="h-[400px]  lg:w-full drift-trigger"
            />
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4  gap-3">
                {images.map(({url, key},_index) => {
                    return (
                        <img
                            key={_index}
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
