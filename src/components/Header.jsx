import { Link } from "react-router-dom";
import { social } from "../data/links";
//I removed bg-neutral
function Header() {
  const iconStyle = "";
  const socialLink = social(iconStyle);
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="flex-col gap-10 align-element flex justify-center sm:justify-end sm:flex-row">
        {/* LINKS */}
        <div className="flex gap-x-6 justify-center items-center">
          {socialLink.map(({ id, url, icon }) => {
            return (
              <a key={id} href={url} className="btn btn-square btn-xs">
                {icon}
              </a>
            );
          })}
        </div>

        {/* USER */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xm sm:text-sm">
            Login
          </Link>
          <Link to="/register" className="link link-hover text-xm sm:text-sm">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
