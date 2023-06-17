import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Purchase } from "./Pages/Purchase";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { OrderConfirmed } from "./Pages/Home/components/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/Purchase" element={<Purchase />} />
      <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
    </Routes>
  );
}
