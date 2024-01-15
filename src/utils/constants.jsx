import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";
import axios from "axios";
export const socials = (style) => {
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

export const links = [
  { id: 1, url: "/", text: "acceuil" },
  { id: 2, url: "about", text: "Nous Connaître " },
  { id: 3, url: "brands", text: "Marques" },
  { id: 4, url: "media", text: "Media" },
  { id: 5, url: "contact", text: "Contact" },
  { id: 6, url: "orders", text: "Produits" },
];

export const product_url = "https://strapi-store-server.onrender.com/api";

export const customAxiosInstance = axios.create({
  baseURL: product_url,
});
