import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Header() {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="flex-col gap-10 align-element flex justify-center sm:justify-end sm:flex-row">
        {/* LINKS */}
        <div className="flex gap-x-6 justify-center items-center">
          <a href="" className="btn btn-square btn-xs">
            <FaYoutube />
          </a>
          <a href="" className="btn btn-square btn-xs">
            <FaFacebookF />
          </a>
          <a href="" className="btn btn-square btn-xs">
            <FaInstagram />
          </a>
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
