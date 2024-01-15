import carousel01 from "../../assets/images/carousel-01.jpeg";
import carousel02 from "../../assets/images/carousel-02.jpeg";
import carousel04 from "../../assets/images/carousel-04.webp";
import carousel05 from "../../assets/images/carousel-05.webp";
import carousel06 from "../../assets/images/carousel-06.webp";
import carousel07 from "../../assets/images/carousel-07.jpeg";
import { Link } from "react-router-dom";
import Reveal from "../../utils/Reveal";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 item-center">
      <div className="mb-2 mt-4">
        <Reveal>
          <div className="badge badge-outline text-xs">
            Plus de 2600m d'écriture.
          </div>

          <h1 className="max-w-2xl text-4xl font-black tracking-tight sm:text-6xl uppercase">
            Pour une{" "}
            <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
              meuilleur
            </span>{" "}
            écriture.
          </h1>
        </Reveal>
        <p className="mt-8 max-w-xl text-base-content/70 font-title  font-light md:text-lg xl:text-2xl">
          La qualité de nos produits et notre engagement a constament renforcer
          notre position de leader sur le marché.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-secondary rounded-3xl">
            Découvrer nos produits
          </Link>
        </div>
      </div>
      <Reveal direction="x">
        <div className="h-[12rem] lg:h-[28rem] carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
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
      </Reveal>
    </div>
  );
}

export default Hero;
