import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="app__content container">
      <Outlet />
    </main>
  );
}

export default Main;
