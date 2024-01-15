// Used In landing page
import { Link } from "react-router-dom";
import Reveal from "../../utils/Reveal";
function Media() {
  return (
    <section className="pt-12">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <Reveal>
          <div className="font-light sm:text-lg">
            <h2 className="font-title mx-auto text-[clamp(1.5rem,6vw,3rem)] font-black  [&::selection]:text-base-content relative col-start-1 row-start-1 leading-tight motion-reduce:!opacity-100 [&::selection]:bg-blue-700/20 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
              <span>News & Media</span>
            </h2>
            <p className="mb-4">
              Restez informé(e) sur nos derniers lancements de produits
              innovants, nos collaborations passionnantes . Plongez dans notre
              aventure et joignez-vous à nous pour célébrer les étapes
              importantes, les réalisations et les récits dynamiques qui
              façonnent l'essence de Stilina.
            </p>
            <Link
              to="/media"
              className="btn md:btn-wide btn-primary rounded-3xl"
            >
              Voir tout
            </Link>
          </div>
        </Reveal>
        <Reveal direction="x">
          <div className="grid grid-cols-1 gap-4 mt-8">
            <iframe
              className=" rounded-xl w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/le2CM3NrP-M?si=Wf7SlylrRedZT8dD"
              title="Stilina "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Media;
