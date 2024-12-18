import { Outlet } from "react-router";

function Main() {
  return (
    <main className="pt-16 md:pt-40">
      <Outlet />
    </main>
  );
}

export default Main;
