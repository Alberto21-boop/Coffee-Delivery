import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { Home } from "../components/Pages/Home";
import { Choice } from "../components/Pages/Home/components/Choice";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Home />
      <Choice />
      <Outlet />
    </div>
  );
}
