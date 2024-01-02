import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";

/**
 * Export social icons function
 * the function takes a tailwind css rules to style the icon
 * and return an array of social icon objects
 */
export const social = (style) => {
  return [
    {
      id: 1,
      url: "https://www.twitter.com",
      icon: <FaFacebookF className={style} />,
    },
    {
      id: 2,
      url: "https://www.twitter.com",
      icon: <FaYoutube className={style} />,
    },
    {
      id: 3,
      url: "https://www.twitter.com",
      icon: <FaInstagram className={style} />,
    },
  ];
};

export const menuLinks = [
  { id: 1, url: "/", text: "ACCUEIL" },
  { id: 2, url: "about", text: "Nous Connaître " },
  { id: 3, url: "brands", text: "Marques" },
  { id: 4, url: "media", text: "Media" },
  { id: 5, url: "contact", text: "Contact" },
  { id: 6, url: "orders", text: "Produits" },
];
//temp use local product
import produit1 from "../assets/images/carousel-06.webp";
import produit2 from "../assets/images/carousel-07.jpeg";
import produit3 from "../assets/images/carousel-04.webp";
export const products = [
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
