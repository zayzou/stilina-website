import { BsArrowRight } from "react-icons/bs";
import Lottie from "lottie-react";
import animationData from "../assets/animation02.json";
import pen from "../assets/images/pen.png";
import history from "../assets/images/history.jpeg";
import exportation from "../assets/images/exportation.jpeg";
import production from "../assets/images/production.jpeg";
import retail from "../assets/images/retail.jpeg";
import international from "../assets/images/international.jpeg";
import MyReveal from "../utils/MyReveal";
import Reveal from "../utils/MyReveal";
const About = () => {
  const services = [
    {
      id: 1,
      title: "Production",
      image: production,
      description:
        "STILINA est spécialisée dans la production d'articles scolaires. Nous nous approvisionnons auprès de fournisseurs de matériaux de qualité afin de garantir l'excellence de nos produits.",
    },
    {
      id: 2,
      title: "Exportation",
      image: exportation,
      description:
        "STILINA a commencé à exporter dès l’année 2007. Depuis, l’entreprise a étendu sa présence dans sept pays, et ses produits sont en cours d’enregistrement dans de nombreux autres.",
    },
    {
      id: 3,
      title: "Présence nationale",
      image: retail,
      description:
        "Afin de mieux nous rapprocher de nos clients et du marché en général, nous avons créé un magasin de vente en gros en papetrie, bureautique et informatique,	 sis à notre chef lieu de Daira de Draa-El-Mizan.",
    },
    {
      id: 4,
      title: "Présence International",
      image: international,
      description:
        "STILINA se distingue en tant que représentant exclusif de plusieurs marques mondiales de renom, garantissant ainsi l'accès à des produits de qualité exceptionnelle",
    },
  ];

  return (
    <div className="grid grid-rows-1 gap-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 min-h-[75vh]">
        <Lottie
          className="bg-neutral mask mask-squircle hidden lg:block"
          animationData={animationData}
        />

        <div className="align-element py-20">
          <MyReveal>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
              Notre mission
            </h1>
          </MyReveal>
          <Reveal>
            <p className="mt-8 max-w-xl text-lg leading-8 text-justify	">
              La <strong>Sarl Madani Scolaire et Bureau</strong>, créée en 2012
              suite à la restructuration de la{" "}
              <strong>Sarl Groupe Madani et Chikh</strong>, perpétue l'héritage
              d'une entreprise emblématique dans le domaine de la production
              d'articles scolaires et de stylos à bille. Depuis sa création en
              1992 jusqu'à sa dissolution en 2012, la <strong>GMC</strong>,
              connue pour sa marque, a occupé une place de premier plan sur le
              marché. La <strong>Sarl Madani Scolaire et Bureau</strong>, créée
              en 2012 suite à la restructuration de la{" "}
              <strong>Sarl Groupe Madani et Chikh</strong>, perpétue l'héritage
              d'une entreprise emblématique dans le domaine de la production
              d'articles scolaires et de stylos à bille. Depuis sa création en
              1992 jusqu'à sa dissolution en 2012, la <strong>GMC</strong>,
              connue pour sa marque, a occupé une place de premier plan sur le
              marché.
            </p>
          </Reveal>
          <a href="#valeurs" className="mt-4 btn btn-neutral ">
            Nos valeurs
            <BsArrowRight />
          </a>
        </div>
      </div>
      <div
        className="scroll-mt-16 rounded-3xl min-h-[55vh] grid gap-2"
        id="valeurs"
      >
        <div className="card lg:card-side">
          <Reveal>
            <div className="card-body basis-3/4 grid gap-2 font-title text-center text-[clamp(2rem,8vw,4rem)] font-black leading-none xl:text-start">
              <h4>Innovation</h4>
              <h4 className="bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text will-change-auto [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] motion-reduce:!tracking-normal max-[1279px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                Qualité assurée
              </h4>
              <h4 className="">Relation</h4>
            </div>
          </Reveal>
          <Reveal>
            <figure>
              <img src={pen} alt="" className="bg-neutral rounded-s-3xl " />
            </figure>
          </Reveal>
        </div>
        <div className="flex w-full justify-center xl:justify-start m-2">
          <a href="#histoire" className="btn btn-lg btn-wide group">
            Notre histoire
            <BsArrowRight />
          </a>
        </div>
      </div>
      <Reveal>
        <div
          className="scroll-mt-12 min-h-[100vh] bg-base-200 rounded-xl"
          id="histoire"
        >
          <div className="card lg:card-side">
            <figure className="basis-1/4">
              <img className="grayscale" src={history} alt="history" />
            </figure>
            <div className="card-body basis-3/4">
              <h2 className="card-title">Notre histoire</h2>
              <p>
                C'est en 1992 que Stilina a émergé, issue de la restructuration
                de la Sarl Madani Scolaire et Bureau. Portant l'héritage du
                Groupe Madani et Chikh, elle s'est affirmée comme un leader dans
                la production de stylos à bille classiques et d'articles
                scolaires. Avec la renommée de la GMC, Stilina a étendu son
                impact en important des produits de marques distinguées. Servant
                plus de 300 clients à travers le pays, elle garantit une qualité
                exceptionnelle pendant 12 mois. Toujours à l'écoute, Stilina a
                ouvert un magasin de vente en gros, réaffirmant son dévouement
                envers la satisfaction client.
              </p>
            </div>
          </div>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
            <li>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">1992</time>
                <div className="text-lg font-black">
                  Création de la GMC (Groupe Madani et Chikh)
                </div>
                La GMC, spécialisée dans la production d'articles scolaires et
                de stylos à bille, est fondée en 1992.
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
                  Restructuration et Création de la Sarl Madani Scolaire et
                  Bureau
                </div>
                La Sarl Madani Scolaire et Bureau est créée en 2012 à la suite
                de la restructuration de la GMC.
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
                La nouvelle entreprise maintient l'héritage de la GMC et
                continue à être classée parmi les moyennes entreprises. Elle
                reste spécialisée dans la production intégrée de stylos à bille
                du type courant.
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
                  Restructuration et Création de la Sarl Madani Scolaire et
                  Bureau
                </div>
                La Sarl Madani Scolaire et Bureau est créée en 2012 à la suite
                de la restructuration de la GMC.
              </div>
            </li>
          </ul>
          <div className="flex w-full xl:justify-end p-4 ">
            <a href="#services" className="mt-4 btn btn-neutral ">
              Nos activités
              <BsArrowRight />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="scroll-mt-12 min-h-[100vh]" id="services">
          <div className="card lg:card-side rounded-none p-0">
            <div className="card-body pl-0">
              <h2 className="card-title">Nos activités</h2>
              <p>
                Découvrez comment nous façonnons l'excellence en tant que
                représentant exclusif de marques mondiales, offrant des produits
                de qualité supérieure.
              </p>
            </div>
          </div>
          <div className="carousel carousel-center rounded-box rounded-l-none">
            {services.map(({ id, title, image, description }) => {
              return (
                <div className="carousel-item " key={id}>
                  <figure className="relative max-w-sm ">
                    <img
                      className="min-h-[100%] w-[20rem]  bg-white/30 transition-all duration-300 cursor-pointer brightness-50 filter hover:brightness-100"
                      src={image}
                      alt={title}
                    />
                    <figcaption className="absolute px-4 text-md text-white top-6">
                      <h1 className="font-title text-4xl text-center  font-black leading-none xl:text-start mb-4">
                        {title}
                      </h1>
                      <p>{description}</p>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
export default About;
