import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import LoginContextProvider from "./context/LoginContext";

//*CSS
import "./main.css";

//*PAGES&COMPS
// LAYOUT COMPONENTS
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer";
import PageNotFound from "./components/PageNotFound.jsx";
//  --------- PAGES ---------------
import Frontpage from "./pages/Frontpage.jsx";
import Spaceship from "./pages/Spaceship.jsx";
import Travels from "./pages/Travels.jsx";
//travel subpages
import TravelsSub1 from "./pages/TravelsSubpages/TravelsSubMoon.jsx";
import TravelsSub2 from "./pages/TravelsSubpages/TravelsSubMars.jsx";
import Gallery from "./pages/Gallery.jsx";
import Safety from "./pages/Safety.jsx";
import Contact from "./pages/Contact.jsx";
//LOGIN
import LoginPage from "./pages/ADMIN/LoginPage.jsx";
//*ADMIN
import AdminNavbar from "./components/ADMIN/ADMINNavbar.jsx";

import AdminFront from "./pages/ADMIN/ADMINFront.jsx";
import AdminSpaceship from "./pages/ADMIN/ADMINSpaceship.jsx";
import AdminTure from "./pages/ADMIN/ADMINTravels.jsx";
import AdminKontakt from "./pages/ADMIN/ADMINContact.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function AdminApp() {
  const { user } = useContext(LoginContext);

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="flex flex-col">
      <AdminNavbar />
      <main className="min-h-screen bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-700">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFound />,
    element: <App />,
    children: [
      { index: true, element: <Frontpage /> },
      { path: "rumfaergen", element: <Spaceship /> },
      { path: "ture", element: <Travels /> },
      { path: "ture/mars", element: <TravelsSub2 /> },
      { path: "ture/månen", element: <TravelsSub1 /> },
      { path: "galleri", element: <Gallery /> },
      { path: "sikkerhed", element: <Safety /> },
      { path: "kontakt", element: <Contact /> },
      //Login
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminApp />,
    children: [
      { index: true, element: <AdminFront /> },
      { path: "rumfaergen", element: <AdminSpaceship /> },
      { path: "ture", element: <AdminTure /> },
      { path: "kontakt", element: <AdminKontakt /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <RouterProvider router={router} />
    </LoginContextProvider>
  </React.StrictMode>,
);
