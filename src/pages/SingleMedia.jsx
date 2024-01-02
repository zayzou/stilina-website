import { useFetchSinglePost } from "../data";
import { Footer, Loading, Tag } from "../components";
function SingleMedia() {
  const id = "3WXJRw35SaHO7utFx21yph";
  const { loading, post } = useFetchSinglePost(id);
  if (loading) {
    return <Loading />;
  }
  console.log(post);
  const { title, description, tag, image, date, url } = post;

  const imgSrc = image?.fields?.file?.url;

  return (
    <>
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "auto",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="capitalize font-title text-white text-3xl font-extrabold lg:text-5xl ">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <main className="px-4 mx-auto max-w-screen-xl mt-[-10rem] rounded-lg bg-white">
        <div
          className="prose prose-sm md:prose-base p-10"
          style={{ maxWidth: "fit-content" }}
        >
          <Tag tag={tag} />
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
          <a href={url} target="_blank">
            Voir plus
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SingleMedia;
