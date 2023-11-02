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
import normalizeWheel from "normalize-wheel";

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
  const prevDeltaYRef = useRef(0);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const fadeOutAnimations = [
    {
      elements: [
        {
          selector: "[data-animation='hero__image']",
          start: { autoAlpha: 1, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            y: -500,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
        {
          selector: "[data-animation='hero__card']",
          start: { autoAlpha: 1, x: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='about']",
          start: { autoAlpha: 1, x: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 1500,
            scale: 0.19,
            duration: 0.5,
            ease: "power2.in",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='goal__heading']",
          start: { autoAlpha: 1, y: 0 },
          end: { autoAlpha: 0, y: -500, duration: 0.5, ease: "power2.in" },
        },
        {
          selector: "[data-animation='goal__label']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 300,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
        {
          selector: "[data-animation='goal__image']",
          start: { autoAlpha: 1, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='counterparty__label']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: -500,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
        {
          selector: "[data-animation='counterparty__image']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='contracts__card']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
        {
          selector: "[data-animation='contracts__label']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
        {
          selector: "[data-animation='contracts__image']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: -500,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            ease: "power2.in",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='stages__image']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.in",
          },
        },
        {
          selector: "[data-animation='stages__heading']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.in",
          },
        },
        {
          selector: "[data-animation='stages__card']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            delay: 0.03,
            stagger: { each: 0.025, from: "end" },
            ease: "power2.in",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='services__card']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            delay: 0.4,
            stagger: { each: 0.03 },
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='services__heading']",
          start: { autoAlpha: 1, x: 0, y: 0, scale: 1 },
          end: {
            autoAlpha: 0,
            x: 0,
            y: -1000,
            scale: 0.44,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
  ];
  const fadeInAnimations = [
    {
      elements: [
        {
          selector: "[data-animation='hero__image']",
          start: { autoAlpha: 0, y: -500, scale: 0.44 },
          end: {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='hero__card']",
          start: { autoAlpha: 0, x: -1000, scale: 0.44 },
          end: {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='about']",
          start: { autoAlpha: 0, x: 0, y: 500, scale: 0.44 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='goal__heading']",
          start: { autoAlpha: 0, x: 0, y: 0 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='goal__label']",
          start: { autoAlpha: 0, x: -1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='goal__image']",
          start: { autoAlpha: 0, x: 1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='counterparty__label']",
          start: { autoAlpha: 0, x: 1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='counterparty__image']",
          start: { autoAlpha: 0, x: -1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='contracts__label']",
          start: { autoAlpha: 0, x: -1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='contracts__image']",
          start: { autoAlpha: 0, x: 1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='contracts__card']",
          start: { autoAlpha: 0, x: 1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='stages__card']",
          start: { autoAlpha: 0, x: 0, y: 1000 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0,
            stagger: { each: 0.025, from: "end" },
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='stages__image']",
          start: { autoAlpha: 0, x: 1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='stages__heading']",
          start: { autoAlpha: 0, x: 1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='services__card']",
          start: { autoAlpha: 0, x: 0, y: 0, scale: 0.44 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay: 0.4,
            stagger: { each: 0.03, from: "start" },
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='services__heading']",
          start: { autoAlpha: 0, x: -1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
    {
      elements: [
        {
          selector: "[data-animation='contact__form']",
          start: { autoAlpha: 0, x: -1000, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay: 0.4,
            stagger: { each: 0.03, from: "start" },
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='contact__heading']",
          start: { autoAlpha: 0, x: 1500, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
        {
          selector: "[data-animation='contact__card']",
          start: { autoAlpha: 0, x: 710, y: 0, scale: 1 },
          end: {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
          },
        },
      ],
    },
  ];

  useEffect(() => {
    if (isTablet) {
      gsap.registerPlugin(ScrollTrigger);

      function fadeOut(currentIndex, index, direction) {
        if (currentIndex < 7 && direction === 1) {
          fadeOutAnimations[currentIndex].elements.map((element) => {
            gsap.fromTo(element.selector, element.start, element.end);
          });
        }
        gotoSection(index, direction);
      }

      function fadeIn(index, direction) {
        if (index < 7) {
          fadeInAnimations[index].elements.map((element, i) => {
            gsap.fromTo(
              element.selector,
              direction === 1
                ? element.start
                : fadeOutAnimations[index].elements[i].end,
              direction === 1 ? element.end : { ...element.end, delay: 0 }
            );
          });
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
            delay: direction === 1 ? 0.5 : 0,
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
            delay: 0,
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

        const normalized = normalizeWheel(e);
        const isIntentional = lethargy.check(e);

        if (e.ctrlKey || e.altKey) return;

        if (Math.abs(normalized.pixelY) < Math.abs(prevDeltaYRef.current) / 1.5)
          return;
        if (isIntentional) {
          const currentTimeStamp = e.timeStamp;
          if (currentTimeStamp - prevTimeStampRef.current > 800) {
            setEvents((prev) => [
              {
                deltaX: normalized.pixelX,
                deltaY: normalized.pixelY,
                deltaZ: e.deltaZ,
                timeStamp: currentTimeStamp,
                isIntentional,
              },
            ]);
            prevTimeStampRef.current = currentTimeStamp;
            prevDeltaYRef.current = normalized.pixelY;
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
        setResizedWidth(window.innerWidth);
        fadeIn(0, currentIndex, -1);
      };

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
      <HeaderComponent isMobile={isMobile} />
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
