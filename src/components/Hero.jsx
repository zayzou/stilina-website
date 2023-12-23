import React from "react";
import carousel01 from "../assets/images/carousel-01.jpeg";
import carousel02 from "../assets/images/carousel-02.jpeg";
import carousel03 from "../assets/images/carousel-03.jpeg";
import carousel04 from "../assets/images/carousel-04.webp";
import carousel05 from "../assets/images/carousel-05.webp";
import carousel06 from "../assets/images/carousel-06.webp";
import carousel07 from "../assets/images/carousel-07.jpeg";
import carousel08 from "../assets/images/carousel-08.jpeg";
import { Link } from "react-router-dom";
function Hero() {
  const carouselImages = [
    carousel01,
    carousel02,
    carousel04,
    carousel05,
    carousel06,
    carousel07,
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-24 item-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Pour une meuilleur écriture.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Nos produits
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
