import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Purchase } from "./Pages/Purchase";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/Purchase" element={<Purchase />} />
    </Routes>
  );
}
