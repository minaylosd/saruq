"use client";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Goal } from "@/components/Goal/Goal";
import { Counterparty } from "@/components/Counterparty/Counterparty";
import { Contracts } from "@/components/Contracts/Contracts";
import { Stages } from "@/components/Stages/Stages";
import { Services } from "@/components/Services/Services";
import { Contact } from "@/components/Contact/Contact";
import { HeaderComponent } from "@/components/HeaderComponent/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent/FooterComponent";
import { UpBtn } from "@/components/UpBtn/UpBtn";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Lethargy } from "lethargy-ts";
import { useMediaQuery } from "react-responsive";

const lethargy = new Lethargy({
  sensitivity: 100,
  delay: 500,
  inertiaDecay: 10,
});

export default function Home() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".hero__image",
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      },
      {
        autoAlpha: 0,
        y: -500,
        scale: 0.7,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "top 90%",
          toggleActions: "play none reset none",
        },
      }
    );
    gsap.fromTo(
      ".hero__card",
      {
        autoAlpha: 1,
        x: 0,
        scale: 1,
      },
      {
        autoAlpha: 0,
        x: -500,
        scale: 0.7,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "top 90%",
          toggleActions: "play none reset none",
        },
      }
    );
  }, []);

  useEffect(() => {
    // if (isDesktop) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const panels = gsap.utils.toArray(".section");
    const observer = ScrollTrigger.normalizeScroll(true);
    let scrollTween;
    let animating = false;
    let currentIndex = 0;
    const touch = {
      startY: 0,
      dy: 0,
    };

    const navLinks = document.querySelectorAll(".scroll__nav");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNav);
    });

    function gotoSection(index, direction) {
      if (animating) return;
      animating = true;
      currentIndex = index;
      const panel = panels[index];
      scrollTween = gsap.to(window, {
        scrollTo: { y: panel.offsetTop, autoKill: false },
        onStart: () => {
          observer.disable();
          observer.enable();
        },
        duration: 0.2,
        // delay: 0.1,
        onComplete: () => {
          animating = false;
          scrollTween = null;
        },
        overwrite: true,
      });
    }

    // const checkWheelEvent = () => {
    //   e.preventDefault();
    //   const isIntentional = lethargy.check(e);

    //   if (isIntentional) {
    //     // Do something with the scroll event
    //     handleWheel(e);
    //   }
    // };

    // function handleScroll(e) {
    //   e.preventDefault();
    //   const normalized = normalizeWheel(e);
    //   const isTrackpad = Math.abs(normalized.pixelY) < 10;
    //   if (isTrackpad) {
    //     // trackpad
    //     console.log("Trackpad");
    //     debounce(() => {
    //       // Considered trackpad
    //       console.log("it is trackpad");
    //     }, 500);
    //   } else {
    //     // wheel
    //     console.log("Wheel");
    //     handleWheel(e);
    //   }
    // }

    function handleWheel(e) {
      if (animating) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.wheelDeltaY === 0) {
        return;
      } else if (
        (e.wheelDeltaY < 0 && currentIndex === panels.length - 1) ||
        (e.wheelDeltaY > 0 && currentIndex === 0)
      ) {
        return;
      } else {
        e.wheelDeltaY < 0
          ? gotoSection(currentIndex + 1, 1)
          : gotoSection(currentIndex - 1, -1);
      }
      e.wheelDeltaY < 0;
    }

    function handleUpBtn(e) {
      e.preventDefault();
      if (animating) return;
      gotoSection(0, 1);
    }

    function handleNav(e) {
      e.preventDefault();
      // check if animating
      if (animating) return;
      // check text content of link
      const link = e.target.textContent.toLowerCase();
      // case for link === "services"
      if (link === "services") {
        // scroll to services section
        gotoSection(6, 1);
      } else if (link === "tasks") {
        // scroll to tasks section
        gotoSection(5, 1);
      } else if (link === "about us") {
        // scroll to about section
        gotoSection(1, 1);
      }
    }

    function handleTouchStart(e) {
      if (animating) return;
      const t = e.changedTouches[0];
      touch.startY = t.clientY;
      console.log("Touch start:", touch.startY);
    }

    function handleTouchMove(e) {
      if (animating) return;
    }

    function handleTouchEnd(e) {
      if (animating) return;
      const t = e.changedTouches[0];
      touch.dy = t.clientY - touch.startY;
      console.log("Touch end:", t.clientX, t.clientY);
      console.log("Touch movement:", touch.dy);
      if (
        (touch.dy > -50 && currentIndex === 0) ||
        (touch.dy < 50 && currentIndex === panels.length - 1)
      )
        return;
      if (touch.dy > -50) gotoSection(currentIndex - 1, -1);
      if (touch.dy < 50) gotoSection(currentIndex + 1, 1);
    }

    gotoSection(0, 1);

    document.querySelector(".up__btn").addEventListener("click", handleUpBtn);
    if (isDesktop) {
      document.addEventListener("wheel", handleWheel, { passive: false });
      document.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd, { passive: true });

      return () => {
        document.removeEventListener("wheel", handleWheel);
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  const divStyle = {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  };

  return (
    <main>
      <Sidebar />
      <HeaderComponent />
      <UpBtn />
      {/* <div style={divStyle}> */}
      <Hero />
      {/* </div> */}
      {/* <div style={divStyle}> */}
      <About />
      {/* </div> */}
      {/* <div style={divStyle}> */}
      <Goal />
      {/* </div> */}
      {/* <div style={divStyle}> */}
      <Counterparty />
      {/* </div> */}
      {/* <div style={divStyle}> */}
      <Contracts />
      {/* </div> */}
      {/* <div style={divStyle}> */}
      <Stages />
      {/* </div> */}
      {/* <div style={divStyle}> */}
      <Services />
      {/* </div> */}
      {/* <div style={divStyle}> */}
      <Contact />
      {/* </div> */}
      <FooterComponent />
    </main>
  );
}
