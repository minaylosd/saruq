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
import { FooterComponent } from "@/components/FooterComponent/FooterComponent";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export default function Home() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     ".hero__image",
  //     {
  //       autoAlpha: 1,
  //       y: 0,
  //       scale: 1,
  //     },
  //     {
  //       autoAlpha: 0,
  //       y: -500,
  //       scale: 0.7,
  //       scrollTrigger: {
  //         trigger: ".about",
  //         start: "top bottom",
  //         end: "top 90%",
  //         toggleActions: "play none pause reverse",
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     ".hero__card",
  //     {
  //       autoAlpha: 1,
  //       x: 0,
  //       scale: 1,
  //     },
  //     {
  //       autoAlpha: 0,
  //       x: -500,
  //       scale: 0.7,
  //       scrollTrigger: {
  //         trigger: ".about",
  //         start: "top bottom",
  //         end: "top 90%",
  //         toggleActions: "play none pause reverse",
  //       },
  //     }
  //   );
  // }, []);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  //   const panels = gsap.utils.toArray(".section");
  //   const observer = ScrollTrigger.normalizeScroll(true);
  //   let scrollTween;
  //   let animating = false;
  //   let currentIndex = 0;
  //   const touch = {
  //     startX: 0,
  //     startY: 0,
  //     dx: 0,
  //     dy: 0,
  //   };

  //   function gotoSection(index, direction) {
  //     if (animating) return;
  //     setTimeout(() => {
  //       console.log("firing go to section");
  //       console.log(direction);
  //       animating = true;
  //       currentIndex = index;
  //       const panel = panels[index];
  //       scrollTween = gsap.to(window, {
  //         scrollTo: { y: panel.offsetTop, autoKill: false },
  //         onStart: () => {
  //           observer.disable();
  //           observer.enable();
  //         },
  //         duration: 0.3,
  //         onComplete: () => {
  //           animating = false;
  //           scrollTween = null;
  //         },
  //         overwrite: true,
  //       });
  //     }, 1000);
  //   }

  //   function handleWheel(e) {
  //     if (animating) return;
  //     console.log("firing handle wheel");
  //     e.preventDefault();
  //     e.stopPropagation();
  //     if (e.wheelDeltaY === 0) {
  //       return;
  //     } else if (
  //       (e.wheelDeltaY < 0 && currentIndex === panels.length - 1) ||
  //       (e.wheelDeltaY > 0 && currentIndex === 0)
  //     ) {
  //       return;
  //     } else {
  //       e.wheelDeltaY < 0
  //         ? gotoSection(currentIndex + 1, 1)
  //         : gotoSection(currentIndex - 1, -1);
  //     }
  //   }

  //   function handleTouchStart(e) {
  //     if (animating) return;
  //     const t = e.changedTouches[0];
  //     touch.startX = t.pageX;
  //     touch.startY = t.pageY;
  //   }

  //   function handleTouchMove(e) {
  //     if (animating) return;
  //     e.preventDefault();
  //   }

  //   function handleTouchEnd(e) {
  //     if (animating) return;
  //     console.log("firing handle touch end");
  //     const t = e.changedTouches[0];
  //     touch.dx = t.pageX - touch.startX;
  //     touch.dy = t.pageY - touch.startY;
  //     if (
  //       (touch.dy > 1 && currentIndex === 0) ||
  //       (touch.dy < -1 && currentIndex === panels.length - 1)
  //     )
  //       return;
  //     if (touch.dy > 1) gotoSection(currentIndex - 1, -1);
  //     if (touch.dy < -1) gotoSection(currentIndex + 1, 1);
  //   }

  //   gotoSection(0, 1);

  //   panels.forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top center",
  //       end: 0,
  //       onToggle: (self) => self.isActive && !scrollTween && gotoSection(i, 1),
  //     });
  //   });

  //   ScrollTrigger.create({
  //     start: 0,
  //     end: "max",
  //     snap: 1 / (panels.length - 1),
  //   });

  //   document.addEventListener("wheel", handleWheel, {
  //     passive: false,
  //   });
  //   document.addEventListener("touchstart", handleTouchStart, {
  //     passive: true,
  //   });
  //   document.addEventListener("touchmove", handleTouchMove, {
  //     passive: false,
  //   });
  //   document.addEventListener("touchend", handleTouchEnd, {
  //     passive: true,
  //   });

  //   return () => {
  //     document.removeEventListener("wheel", handleWheel);
  //     document.removeEventListener("touchstart", handleTouchStart);
  //     document.removeEventListener("touchmove", handleTouchMove);
  //     document.removeEventListener("touchend", handleTouchEnd);
  //   };
  // }, []);

  const divStyle = {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  };

  return (
    <main>
      <Sidebar />
      <div style={divStyle}>
        <Hero />
      </div>
      <div style={divStyle}>
        <About />
      </div>
      <div style={divStyle}>
        <Goal />
      </div>
      <div style={divStyle}>
        <Counterparty />
      </div>
      <div style={divStyle}>
        <Contracts />
      </div>
      <div style={divStyle}>
        <Stages />
      </div>
      <div style={divStyle}>
        <Services />
      </div>
      <div style={divStyle}>
        <Contact />
      </div>
      <FooterComponent />
    </main>
  );
}
