import {Filters, PaginationContainer, ProductContainer} from "../components";
import {customAxiosInstance} from "../utils/constants";

export const loader = async () => {
    const response = await customAxiosInstance.get("/products/all");
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
