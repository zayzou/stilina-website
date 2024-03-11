import { SlMagnifierAdd } from "react-icons/sl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Reveal from "../utils/Reveal";
import { useFetchBrands } from "../data/cms";

function Brands() {
  const { brands } = useFetchBrands();

  return (
    <>
      <Reveal>
        <div className="flex flex-col items-center gap-6">
          <h1 className="capitalize font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">
            Nos <span className="opacity-50">marques</span>
          </h1>
          <p className="text-base-content/60 text-xs italic">
            Choisissez-nous pour opter pour l'innovation, la qualité et la haute
            précision.
          </p>
        </div>
      </Reveal>
      <div className="flex flex-col gap-4  py-2 md:py-8"></div>
      <div className="flex flex-col gap-5 lg:gap-12 ">
        {brands.map(({ name, img, description, title, id, details }) => {
          return (
            <div key={id}>
              <Reveal>
                <div className="rounded-box relative grid grid-cols-5 gap-10  py-2 md:py-8">
                  <div className="col-span-5 row-start-2 flex flex-col gap-8 xl:col-span-2 xl:row-start-1">
                    <div>
                      {name === "MSB Stilina" && (
                        <span className="badge badge-success badge-outline badge-sm italic">
                          Best Seller
                        </span>
                      )}
                      <h2 className="text-lg font-black sm:text-3xl xl:text-4xl">
                        {name}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="text-secondary text-2xl font-light xl:text-4xl">
                          {title}
                        </span>
                      </div>
                    </div>
                    <div className="prose prose-sm md:prose-md prose-li:my-0 prose-ul:leading-none prose-li:leading-normal prose-p:my-2 prose-ul:my-2 text-md [text-wrap:balance]">
                      {" "}
                      {details && documentToReactComponents(details)}
                    </div>
                  </div>
                  <div className="col-span-5 row-start-1 flex flex-col gap-6 xl:col-span-3 rounded-box">
                    <a
                      target="_blank"
                      href={img}
                      rel="noopener noreferrer"
                      className="rounded-box group relative block aspect-[4/3] overflow-hidden object-cover"
                    >
                      <div className="absolute inset-0 z-[1] grid place-content-center opacity-0 transition-all  bg-black/50 duration-500 group-hover:scale-150 group-hover:opacity-100">
                        <SlMagnifierAdd className="h-8 w-8 text-white" />
                      </div>
                      <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        className="bg-base-300 aspect-[4/3] w-full bg-cover bg-center object-cover"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
              <div className="divider text-base-content/30"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Brands;
