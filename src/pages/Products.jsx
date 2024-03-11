import {useLoaderData} from "react-router-dom";
import {Filters, PaginationContainer, ProductContainer} from "../components";
import {customAxiosInstance} from "../utils/constants";

export const loader = async () => {
    const response = await customAxiosInstance.get("/products/all");
    return {products: response.data.productDto, pagination: response.data.paginationDto};
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
