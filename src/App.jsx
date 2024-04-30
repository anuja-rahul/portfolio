import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio/" element={<Layout />}>
          <Route exact path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
