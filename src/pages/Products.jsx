import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { customAxiosInstance } from "../utils/constants";

export const loader = async () => {
  const response = await customAxiosInstance.get("/products");

  return { products: response.data.data, meta: response.data.meta };
};
const Products = () => {
  const { products, meta } = useLoaderData();
  console.log(products);
  console.log(meta);
  return (
    <>
      <Filters />
      <ProductContainer products={products} />
      <PaginationContainer />
    </>
  );
};

export default Products;
