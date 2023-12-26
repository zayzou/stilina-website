import React from "react";
import { FaFacebookF, FaInstagram, FaS, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className=" footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Nos Marques</a>
          <a className="link link-hover">Produit</a>
          <a className="link link-hover">Devenir client</a>
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
          <a className="link link-hover">Politique de confidentialité</a>
          <a className="link link-hover">Politique des Cookie</a>
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
            <a href="">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
