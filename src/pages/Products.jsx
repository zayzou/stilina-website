import {Filters, PaginationContainer, ProductContainer} from "../components";
import {customAxiosInstance} from "../utils/constants";
import {sortOptions} from "../utils/constants";

export const loader = async ({request}) => {
    const params = Object.fromEntries(
        [...new URL(request.url).searchParams.entries()]
    );
    params.sort = sortOptions.get(params.sort);
    const response = await customAxiosInstance.get("/products", {params});
    return {products: response.data.productDto, meta: response.data.meta, params};
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
