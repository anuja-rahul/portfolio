import { Outlet } from "react-router-dom";
import Header from "./Header";

function Index() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <span className="all-tags top-tag-html">&lt;html&gt;</span>
        <br />
        <span className="tags top-tags all-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags all-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html all-tags">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default Index;
