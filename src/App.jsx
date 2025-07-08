// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import path from "path";
import { Children } from "react";
import Footer from "./components/Footer";
import Login from "./pages/Login";
const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const DashboardLayout = () => {
    return (
      <>
        <div>
          <Topbar />
        </div>
        <div>
          <Sidebar />
          <Outlet />
        </div>
      </>
    );
  };

  const pageRoute = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children: [
        {

        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={pageRoute} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </>
  );
};

export default App;
