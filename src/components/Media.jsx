import event01 from "../assets/images/event-1.jpeg";
import event02 from "../assets/images/event-2.jpeg";
import event03 from "../assets/images/event-3.jpeg";
import event04 from "../assets/images/event-4.jpg";
import event05 from "../assets/images/event-5.jpeg";
import event06 from "../assets/images/event-6.jpg";

function Media() {
  return (
    <div className="pt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={event01} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={event04} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={event06} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10">
        <h2 className="font-title mx-auto text-[clamp(1.5rem,6vw,3rem)] font-black leading-none">
          <span className="opacity-100">News </span>
          <span className=" opacity-50">& Media</span>
        </h2>
        <p className="text-base-content/70 font-title  mx-auto max-w-3xl  font-light md:text-2xl">
          Explorez les derniers événements et les mises à jour remarquables dans
          l'univers de Stilina grâce à notre section Actualités et Médias.
          Restez informé(e) sur nos derniers lancements de produits innovants,
          nos collaborations passionnantes et nos analyses sectorielles. Des
          communiqués de presse aux récits captivants, c'est votre source
          incontournable pour tout ce qui concerne Stilina. Plongez dans notre
          aventure et joignez-vous à nous pour célébrer les étapes importantes,
          les réalisations et les récits dynamiques qui façonnent l'essence de
          Stilina.
        </p>
        <div className="">
          <img className="h-auto max-w-full rounded-lg" src={event05} alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={event06} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={event01} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Media;
