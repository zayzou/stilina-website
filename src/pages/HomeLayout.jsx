import { Outlet } from "react-router-dom";
import { Header, Navbar, Footer } from "../components";
function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default HomeLayout;
