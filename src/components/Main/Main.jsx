import { Outlet } from "react-router";

function Main() {
  return (
    <main className="pt-14 md:pt-32">
      <Outlet />
    </main>
  );
}

export default Main;
