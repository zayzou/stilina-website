import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import produit1 from "../assets/images/carousel-06.webp";
import produit2 from "../assets/images/carousel-07.jpeg";
import produit3 from "../assets/images/carousel-04.webp";
function ProductsGrid() {
  const produits = [
    {
      id: 1,
      title: "Stilina Stylos Stilor",
      image: produit1,
      price: 42400,
    },
    {
      id: 2,
      title: "Rapporteur 40cm T. Blanc",
      image: produit2,
      price: 4400,
    },
    {
      id: 3,
      title: "Kangaro Agrafeuses ",
      image: produit3,
      price: 8900,
    },
  ];
  // const { products } = useLoaderData();
  // console.log(products);
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {produits.map(({ id, title, image, price }) => {
        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{formatPrice(price)}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
