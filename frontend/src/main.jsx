//*DEP
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//*CSS
import "./main.css";
//*PAGES&COMPS
// LAYOUT COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//  --------- PAGES ---------------
import Frontpage from "./pages/Frontpage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import More from "./pages/More.jsx";
import AdminFront from "./pages/ADMIN/ADMINfront.jsx";
import AdminChange from "./pages/ADMIN/ADMINChange.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Frontpage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "More",
        element: <More />,
      },
      {
        path: "admin",
        element: <AdminFront />,
      },
      {
        path: "admin/edit",
        element: <AdminChange />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
