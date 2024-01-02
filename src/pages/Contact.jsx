import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MdOutlineFax } from "react-icons/md";

import { social } from "../data/links";

function Contact() {
  const iconStyle = "w-6 h-3 md:w-12 md:h-6";
  const socialLink = social(iconStyle);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
      <div className="flex flex-col gap-10">
        <h2 className="text-lg font-bold sm:text-3xl xl:text-4xl">
          Contactez-nous
        </h2>
        <p className="inline-flex items-center ">
          <FiMapPin className="mr-2 w-5 h-5" />{" "}
          <a
            href="https://maps.app.goo.gl/C135q5oVzfv4Gp228"
            target="_blank"
            className="link text-sm"
          >
            SARL Madani Scolaire et Bureau Usine Frikat, DEM, Tizi Ouzou,
            Algerie
          </a>
        </p>
        <p className="inline-flex items-center  ">
          <FiPhone className="mr-2 w-5 h-5" />
          <span className="text-sm">
            <a href="tel:+213770806780">+213 770 80 67 80</a>
          </span>
        </p>
        <p className="inline-flex items-center  ">
          <MdOutlineFax className="mr-2 w-5 h-5" />
          <span className="text-sm">
            <a href="tel:+21326387171">+213 26 38 71 71</a>
          </span>
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
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Que souhaitez-vous demander ?</h2>
          <form>
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
