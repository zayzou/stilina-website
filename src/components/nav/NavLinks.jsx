import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants";

function NavLinks() {
  return (
    <>
      {links.map(({ id, url, text }) => (
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
