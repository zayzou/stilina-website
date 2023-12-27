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
