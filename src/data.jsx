import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";
import { nanoid } from "@reduxjs/toolkit";

import produit1 from "./assets/images/carousel-06.webp";
import produit2 from "./assets/images/carousel-07.jpeg";
import produit3 from "./assets/images/carousel-04.webp";

import stilina from "./assets/images/carousel-06.webp";
import mizanpap from "./assets/images/carousel-07.jpeg";
import kangaro from "./assets/images/carousel-04.webp";

import mizanpapLogo from "./assets/images/mizanpap.png";
import stilinaLogo from "./assets/images/stilina.png";
import kangaroLogo from "./assets/images/kangaro.png";

import media01 from "./assets/images/media01.jpeg";
import event01 from "./assets/images/event-1.jpeg";

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

export const brands = [
  {
    id: nanoid(),
    name: "MSB Stilina",
    title: "Production article scolaire",
    image: stilina,
    logo: stilinaLogo,
    description: `  <p>Serivces:</p>
    <ul>
      <li>
        <p>Production de stylo 🖊️</p>
      </li>
      <li>
        <p>Production de cousse 📐</p>
      </li>
      <li>
        <p>Production de 3ajina 🧁</p>
      </li>
    </ul>
    <p>Aussi:</p>
    <ul>
      <li>
        <p>Logistique et relation clients</p>
      </li>
      <li>
        <p>
          En fais ça aussi
        </p>
      </li>
      <li>
        <p>Et surtout ça 😃</p>
      </li>
    </ul>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Impedit ducimus eum dolorum dolorem vero obcaecati illum
      repellat animi, molestiae id?
    </p>`,
  },
  {
    id: nanoid(),
    name: "MSB Mizan Pap",
    title: "Vente articles scolaire",
    image: mizanpap,
    logo: mizanpapLogo,
    description: ` <p>Serivces:</p>
    <ul>
      <li>
        <p>Vente de stylo</p>
      </li>
      <li>
        <p>Vente de midwar</p>
      </li>
      <li>
        <p>Vente de couras </p>
      </li>
    </ul>
    <p>Aussi:</p>
    <ul>
      <li>
        <p>Mizan Pap </p>
      </li>
      <li>
        <p>
          Premier magasin en afrique de nord d'aprés le magasine Jeune afrique
        </p>
      </li>
      <li>
        <p>Livraison surtout le teretoire national</p>
      </li>
    </ul>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Impedit ducimus eum dolorum dolorem vero obcaecati illum
      repellat animi, molestiae id?
    </p>`,
  },
  {
    id: nanoid(),
    name: "Kangaro",
    title: "Partenaire ",
    image: kangaro,
    logo: kangaroLogo,
    description: `  <p>Serivces:</p>
    <ul>
      <li>
        <p>Production de stylo</p>
      </li>
      <li>
        <p>Production de midwar</p>
      </li>
      <li>
        <p><a  target="_blank" className="link link-info" href="https://kgocglobal.com/brands">visitez nous 🤗</a></p>
      </li>
    </ul>
    <p>Including:</p>
    <ul>
      <li>
        <p>Plus de 10 million de clients </p>
      </li>
      <li>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Impedit ducimus eum dolorum dolorem vero obcaecati illum 🔎
        </p>
      </li>
      <li>
        <p>Yes we did it ✅</p>
      </li>
    </ul>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Impedit ducimus eum dolorum dolorem vero obcaecati illum
      repellat animi, molestiae id
    </p>`,
  },
];

export const events = [
  {
    id: nanoid(),
    title: "Kohe at 19th Annual Chef Awards",
    description: "",
    tag: "media",
    image: event01,
    date: "depuis 02 mois",
  },
  {
    id: nanoid(),
    title: "Djazagro 2023",
    tag: "exposition",
    description: " Participation de stilina à Djazagro 2023",
    image: media01,
    date: "depuis 14 jours",
  },
];
