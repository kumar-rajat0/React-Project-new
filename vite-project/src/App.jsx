import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";


const Header = React.lazy(() => import("./components/Header"));

export default function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Header />
      </Suspense>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}
