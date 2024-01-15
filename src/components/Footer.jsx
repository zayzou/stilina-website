import { socials } from "../utils/constants";
import { FaS } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  const iconStyle = "w-6 h-6";
  const socialLink = socials(iconStyle);
  return (
    <>
      <footer className=" footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <Link to="/brands" className="link link-hover">
            Nos Marques
          </Link>
          <Link to="products" className="link link-hover">
            Produit
          </Link>
          <Link to="register" className="link link-hover">
            Devenir client
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Société</header>
          <Link to="/about" className="link link-hover">
            Nous connaître
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/media" className="link link-hover">
            News & Media
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Légal</header>
          <Link to="privacy-policy" className="link link-hover">
            Politique de confidentialité
          </Link>
          <Link to="cookies-policy" className="link link-hover">
            Politique des Cookie
          </Link>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <FaS className="w-12 h-12" />
          <p>
            Groupe MBS. <br />
            Fabrication de stylos fiables depuis 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {socialLink.map(({ id, url, icon }) => {
              return (
                <a
                  key={id}
                  href={url}
                  className="btn rounded-3xl bg-base-100 shadow-xl"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
