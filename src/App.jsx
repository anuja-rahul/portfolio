import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Index";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
