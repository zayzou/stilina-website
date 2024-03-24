import {useLoaderData} from "react-router-dom";
import {customAxiosInstance} from "../utils/constants";
import {useEffect} from "react";
import ProductImages from "../components/ProductImages";
import {Breadcrumbs, ProductsGrid, Separator} from "../components";
import Drift from "drift-zoom";
import {FaCircleCheck} from "react-icons/fa6";
import PackagingListItem from "../components/PackagingListItem.jsx";

//Single product loader
export const loader = async ({params}) => {
    const response = await customAxiosInstance.get(`/products/${params.id}`);
    const product = response.data;
    const response2 = await customAxiosInstance.get(`/products?page=1&size=3&search=&category=${product.category.name}`);
    const similar = response2.data.productDto
    return {product: product, products: similar};
};


const SingleProduct = () => {
    const {product} = useLoaderData();
    const {
        name,
        description,
        brand,
        category,
        packagings,
        images,
        productVariants
    } = product


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
    return (
        <section>
            <Breadcrumbs/>
            <div className="mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 ">
                {<ProductImages images={images} title={name}/>}
                <div className="details ">
                    <div tabIndex={1} className="collapse collapse-open">
                        <div
                            className="collapse-title font-title text-lg font-black [text-wrap:balance]
                            sm:text-3xl xl:text-5xl">
                            <h2>{name}</h2>
                        </div>
                        <div
                            className="collapse-content prose prose-sm prose-li:my-0 prose-ul:leading-none
                             prose-li:leading-normal prose-p:my-2 prose-ul:my-2 text-xs ">
                            <h4 className="font-title font-bold text-2xl">{brand.name}</h4>
                            <h5 className="">{category.name}</h5>
                            <h6 className="text-md font-medium tracking-wider capitalize">
                                Code article : <span className=" text-base">#####</span>
                            </h6>
                            <h3 className="text-md font-medium tracking-wider capitalize">
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
                                    <FaCircleCheck className="text-success" style={{marginTop: "inherit"}}/>
                                    Couleurs :
                                    <div className="badge mb-auto" style={{backgroundColor: "red"}}></div>
                                    <div className="badge mb-auto" style={{backgroundColor: "blue"}}></div>
                                    <div className="badge mb-auto" style={{backgroundColor: "green"}}></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Separator/>
                </div>
                <div className="col-span-2 grid  md:grid-cols-3 md:gap-x-4 lg:gap-x-8">
                    <div className="divider col-span-3 text-2xl uppercase font-bold">Détails</div>
                    <div tabIndex={0}
                         className="col-span-3 collapse collapse-open  border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Emballages
                        </div>
                        <div className="collapse-content">
                            <div className="grid grid-cols-3 gap-4">
                                {packagings.map((p) => {
                                    return <ul key={p.id}
                                               className="max-w-md">
                                        <PackagingListItem name={p.name}/>
                                    </ul>
                                })}
                            </div>
                            <div className="divider divider-start">Sous Emballage:</div>
                            <div className="grid grid-cols-3 gap-4">
                                {productVariants.map((pv) => {
                                    return (
                                        <ul key={pv.sku}
                                            className="max-w-md ">
                                            <PackagingListItem name={pv.packaging.name} sku={pv.sku}/>
                                        </ul>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider col-span-3 text-2xl uppercase font-bold">Vous aimerez aussi</div>
                <div className="col-span-3">
                    <ProductsGrid/>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
