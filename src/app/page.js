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
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Lethargy } from "lethargy-ts";
import { useMediaQuery } from "react-responsive";

const lethargy = new Lethargy();

export default function Home() {
  const [events, setEvents] = useState([
    {
      deltaX: 0,
      deltaY: 0,
      deltaZ: 0,
      timeStamp: 0,
      isIntentional: false,
    },
  ]);

  const prevTimeStampRef = useRef(0);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (isDesktop) {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      function fadeOut(currentIndex, index, direction) {
        console.log("Current index:", currentIndex);
        console.log("Index:", index);
        console.log("Direction:", direction);
        if (currentIndex === 0) {
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
              scale: 0.44,
              duration: 0.3,
              ease: "power2.inOut",
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
              x: -1000,
              scale: 0.44,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
        }
        if (currentIndex === 1) {
          gsap.fromTo(
            ".about",
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 800,
              scale: 0.19,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
        }
        gotoSection(index, direction);
      }

      function fadeIn(index, direction) {
        if (index === 0) {
          gsap.fromTo(
            ".hero__image",
            {
              autoAlpha: 0,
              y: -500,
              scale: 0.44,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
          gsap.fromTo(
            ".hero__card",
            {
              autoAlpha: 0,
              x: -1000,
              scale: 0.44,
            },
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
        }
        if (index === 1) {
          gsap.fromTo(
            ".about",
            {
              autoAlpha: 0,
              x: 0,
              y: 500,
              scale: 0.44,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
        }
        if (index === 2) {
          gsap.fromTo(
            "[data-animation='goal-heading']",
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
          gsap.fromTo(
            "[data-animation='goal__label']",
            {
              autoAlpha: 0,
              x: -1000,
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
          gsap.fromTo(
            "[data-animation='goal__image']",
            {
              autoAlpha: 0,
              x: 1000,
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );
        }
      }

      const panels = gsap.utils.toArray(".section");
      const observer = ScrollTrigger.normalizeScroll(true);
      let scrollTween;
      let animating = false;
      let currentIndex = 0;
      const touch = {
        startY: 0,
        dy: 0,
      };

      function gotoSection(index, direction) {
        if (animating) return;
        animating = true;
        currentIndex = index;
        const panel = panels[index];
        if (currentIndex < 8) {
          scrollTween = gsap.to(".container", {
            y: -panel.offsetTop,
            onStart: () => {
              observer.disable();
              observer.enable();
            },
            duration: 0.1,
            delay: 0.3,
            onComplete: () => {
              animating = false;
              scrollTween = null;
            },
            overwrite: true,
          });
        } else {
          scrollTween = gsap.to(".container", {
            y: -panel.offsetTop + (window.innerHeight - panel.offsetHeight),
            onStart: () => {
              observer.disable();
              observer.enable();
            },
            duration: 0.1,
            delay: 0.3,
            onComplete: () => {
              animating = false;
              scrollTween = null;
            },
            overwrite: true,
          });
        }

        fadeIn(index, direction);
      }

      const checkWheelEvent = (e) => {
        e.preventDefault();
        console.log("Wheel event");
        const isIntentional = lethargy.check(e);

        if (e.ctrlKey || e.altKey) return;

        if (isIntentional) {
          console.log("Intentional");
          const currentTimeStamp = e.timeStamp;
          if (currentTimeStamp - prevTimeStampRef.current > 500) {
            console.log(e.deltaY);
            setEvents((prev) => [
              {
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                deltaZ: e.deltaZ,
                timeStamp: currentTimeStamp,
                isIntentional,
              },
            ]);
            prevTimeStampRef.current = currentTimeStamp;
            handleWheel(e);
          }
        }
      };

      function handleWheel(e) {
        e.preventDefault();
        e.stopPropagation();
        if (animating) return;

        if (e.wheelDeltaY === 0) {
          return;
        } else if (
          (e.wheelDeltaY < 0 && currentIndex === panels.length - 1) ||
          (e.wheelDeltaY > 0 && currentIndex === 0)
        ) {
          return;
        } else {
          e.wheelDeltaY < 0
            ? fadeOut(currentIndex, currentIndex + 1, 1)
            : fadeOut(currentIndex, currentIndex - 1, -1);
        }
        e.wheelDeltaY < 0;
      }

      function handleUpBtn(e) {
        e.preventDefault();
        if (animating || currentIndex === 0) return;
        fadeOut(currentIndex, 0, -1);
      }

      function handleNav(e) {
        e.preventDefault();
        if (animating) return;
        const link = e.target.textContent.toLowerCase();
        if (link === "services") {
          fadeOut(currentIndex, 6, 1);
        } else if (link === "tasks") {
          fadeOut(currentIndex, 5, 1);
        } else if (link === "about us") {
          fadeOut(currentIndex, 1, 1);
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
        if (touch.dy > -50) fadeOut(currentIndex, currentIndex - 1, -1);
        if (touch.dy < 50) fadeOut(currentIndex, currentIndex + 1, 1);
      }

      gotoSection(0, 1);

      const navLinks = document.querySelectorAll(".scroll__nav");
      navLinks.forEach((link) => {
        link.addEventListener("click", handleNav);
      });

      document.querySelector(".up__btn").addEventListener("click", handleUpBtn);
      if (isDesktop) {
        document.addEventListener("wheel", checkWheelEvent, { passive: false });
        document.addEventListener("touchstart", handleTouchStart, {
          passive: true,
        });
        document.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        document.addEventListener("touchend", handleTouchEnd, {
          passive: true,
        });

        return () => {
          document.removeEventListener("wheel", checkWheelEvent);
          document.removeEventListener("touchstart", handleTouchStart);
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
        };
      }
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
      {/* <HeaderComponent
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
      /> */}
      <UpBtn />
      <div className="container">
        <Hero />
        <About />
        <Goal />
        <Counterparty />
        <Contracts />
        <Stages />
        <Services />
        <Contact />
        <FooterComponent />
      </div>
    </main>
  );
}
