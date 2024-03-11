import {Filters, PaginationContainer, ProductContainer} from "../components";
import {customAxiosInstance} from "../utils/constants";

export const loader = async ({request}) => {
    console.log(request)

    const params = Object.fromEntries(
        [...new URL(request.url).searchParams.entries()]
    );

    if (params.sort === "a-z") {
        params.sort = "name,asc";
    }
    if (params.sort === "z-a") {
        params.sort = "name,desc";
    }
    if (params.sort === "Ajouté récemment") {
        params.sort = "createdAt,desc";
    }

    console.log(params)
    const response = await customAxiosInstance.get("/products", {params});
    return {products: response.data.productDto, meta: response.data.meta};
};
const Products = () => {
    return (
        <>
            <Filters/>
            <ProductContainer/>
            <PaginationContainer/>
        </>
    );
};

export default Products;
