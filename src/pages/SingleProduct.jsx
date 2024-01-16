import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { customAxiosInstance } from "../utils/constants";
import { formatPrice } from "../utils/helpers";

export const loader = async ({ params }) => {
  const response = await customAxiosInstance.get(`/products/${params.id}`);
  return { product: response.data.data };
};
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, category, colors, company } =
    product.attributes;
  const dinarAmount = formatPrice(price);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
