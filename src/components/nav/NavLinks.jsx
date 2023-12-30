import { NavLink } from "react-router-dom";
import { menuLinks } from "../../data";

function NavLinks() {
  return (
    <>
      {menuLinks.map(({ id, url, text }) => (
        <li key={id}>
          <NavLink
            className="capitalize px-5 py-3 text-sm tracking-wider  rounded-full hover:shadow-2xl "
            to={url}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
