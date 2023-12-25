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
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {produits.map(({ id, title, image, price }) => {
            return (
              <div
                key={id}
                to={`/products/${id}`}
                className="card card-compact w-full shadow-0 rounded-none"
              >
                <figure className="h-16 md:h-20">
                  <img
                    src={image}
                    alt={title}
                    className="object-contain h-16 md:h-20 w-full"
                  />
                </figure>
                <div className="card-body">
                  <p className="text-justify text-base-content/70 font-title font-light md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo recusandae quisquam deserunt at commodi rem
                    doloremque assumenda est in consequuntur.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-center xl:justify-end m-2">
          <Link to="/brands" className="btn btn-neutral group">
            En savoire plus
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurBrands;
