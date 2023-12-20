import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "ACCUEIL" },
  { id: 2, url: "about", text: "Nous Connaître " },
  { id: 3, url: "products", text: "Marques" },
  { id: 4, url: "cart", text: "Media" },
  { id: 5, url: "checkout", text: "Contact" },
  { id: 6, url: "orders", text: "Produits" },
];
function NavLinks() {
  return (
    <>
      {links.map(({ id, url, text }) => (
        <li key={id}>
          <NavLink className="capitalize" to={url}>
            {text}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
