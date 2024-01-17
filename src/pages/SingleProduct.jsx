import { useLoaderData } from "react-router-dom";
import { customAxiosInstance } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductImages from "../components/ProductImages";
import { images } from "../data/cms";
import { Breadcrumbs, Separator } from "../components";
import Drift from "drift-zoom";
import { FaCircleCheck } from "react-icons/fa6";

//Single product loader
export const loader = async ({ params }) => {
  const response = await customAxiosInstance.get(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, category, colors, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(0);
  const dinarAmount = formatPrice(price);

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
      <Breadcrumbs />

      <div className="mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 ">
        <ProductImages images={images} image={image} title={title} />
        <div className="details prose prose-sm md:prose-base">
          <h1 className="m-0 md:m-0">Stilor de Stilina</h1>
          <h2 className="mt-2 md:mt-2">Stylo bille - Pointe moyenne</h2>
          <h3 className="text-md font-medium tracking-wider capitalize ">
            Code article : <span className=" text-base">4902505552212</span>
          </h3>
          <h3 className="text-md font-medium tracking-wider capitalize ">
            Description :
          </h3>
          <p>
            Stylos à Bille Encre Couleur Standard. Corps Opaque Recharge Pointe
            Dorée Stylos à Bille Encre Couleur Standard. Corps Opaque Recharge
            Pointe Dorée
          </p>
          <ul>
            <li className="flex items-center gap-2">
              <FaCircleCheck className="text-success" /> En stock, livraison
              sous 2 à 3 jours ouvrés
            </li>
            <li className="flex items-center gap-2">
              <FaCircleCheck className="text-success" /> Livraison offerte.
            </li>
          </ul>

          <Separator />
          <div className="mt-6" id="cart">
            <div>
              <h3 className="text-md font-medium tracking-wider capitalize col-span-1">
                Couleur du corps :
              </h3>
              <div className="mt-2 col-span-2">
                {colors.map((color) => {
                  return (
                    <button
                      key={color}
                      type="button"
                      className={`badge w-8 h-8 mr-4  ${
                        color === productColor && "border-2 border-accent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center mt-10 gap-4">
              <div className="join rounded-box border-2 ">
                <button
                  className="btn btn-ghost join-item hover:bg-transparent"
                  onClick={() => amount > 0 && setAmount(amount - 1)}
                >
                  <FaMinus />
                </button>
                <input
                  type="text"
                  className="join-item text-3xl w-16 text-center bg-transparent"
                  value={amount}
                  readOnly
                />

                <button
                  className="btn btn-ghost join-item hover:bg-transparent"
                  onClick={() => setAmount(amount + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="btn btn-primary btn-md"
                onClick={() => console.log(amount)}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
