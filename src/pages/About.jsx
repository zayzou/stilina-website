import { BsArrowRight } from "react-icons/bs";
import Lottie from "lottie-react";
import animationData from "../assets/animation02.json";
import pen from "../assets/images/pen.png";
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
          <a href="#valeurs" className="mt-4 btn btn-neutral ">
            Nos valeurs
            <BsArrowRight />
          </a>
        </div>
      </div>

      <div
        className="scroll-mt-16 bg-base-300 shadow-xl rounded-3xl min-h-[55vh] grid gap-2"
        id="valeurs"
      >
        <div className="card lg:card-side">
          <div className="card-body basis-3/4 grid gap-2 font-title text-center text-[clamp(2rem,8vw,4rem)] font-black leading-none xl:text-start">
            <h4>Innovation</h4>
            <h4 className="bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text will-change-auto [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] motion-reduce:!tracking-normal max-[1279px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
              Qualité assurée
            </h4>
            <h4 className="">Relation</h4>
          </div>
          <figure>
            <img src={pen} alt="" className="bg-neutral rounded-s-3xl " />
          </figure>
        </div>
        <div className="flex w-full justify-center xl:justify-start m-2">
          <a href="#histoire" className="btn btn-lg btn-wide group">
            Notre histoire
            <BsArrowRight />
          </a>
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
        </ul>
      </div>
    </div>
  );
};
export default About;
