import {NavLink} from "react-router-dom";
import {links} from "../../utils/constants";

function NavLinks() {
    return (
        <>
            {links.map(({id, url, text, sub_menus}) => (
                <li key={id}>
                    {sub_menus ?
                        <details>
                            <summary
                                className="capitalize px-5 py-3 text-sm tracking-wider rounded-full hover:shadow-2xl">
                                Produits
                            </summary>
                            <ul>
                                <li className="capitalize">
                                    <NavLink to={url}>Tout les produits</NavLink>
                                </li>
                                {sub_menus.map((menu) => <li className="capitalize" key={menu}>
                                    <NavLink to={`${url}?brand=${menu.toUpperCase()}`}>{menu}</NavLink>
                                </li>)}
                            </ul>
                        </details> :
                        <NavLink
                            className="capitalize px-5 py-3 text-sm tracking-wider rounded-full hover:shadow-2xl "
                            to={url}>
                            {text}
                        </NavLink>}

                </li>
            ))}
        </>
    );
}

export default NavLinks;
