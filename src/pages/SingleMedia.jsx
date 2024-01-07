import { useFetchSinglePost } from "../data/cms";
import { useParams } from "react-router-dom";
import { Footer, Loading, Tag, Date } from "../components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function SingleMedia() {
  const { id } = useParams();
  const { loading, post } = useFetchSinglePost(id);
  if (loading) {
    return <Loading />;
  }
  const { title, description, tag, image, date, url, body } = post;

  return (
    <>
      <header
        className="hero w-full min-h-[60vh]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </header>
      <main className="px-4 mx-auto max-w-[85vw] lg:max-w-[75vw] mt-[-10rem] rounded-lg bg-white z-10 relative">
        <div
          className="prose prose-sm md:prose-base p-5 md:p-10"
          style={{ maxWidth: "fit-content" }}
        >
          <div className="flex justify-between mb-4">
            <Tag tag={tag} />
            <Date date={date} />
          </div>
          <div> {body && documentToReactComponents(body)}</div>
          {url && (
            <a href={url} target="_blank">
              Voir plus
            </a>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SingleMedia;
