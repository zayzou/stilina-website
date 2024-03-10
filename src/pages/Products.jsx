import {useLoaderData} from "react-router-dom";
import {Filters, PaginationContainer, ProductContainer} from "../components";
import {customAxiosInstance} from "../utils/constants";

export const loader = async () => {
    const response = await customAxiosInstance.get("/products/all");
    // console.log(response.data)
    return {products: response.data.productDto,pagination:response.data.paginationDto};
};
const Products = () => {
    const {products,pagination} = useLoaderData();
    console.log(pagination)
    return (
        <>
            <Filters/>
            <ProductContainer products={products}/>
            <PaginationContainer/>
        </>
    );
};

export default Products;
