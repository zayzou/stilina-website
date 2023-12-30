import MyReveal from "../utils/MyReveal";
import { useFetchMedia } from "../data";
import Post from "../components/Post";

function Media() {
  const { loading, media } = useFetchMedia();

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

      <div className="grid grid-cols-2  gap-4">
        {media.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}

export default Media;
