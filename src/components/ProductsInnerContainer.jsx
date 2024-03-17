import {useLoaderData} from "react-router-dom";
import {ProductsGrid, ProductsList} from "./index.js";

function ProductsInnerContainer({layout}) {

    const {products, meta} = useLoaderData();
    const {categories} = meta
    return (
        <>
            {
                categories.map((categorie) => {
                    const prod = products.filter((p) => p.category.name === categorie);
                    {
                        if (prod.length > 0) {
                            return (
                                <div key={categorie.trim().toLowerCase()}>
                                    <div className="divider mt-10  uppercase tracking-wider font-bold">{categorie}</div>
                                    {layout == "grid" ? <ProductsGrid/> : <ProductsList/>}
                                </div>
                            )
                        }
                    }
                })
            }
        </>


    );


}

export default ProductsInnerContainer;
