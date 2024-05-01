import {
  // Route,
  // Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: (
            <div className="h-[30vh] text-balance text-center text-7xl text-white">
              Page not Found !
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route exact path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/projects" element={<Projects />} />
  //         <Route path="/contact" element={<Contact />} />
  //         <Route
  //           path="*"
  //           element={
  //             <div className="h-[30vh] text-balance text-center text-7xl text-white">
  //               Page not Found !
  //             </div>
  //           }
  //         />
  //       </Route>
  //     </Routes>
  //   </>
  // );
}

export default App;
