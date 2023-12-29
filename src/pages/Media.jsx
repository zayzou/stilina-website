import MyReveal from "../utils/MyReveal";

import { useFetchMedia } from "../data";
import { formatDate } from "../utils";
import { useRef, useState } from "react";

function Media() {
  const { loading, media } = useFetchMedia();
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <MyReveal>
        <div className="flex flex-col items-center gap-6">
          <h1 className="capitalize font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">
            News <span className="text-success">& Media</span>
          </h1>
          <p className="text-base-content/60 text-xs italic">
            Latest from MSB Groupe
          </p>
        </div>
      </MyReveal>
      <div className="flex flex-col gap-4 py-10"></div>
      <MyReveal>
        <div
          className="grid grid-cols-2  gap-4"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {media.map(({ id, title, description, tag, img, date }) => {
            return (
              <a
                href={`/media/${id}`}
                className="card  bg-base-100 shadow-xl "
                key={id}
              >
                <figure className="px-10 pt-10">
                  <img
                    ref={ref}
                    src={img}
                    alt={title}
                    className="rounded-xl h-[250px] w-full"
                    style={{
                      width: hovered ? "90% !important" : "85% !important",
                      rotate: hovered ? "2deg" : "0deg",
                      transition: "0.5s all",
                    }}
                  />
                </figure>
                <div className="card-body  ">
                  <div className="badge badge-success  badge-md self-start ">
                    {tag}
                  </div>
                  <h2 className="card-title">{title}</h2>
                  <p className="text-base-content/70 font-title py-4 font-light">
                    {description}
                  </p>
                  <div className="card-actions">
                    <span className="text-sm">Le {formatDate(date)}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </MyReveal>
    </>
  );
}

export default Media;
