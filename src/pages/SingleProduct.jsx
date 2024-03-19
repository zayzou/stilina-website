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
        packagings,
        images,
        productVariants
    } = product


    const [productRef, setProductRef] = useState(productVariants[0]?.sku);
    const [amount, setAmount] = useState(0);


    // Drift config

    useEffect(() => {

        new Drift(document.querySelector(".drift-trigger"), {
            paneContainer: document.querySelector(".details"),
            inlinePane: 769,
            inlineOffsetY: -85,
            containInline: true,
            hoverBoundingBox: true,
        });

    });

    const handlePvSelect = (sku) => {
        setProductRef(sku)
    }

    return (
        <section>
            <Breadcrumbs/>
            <div className="mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 ">
                {<ProductImages images={images} title={name}/>}
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
                            <FaCircleCheck className="text-success"/>Emballage :
                        </li>
                    </ul>

                    <Separator/>
                    <div className="mt-6" id="cart">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <h3 className="text-md font-medium tracking-wider capitalize col-span-1">
                                    Produit :
                                </h3>
                                <div className="mt-2 col-span-2">
                                    <select className="select select-bordered w-full max-w-xs"
                                            onChange={(e) => handlePvSelect(e.target.value)}>
                                        {productVariants.map((pv) => {
                                            return (
                                                <option key={pv.sku} value={pv.sku}>{pv.packaging.name}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md font-medium tracking-wider capitalize col-span-1">
                                    Emballage :
                                </h3>

                                {packagings.map((p) => {
                                    return <div key={p.id} className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">{p.name}</span>
                                            <input readOnly type="radio" name="radio-10"
                                                   className="radio checked:bg-blue-500"
                                                   checked/>
                                        </label>
                                    </div>
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
