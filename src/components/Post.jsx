import { formatDate } from "../utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyReveal from "../utils/MyReveal";
import Tag from "./Tag";
import Date from "./Date";
export default function Post({ post }) {
  const { id, title, tag, img, date } = post;
  const [hovered, setHovered] = useState(false);
  return (
    <MyReveal>
      <Link
        to={`/media/${id}`}
        className="card card-compact bg-base-100 shadow-xl "
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
          <Tag tag={tag} />
          <h2 className="card-title">{title}</h2>
          <div className="card-actions">
            <Date date={date} />
          </div>
        </div>
      </Link>
    </MyReveal>
  );
}
