import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/header/Header";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
