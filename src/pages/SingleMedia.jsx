import { useFetchSinglePost } from "../data";
import { Footer, Loading, Tag } from "../components";
function SingleMedia() {
  const id = "3WXJRw35SaHO7utFx21yph";
  const { loading, post } = useFetchSinglePost(id);
  if (loading) {
    return <Loading />;
  }
  console.log(post);
  const { title, description, tag, image, date } = post;

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
          <div>
            <h1>Stilina sous les projecteurs de l'ENTV</h1>
            <p>
              Nous sommes ravis d'annoncer que Stilina a récemment été présentée
              sur la chaîne de télévision nationale ENTV. Cet événement marque
              une étape significative pour notre entreprise, offrant une
              visibilité nationale à nos produits innovants. L'interview a mis
              en lumière notre engagement envers la qualité et l'innovation,
              soulignant notre impact croissant dans l'industrie. Nous sommes
              reconnaissants envers l'équipe de l'ENTV pour cette opportunité
              exceptionnelle. C'est une validation de nos efforts constants pour
              offrir des solutions exceptionnelles. Nous attendons avec
              impatience de continuer à servir notre communauté avec passion et
              détermination. Merci à tous nos clients et partenaires pour leur
              soutien continu.
            </p>
            <p>{description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SingleMedia;
