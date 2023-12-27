import { SectionTitle } from ".";
import { Link } from "react-router-dom";
import { brands } from "../data";
import MyReveal from "../utils/MyReveal";
function OurBrands() {
  return (
    <MyReveal>
      <div className="pt-24">
        <div className="bg-base-200 p-12 rounded-lg">
          <SectionTitle text="Nos marques" align="text-center" />
          <div className="pt-12 grid gap-4 md:grid-cols-2">
            <div className="card w-full card-compact">
              <div className="card-body">
                <h2 className="card-title tracking-wider ">
                  Un univers adapté à chaque besoin
                </h2>
                <p className="text-base-content/80 mx-auto max-w-lg font-sans text-lg font-light text-justify">
                  Découvrez la diversité de nos marques renommées, symboles de
                  fiabilité et de performance. Chacune incarne l'engagement de
                  Stilina à fournir des solutions exceptionnelles, tant pour les
                  besoins scolaires que professionnels. Plongez dans
                  l'excellence des marques Stilina et choisissez l'excellence au
                  quotidien.
                </p>
                <div className="mt-4 card-actions justify-start">
                  <Link
                    to="/brands"
                    className="btn md:btn-wide btn-secondary rounded-3xl"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center">
              {brands.map(({ id, logo }) => {
                return (
                  <img
                    key={id}
                    className="self-center mask mask-circle w-12 h-12 md:w-24 md:h-24 bg-white shadow-2xl"
                    src={logo}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MyReveal>
  );
}

export default OurBrands;
