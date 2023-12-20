import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Stilina</span>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
