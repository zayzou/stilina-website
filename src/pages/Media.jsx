import MyReveal from "../utils/MyReveal";
import { useFetchMedia } from "../data/cms";
import Post from "../components/Post";
import Loading from "../components/Loading";

function Media() {
  const { loading, media } = useFetchMedia();

  if (loading) {
    return <Loading />;
  }
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
      <div className="flex flex-col gap-4 py-2 md:py-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {media.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}

export default Media;
