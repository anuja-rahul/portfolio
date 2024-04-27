import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Analytics } from "@vercel/analytics/react";

function Layout() {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.fromTo(
      ".all-tags",
      {
        x: 10,
      },
      {
        x: 0,
        duration: 1,
        ease: "bounce.in",
        delay: 4,
        stagger: 0.4,
      },
      [],
    );
  });

  return (
    <div className="App h-full w-full">
      <Header />
      <div className="page">
        <span className="tags all-tags top-tag-html">&lt;html&gt;</span>
        <br />
        <span className="tags top-tags all-tags">&lt;body&gt;</span>
        <Outlet />
        <Analytics />
        <span className="tags bottom-tags all-tags body-bottom mb-3">
          &lt;/body&gt;
        </span>
        <br />
        <span className="tags bottom-tags all-tags bottom-tag-html">
          &lt;/html&gt;
        </span>
      </div>
    </div>
  );
}

export default Layout;
