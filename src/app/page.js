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

  const [resizedWidth, setResizedWidth] = useState(0);

  const prevTimeStampRef = useRef(0);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (isTablet) {
      gsap.registerPlugin(ScrollTrigger);

      function fadeOut(currentIndex, index, direction) {
        if (currentIndex === 0 && direction === 1) {
          gsap.fromTo(
            "[data-animation='hero__image']",
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              y: -500,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='hero__card']",
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
        }
        if (currentIndex === 1 && direction === 1) {
          gsap.fromTo(
            "[data-animation='about']",
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 1500,
              scale: 0.19,
              duration: 0.5,
              ease: "power2.in",
            }
          );
        }
        if (currentIndex === 2 && direction === 1) {
          gsap.fromTo(
            "[data-animation='goal__heading']",
            {
              autoAlpha: 1,
              y: 0,
            },
            {
              autoAlpha: 0,
              y: -500,
              duration: 0.5,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='goal__label']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 300,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='goal__image']",
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
        }
        if (currentIndex === 3 && direction === 1) {
          gsap.fromTo(
            "[data-animation='counterparty__label']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: -500,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='counterparty__image']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
        }
        if (currentIndex === 4 && direction === 1) {
          gsap.fromTo(
            "[data-animation='contracts__card']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='contracts__label']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='contracts__image']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: -500,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              ease: "power2.in",
            }
          );
        }
        if (currentIndex === 5 && direction === 1) {
          gsap.fromTo(
            "[data-animation='stages__image']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='stages__heading']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.in",
            }
          );
          gsap.fromTo(
            "[data-animation='stages__card']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              delay: 0.03,
              stagger: {
                each: 0.025,
                from: "end",
              },
              ease: "power2.in",
            }
          );
        }
        if (currentIndex === 6 && direction === 1) {
          gsap.fromTo(
            "[data-animation='services__card']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              delay: 0.4,
              stagger: {
                each: 0.03,
              },
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='services__heading']",
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 0,
              x: 0,
              y: -1000,
              scale: 0.44,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        gotoSection(index, direction);
      }

      function fadeIn(index, direction) {
        const animations =
          direction === 1
            ? {
                hero__image: {
                  autoAlpha: 0,
                  y: -500,
                  scale: 0.44,
                },
                hero__card: {
                  autoAlpha: 0,
                  x: -1000,
                  scale: 0.44,
                },
                about: {
                  autoAlpha: 0,
                  x: 0,
                  y: 500,
                  scale: 0.44,
                },
                goal__heading: {
                  autoAlpha: 0,
                  x: 0,
                  y: 0,
                },
                goal__label: {
                  autoAlpha: 0,
                  x: -1000,
                  y: 0,
                  scale: 1,
                },
                goal__image: {
                  autoAlpha: 0,
                  x: 1000,
                  y: 0,
                  scale: 1,
                },
                counterparty__label: {
                  autoAlpha: 0,
                  x: 1000,
                  y: 0,
                  scale: 1,
                },
                counterparty__image: {
                  autoAlpha: 0,
                  x: -1000,
                  y: 0,
                  scale: 1,
                },
                contracts__label: {
                  autoAlpha: 0,
                  x: -1000,
                  y: 0,
                  scale: 1,
                },
                contracts__image: {
                  autoAlpha: 0,
                  x: 1000,
                  y: 0,
                  scale: 1,
                },
                contracts__card: {
                  autoAlpha: 0,
                  x: 1000,
                  y: 0,
                  scale: 1,
                },
                stages__card: {
                  autoAlpha: 0,
                  x: 0,
                  y: 1000,
                },
                stages__image: {
                  autoAlpha: 0,
                  x: 1000,
                  y: 0,
                  scale: 1,
                },
                stages__heading: {
                  autoAlpha: 0,
                  x: 1000,
                  y: 0,
                  scale: 1,
                },
                services__card: {
                  autoAlpha: 0,
                  x: 0,
                  y: 0,
                  scale: 0.44,
                },
                services__heading: {
                  autoAlpha: 0,
                  x: -1000,
                  y: 0,
                  scale: 1,
                },
                contact__form: {
                  autoAlpha: 0,
                  x: -1000,
                  y: 0,
                  scale: 1,
                },
                contact__heading: {
                  autoAlpha: 0,
                  x: 1500,
                  y: 0,
                  scale: 1,
                },
                contact__card: {
                  autoAlpha: 0,
                  x: 710,
                  y: 0,
                  scale: 1,
                },
              }
            : {
                hero__image: {
                  autoAlpha: 0,
                  y: -500,
                  scale: 0.44,
                },
                hero__card: {
                  autoAlpha: 0,
                  x: -1000,
                  scale: 0.44,
                },
                about: {
                  autoAlpha: 0,
                  x: 1500,
                  scale: 0.19,
                },
                goal__heading: {
                  autoAlpha: 0,
                  y: -500,
                },
                goal__label: {
                  autoAlpha: 0,
                  x: 300,
                  y: -1000,
                  scale: 0.44,
                },
                goal__image: {
                  autoAlpha: 0,
                  y: -1000,
                  scale: 0.44,
                },
                counterparty__label: {
                  autoAlpha: 0,
                  x: -500,
                  y: -1000,
                  scale: 0.44,
                },
                counterparty__image: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 0.44,
                },
                contracts__card: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 0.44,
                },
                contracts__label: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 0.44,
                },
                contracts__image: {
                  autoAlpha: 0,
                  x: -500,
                  y: -1000,
                  scale: 0.44,
                },
                stages__image: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 0.44,
                },
                stages__heading: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 0.44,
                },
                stages__card: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 1,
                },
                services__card: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 0.44,
                },
                services__heading: {
                  autoAlpha: 0,
                  x: 0,
                  y: -1000,
                  scale: 0.44,
                },
              };
        if (index === 0) {
          gsap.fromTo(
            "[data-animation='hero__image']",
            {
              ...animations["hero__image"],
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='hero__card']",
            {
              ...animations["hero__card"],
            },
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        if (index === 1) {
          gsap.fromTo(
            "[data-animation='about']",
            {
              ...animations["about"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        if (index === 2) {
          gsap.fromTo(
            "[data-animation='goal__heading']",
            {
              ...animations["goal__heading"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='goal__label']",
            {
              ...animations["goal__label"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='goal__image']",
            {
              ...animations["goal__image"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        if (index === 3) {
          gsap.fromTo(
            "[data-animation='counterparty__label']",
            {
              ...animations["counterparty__label"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='counterparty__image']",
            {
              ...animations["counterparty__image"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        if (index === 4) {
          gsap.fromTo(
            "[data-animation='contracts__label']",
            {
              ...animations["contracts__label"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='contracts__image']",
            {
              ...animations["contracts__image"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='contracts__card']",
            {
              ...animations["contracts__card"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        if (index === 5) {
          gsap.fromTo(
            "[data-animation='stages__card']",
            {
              ...animations["stages__card"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              delay: 0.03,
              stagger: {
                each: 0.025,
                from: "end",
              },
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='stages__image']",
            {
              ...animations["stages__image"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='stages__heading']",
            {
              ...animations["stages__heading"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        if (index === 6) {
          gsap.fromTo(
            "[data-animation='services__card']",
            {
              ...animations["services__card"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              delay: 0.4,
              stagger: {
                each: 0.03,
                from: "start",
              },
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='services__heading']",
            {
              ...animations["services__heading"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
        }
        if (index === 7) {
          gsap.fromTo(
            "[data-animation='contact__form']",
            {
              ...animations["contact__form"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              delay: 0.4,
              stagger: {
                each: 0.03,
                from: "start",
              },
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='contact__heading']",
            {
              ...animations["contact__heading"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(
            "[data-animation='contact__card']",
            {
              ...animations["contact__card"],
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
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
            delay: 0.5,
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
            delay: 0.5,
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
        const isIntentional = lethargy.check(e);

        if (e.ctrlKey || e.altKey) return;

        if (isIntentional) {
          const currentTimeStamp = e.timeStamp;
          if (currentTimeStamp - prevTimeStampRef.current > 700) {
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

      function handleUpBtn() {
        if (animating || currentIndex === 0) return;
        fadeOut(currentIndex, 0, -1);
      }

      function handleNav(e) {
        e.preventDefault();
        if (animating) return;
        const link = e.target.getAttribute("href");
        if (link === "#services") {
          fadeOut(currentIndex, 6, 1);
        }
        if (link === "#about") {
          fadeOut(currentIndex, 1, 1);
        }
        if (link === "#contact") {
          fadeOut(currentIndex, 7, 1);
        }
      }

      function handleTouchStart(e) {
        if (animating) return;
        const t = e.changedTouches[0];
        touch.startY = t.clientY;
      }

      function handleTouchMove(e) {
        if (animating) return;
      }

      function handleTouchEnd(e) {
        if (animating) return;
        const t = e.changedTouches[0];
        touch.dy = t.clientY - touch.startY;
        if (touch.dy === 0) return;
        if (
          touch.dy === 0 ||
          (touch.dy > 50 && currentIndex === 0) ||
          (touch.dy < 50 && currentIndex === panels.length - 1)
        )
          return;
        if (touch.dy > 50) {
          fadeOut(currentIndex, currentIndex - 1, -1);
        }
        if (touch.dy < -50) {
          fadeOut(currentIndex, currentIndex + 1, 1);
        }
      }

      const handleResize = () => {
        console.log("resize");
        setResizedWidth(window.innerWidth);
        fadeIn(0, currentIndex, -1);
      };

      // gotoSection(0, 1);

      const navLinks = document.querySelectorAll('[data-scroll="scroll__nav"]');
      navLinks.forEach((link) => {
        link.addEventListener("click", handleNav);
      });

      window.addEventListener("resize", handleResize);
      document.querySelector(".up__btn").addEventListener("click", handleUpBtn);
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
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [resizedWidth]);

  const divStyle = {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  };

  return (
    <main>
      <Sidebar isMobile={isMobile} />
      <HeaderComponent
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
      />
      <UpBtn isMobile={isMobile} />
      <div className="container">
        <Hero isMobile={isMobile} />
        <About />
        <Goal />
        <Counterparty />
        <Contracts />
        <Stages />
        <Services />
        <Contact />
        <FooterComponent isMobile={isMobile} />
      </div>
    </main>
  );
}
