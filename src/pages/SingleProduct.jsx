import {useLoaderData} from "react-router-dom";
import {customAxiosInstance} from "../utils/constants";
import {useEffect, useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";
import ProductImages from "../components/ProductImages";
import {Breadcrumbs, Separator} from "../components";
import Drift from "drift-zoom";
import {FaCircleCheck} from "react-icons/fa6";

//Single product loader
export const loader = async ({params}) => {
    const response = await customAxiosInstance.get(`/products/${params.id}`);
    return {product: response.data};
};

const SingleProduct = () => {
    const {product} = useLoaderData();
    console.log(product)
    const {
        name,
        description,
        brand,
        category,
        packaging,
        images,
        productVariants
    } = product
    const [productColor, setProductColor] = useState(productVariants[0]?.color);
    const [productRef, setProductRef] = useState(productVariants[0]?.sku);
    const [amount, setAmount] = useState(0);


    // Drift config

    useEffect(() => {
        if (images.length > 0) {
            new Drift(document.querySelector(".drift-trigger"), {
                paneContainer: document.querySelector(".details"),
                inlinePane: 769,
                inlineOffsetY: -85,
                containInline: true,
                hoverBoundingBox: true,
            });
        }
    });

    const handlePvSelect = ({color,sku}) => {
        setProductColor(color)
        setProductRef(sku)
    }

    return (
        <section>
            <Breadcrumbs/>
            <div className="mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 ">
                {images.length > 0 && <ProductImages images={images} title={name}/>}
                <div className="details prose prose-sm md:prose-base">
                    <h1 className="m-0 md:m-0">{name} de {brand.name}</h1>
                    <h2 className="mt-2 md:mt-2">{category.name}</h2>
                    <h3 className="text-md font-medium tracking-wider capitalize ">
                        Code article : <span className=" text-base">{productRef}</span>
                    </h3>
                    <h3 className="text-md font-medium tracking-wider capitalize ">
                        Description :
                    </h3>
                    <p>
                        {description}
                    </p>
                    <ul>
                        <li className="flex items-center gap-2">
                            <FaCircleCheck className="text-success"/>Marque : {brand.name}
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCircleCheck className="text-success"/>Famille: {category.name}
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCircleCheck className="text-success"/>Emballage : {packaging.name}
                        </li>
                    </ul>

                    <Separator/>
                    <div className="mt-6" id="cart">
                        <div>
                            <h3 className="text-md font-medium tracking-wider capitalize col-span-1">
                                Couleur du corps :
                            </h3>
                            <div className="mt-2 col-span-2">
                                {productVariants.map((pv) => {
                                    return (
                                        <button
                                            key={pv.sku}
                                            type="button"
                                            className={`badge w-8 h-8 mr-4  ${
                                                pv.color === productColor && "border-2 border-accent"
                                            }`}
                                            style={{backgroundColor: pv.color}}
                                            onClick={() => handlePvSelect(pv)}
                                        ></button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex items-center mt-10 gap-4">
                            <div className="join rounded-box border-2 ">
                                <button
                                    className="btn btn-ghost join-item hover:bg-transparent"
                                    onClick={() => amount > 0 && setAmount(amount - 1)}
                                >
                                    <FaMinus/>
                                </button>
                                <input
                                    type="text"
                                    className="join-item text-3xl w-16 text-center bg-transparent"
                                    value={amount}
                                    readOnly
                                />

                                <button
                                    className="btn btn-ghost join-item hover:bg-transparent"
                                    onClick={() => setAmount(amount + 1)}
                                >
                                    <FaPlus/>
                                </button>
                            </div>
                            <button
                                className="btn btn-primary btn-md"
                                onClick={() => console.log(amount)}
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default SingleProduct;
