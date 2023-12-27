import { Link } from "react-router-dom";
import media01 from "../assets/images/media01.jpeg";
import event01 from "../assets/images/event-1.jpeg";
import { nanoid } from "@reduxjs/toolkit";
import { FaArrowRight } from "react-icons/fa6";

function Media() {
  const brands = [
    {
      id: nanoid(),
      title: "Kohe at 19th Annual Chef Awards",
      description: "",
      tag: "media",
      image: event01,
      date: "depuis 02 mois",
    },
    {
      id: nanoid(),
      title: "Djazagro 2023",
      tag: "exposition",
      description: " Participation de stilina à Djazagro 2023",
      image: media01,
      date: "depuis 14 jours",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <h1 className="capitalize font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">
          News <span className="text-success">& Media</span>
        </h1>
        <p className="text-base-content/60 text-xs italic">
          Latest from MSB Groupe
        </p>
      </div>
      <div className="flex flex-col gap-4 py-10"></div>
      <div className="grid grid-cols-2 gap-9 ">
        {brands.map(({ id, title, description, tag, image, date }) => {
          return (
            <article
              key={id}
              className="card card-side bg-base-200 shadow-xl rounded-md"
            >
              <figure>
                <img className="h-full w-60" src={image} alt={title} />
              </figure>
              <div className="card-body p-4">
                <div class="flex justify-between items-center mb-5 ">
                  <div class="badge badge-success badge-outline badge-md ">
                    {tag}
                  </div>
                  <span class="text-sm">{date}</span>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="font-light">{description}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`media/${id}`}
                    className="inline-flex items-center  font-medium link link-neutral-content link-hover"
                  >
                    Lire <FaArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Media;
