import { BsArrowRight } from "react-icons/bs";
import Lottie from "lottie-react";
import animationData from "../assets/animation02.json";
const About = () => {
  return (
    <div className="grid grid-rows-1 gap-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 min-h-[75vh]">
        <Lottie
          className="bg-neutral mask mask-squircle hidden lg:block"
          animationData={animationData}
        />
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
            Notre mission
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-justify	">
            La <strong>Sarl Madani Scolaire et Bureau</strong>, créée en 2012
            suite à la restructuration de la{" "}
            <strong>Sarl Groupe Madani et Chikh</strong>, perpétue l'héritage
            d'une entreprise emblématique dans le domaine de la production
            d'articles scolaires et de stylos à bille. Depuis sa création en
            1992 jusqu'à sa dissolution en 2012, la <strong>GMC</strong>, connue
            pour sa marque, a occupé une place de premier plan sur le marché. La{" "}
            <strong>Sarl Madani Scolaire et Bureau</strong>, créée en 2012 suite
            à la restructuration de la{" "}
            <strong>Sarl Groupe Madani et Chikh</strong>, perpétue l'héritage
            d'une entreprise emblématique dans le domaine de la production
            d'articles scolaires et de stylos à bille. Depuis sa création en
            1992 jusqu'à sa dissolution en 2012, la <strong>GMC</strong>, connue
            pour sa marque, a occupé une place de premier plan sur le marché.
          </p>
          <a href="#histoire" className="mt-4 btn btn-neutral ">
            Notre histoire
            <BsArrowRight />
          </a>
        </div>
      </div>

      <div
        className="card lg:card-side bg-base-300 shadow-xl min-h-[75vh] w-100"
        id="valeurs"
      >
        <figure className="h-[100]">
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>

      <div className="scroll-mt-12" id="histoire">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">1992</time>
              <div className="text-lg font-black">
                Création de la GMC (Groupe Madani et Chikh)
              </div>
              La GMC, spécialisée dans la production d'articles scolaires et de
              stylos à bille, est fondée en 1992.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2012</time>
              <div className="text-lg font-black">
                Restructuration et Création de la Sarl Madani Scolaire et Bureau
              </div>
              La Sarl Madani Scolaire et Bureau est créée en 2012 à la suite de
              la restructuration de la GMC.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">
                Maintien de l'Héritage et Positionnement sur le Marché
              </div>
              La nouvelle entreprise maintient l'héritage de la GMC et continue
              à être classée parmi les moyennes entreprises. Elle reste
              spécialisée dans la production intégrée de stylos à bille du type
              courant.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2007</time>
              <div className="text-lg font-black">iPhone</div>
              iPhone is a line of smartphones produced by Apple Inc. that use
              Apple's own iOS mobile operating system. The first-generation
              iPhone was announced by then-Apple CEO Steve Jobs on January 9,
              2007. Since then, Apple has annually released new iPhone models
              and iOS updates. As of November 1, 2018, more than 2.2 billion
              iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
              of global smartphone market share
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2017</time>
              <div className="text-lg font-black">
                Proximité avec les Clients
              </div>
              réation d'un magasin de vente en gros en papeterie, bureautique et
              informatique à Draa-El-Mizan, chef-lieu de Daira, pour mieux
              servir les clients et être plus proche du marché.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
