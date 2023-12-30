import { formatDate } from "../utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyReveal from "../utils/MyReveal";
export default function Post({ post }) {
  const { id, title, description, tag, img, date } = post;
  const [hovered, setHovered] = useState(false);
  return (
    <MyReveal>
      <Link
        to={`/media/${id}`}
        className="card  bg-base-100 shadow-xl "
        key={id}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <figure className="px-10 pt-10">
          <img
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
          <div className="badge badge-success  badge-md self-start ">{tag}</div>
          <h2 className="card-title">{title}</h2>
          <p className="text-base-content/70 font-title py-4 font-light">
            {description}
          </p>
          <div className="card-actions">
            <span className="text-sm">Le {formatDate(date)}</span>
          </div>
        </div>
      </Link>
    </MyReveal>
  );
}
