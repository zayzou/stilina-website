import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <div className="grid grid-cols-2 gap-10 items-center ">
      <div className="flex flex-col gap-10">
        <h2 className="text-lg font-bold sm:text-3xl xl:text-4xl">
          Contactez-nous
        </h2>
        <p className="inline-flex items-center ">
          <FiMapPin className="mr-2 w-5 h-5" />{" "}
          <span className="text-sm">
            SARL Madani Scolaire et Bureau Usine Frikat, DEM, Tizi Ouzou,
            Algerie
          </span>
        </p>
        <p className="inline-flex items-center  ">
          <FiPhone className="mr-2 w-5 h-5" />{" "}
          <span className="text-sm">026 38 71 71 / 07 70 80 67 80</span>
        </p>
        <p className="inline-flex items-center  ">
          <FiMail className="mr-2 w-5 h-5" />{" "}
          <a href="mailto:contact.stilina.com" className="text-sm link">
            contact.stilina.com
          </a>
        </p>

        <div>
          <p className="mb-4">Suivez nous</p>
          <div className="flex gap-3">
            <a href="" class="btn rounded-3xl bg-base-100 shadow-xl">
              <FaFacebookF className="w-12 h-6" />
            </a>
            <a href="" class="btn rounded-3xl bg-base-100 shadow-xl">
              <FaInstagram className="w-12 h-6" />
            </a>

            <a href="" class="btn rounded-3xl bg-base-100 shadow-xl">
              <FaYoutube className="w-12 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Que souhaitez-vous demander ?</h2>
          <form class="">
            <label className="form-control w-full mb-5">
              <div className="label">
                <span className="label-text">Nom complet</span>
              </div>
              <input
                type="text"
                placeholder="Votre nom"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full mb-5">
              <div className="label">
                <span className="label-text">Adresse e-mail</span>
              </div>
              <input
                type="email"
                placeholder="abcd@email.com"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full mb-5">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message"
              ></textarea>
            </label>
          </form>

          <div className="card-actions justify-stretch">
            <button className="btn btn-neutral flex-auto">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
