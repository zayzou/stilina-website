import MyReveal from "../utils/MyReveal";
import { events } from "../data";
import { useFetchMedia } from "../data";
import { formatDate } from "../utils";
function Media() {
  const { loading, media } = useFetchMedia();
  console.log(loading);
  console.log(media);
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
        <div className="grid grid-cols-2 gap-9 ">
          {media.map(({ id, title, description, tag, img, date }) => {
            return (
              <a
                href="#"
                key={id}
                className="card card-side bg-base-200 shadow-xl rounded-md transition-all duration-300 ease-in-out transform hover:scale-110 "
              >
                <figure>
                  <img className="h-full w-60" src={img} alt={title} />
                </figure>
                <div className="card-body p-4">
                  <div className="flex justify-between items-center mb-5 ">
                    <div className="badge badge-success badge-outline badge-md ">
                      {tag}
                    </div>
                    <span className="text-sm">{formatDate(date)}</span>
                  </div>
                  <h2 className="card-title">{title}</h2>
                  <p className="font-light">{description}</p>
                  <div className="card-actions justify-end"></div>
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
