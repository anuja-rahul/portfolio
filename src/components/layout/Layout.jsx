import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Layout() {
  useGSAP(() => {
    // const tl = gsap.timeline({ repeat: -1, yoyo: true });
    const start = gsap.timeline();

    start.fromTo(
      ".all-tags",
      {
        opacity: 0,
        y: -60,
      },
      {
        opacity: 0.6,
        stagger: 0.2,
        duration: 1.5,
        y: 0,
        ease: "bounce.out",
      },
      [],
    );

    // tl.from(
    //     ".all-tags",
    //     {
    //       y: 0,
    //     },
    //     [],
    //   )
    //   .to(".all-tags", {
    //     y: -15,
    //     duration: 1,
    //     ease: "bounce.in",
    //     delay: 4,
    //     stagger: 0.4,
    //   }),
    //   [];
  }, []);

  return (
    <div className="App h-auto w-full">
      <Header />
      <div className="page">
        <span className="tags all-tags top-tag-html">&lt;html&gt;</span>
        <br />
        <span className="tags top-tags all-tags">&lt;body&gt;</span>
        <Outlet />
        <span>
          <span className="tags bottom-tags all-tags body-bottom mb-3">
            &lt;/body&gt;
          </span>
          <br />
          <span className="tags bottom-tags all-tags bottom-tag-html">
            &lt;/html&gt;
          </span>
        </span>
      </div>
    </div>
  );
}

export default Layout;
