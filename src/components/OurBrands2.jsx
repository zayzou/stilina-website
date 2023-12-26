import { SectionTitle } from ".";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import mizanpap from "../assets/images/mizanpap.png";
import stilina from "../assets/images/stilina.png";
import kangaro from "../assets/images/kangaro.png";
function OurBrands() {
  const produits = [
    {
      id: 1,
      title: "Stilina",
      image: stilina,
      price: 42400,
    },
    {
      id: 2,
      title: "Mizan Pap",
      image: mizanpap,
      price: 4400,
    },
    {
      id: 3,
      title: "Billgo",
      image: kangaro,
      price: 8900,
    },
  ];
  return (
    <div className="pt-24">
      <div className="bg-base-200 p-12 rounded-lg">
        <SectionTitle text="Nos marques" align="text-center" />
        <div className="pt-12 grid gap-4 md:grid-cols-2">
          <div className="card w-full card-compact">
            <div className="card-body">
              <h2 className="card-title tracking-wider ">
                Un univers adapté à chaque besoin
              </h2>
              <p className="text-base-content/80 mx-auto max-w-lg font-sans text-lg font-light">
                Découvrez la diversité de nos marques renommées, symboles de
                fiabilité et de performance. Chacune incarne l'engagement de
                Stilina à fournir des solutions exceptionnelles, tant pour les
                besoins scolaires que professionnels. Plongez dans l'excellence
                des marques Stilina et choisissez l'excellence au quotidien.
              </p>
              <div className="mt-4 card-actions justify-start">
                <Link
                  to="/brands"
                  className="btn btn-wide btn-secondary rounded-3xl"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 justify-center">
            <img
              className="self-center mask mask-circle w-24 h-24 bg-white shadow-2xl"
              src={kangaro}
            />
            <img
              className="self-center mask mask-circle w-24 h-24 bg-white shadow-2xl"
              src={stilina}
            />
            <img
              className="self-center mask mask-circle w-24 h-24 bg-white shadow-lg"
              src={mizanpap}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBrands;
