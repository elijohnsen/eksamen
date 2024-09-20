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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound.jsx";
//  --------- PAGES ---------------
import Frontpage from "./pages/Frontpage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import More from "./pages/More.jsx";
import LoginPage from "./pages/ADMIN/LoginPage.jsx";
//*ADMIN
import AdminNavbar from "./components/ADMIN/ADMINNavbar.jsx";
import AdminFront from "./pages/ADMIN/ADMINfront.jsx";
import AdminEdit from "./pages/ADMIN/ADMINEdit.jsx";
import ADMINSettings from "./pages/ADMIN/ADMINSettings.jsx";
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
    <div className="flex min-h-screen flex-col">
      <AdminNavbar />
      <main className="flex h-screen flex-grow items-center justify-center bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-700 text-white">
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
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "more", element: <More /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminApp />,
    children: [
      { index: true, element: <AdminFront /> },
      { path: "edit", element: <AdminEdit /> },
      { path: "settings", element: <ADMINSettings /> },
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
