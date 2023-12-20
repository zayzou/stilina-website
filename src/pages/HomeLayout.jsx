import { Outlet } from "react-router-dom";
import { Header } from "../components";
function HomeLayout() {
  return (
    <>
      <Header />
      <section className="align-element  py-20">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;