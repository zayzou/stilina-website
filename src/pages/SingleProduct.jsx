import { Link, useLoaderData } from "react-router-dom";
import { customAxiosInstance } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { useState } from "react";
export const loader = async ({ params }) => {
  const response = await customAxiosInstance.get(`/products/${params.id}`);
  return { product: response.data.data };
};
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, category, colors, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const dinarAmount = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="products">Produits</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className=" text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dinarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h3 className="text-md font-medium tracking-wider capitalize">
              Couleurs
            </h3>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2  ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
