"use client";
import Logo from "../Logo/Logo.jsx";
import Burger from "../Burger/Burger.jsx";
import Arrow from "../Sidebar/Arrow.jsx";
import styles from "./HeaderComponent.module.css";
import { useState } from "react";
import gsap from "gsap";

export const HeaderMenu = ({ toggleHeaderMenu, isMobile }) => {
  return (
    <>
      <nav
        data-animation="nav-wrapper"
        onClick={toggleHeaderMenu}
        className={styles.navigation}
      >
        <div
          onClick={toggleHeaderMenu}
          data-animation="header-link"
          className={styles.arrow}
        >
          <Arrow />
        </div>
        <a
          href="#services"
          data-scroll={!isMobile ? "scroll__nav" : ""}
          data-animation="header-link"
          className={styles.link}
        >
          Services
        </a>
        <a
          href="#about"
          data-scroll={!isMobile ? "scroll__nav" : ""}
          data-animation="header-link"
          className={styles.link}
        >
          About Us
        </a>
      </nav>
    </>
  );
};

export const HeaderComponent = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleHeaderMenu(e) {
    {
      !isMobile && e.preventDefault();
    }
    isMenuOpen
      ? closeHeaderMenuTween({
          onComplete: () => setIsMenuOpen(false),
        })
      : openHeaderMenuTween({
          onComplete: () => setIsMenuOpen(true),
        });
  }

  function openHeaderMenuTween({ onComplete }) {
    gsap.to("[data-animation='header-burger']", {
      x: 50,
      autoAlpha: 0,
      delay: 0.1,
      duration: 0.25,
      ease: "expo.out",
    });
    gsap.fromTo(
      "[data-animation='nav-wrapper']",
      {
        x: 200,
        autoAlpha: 0,
      },
      { x: 0, autoAlpha: 1, ease: "expo.out", duration: 0.25, delay: 0.25 }
    );
    gsap.fromTo(
      "[data-animation='header-link']",
      { x: 165, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        stagger: 0.025,
        delay: 0.5,
        ease: "expo.out",
        onComplete: onComplete,
      }
    );
  }
  function closeHeaderMenuTween({ onComplete }) {
    gsap.fromTo(
      "[data-animation='nav-wrapper']",
      {
        x: 0,
        autoAlpha: 0,
      },
      { x: 500, autoAlpha: 1, ease: "expo.out", duration: 0.25 }
    );
    gsap.to("[data-animation='menu-logo']", {
      x: 0,
      duration: 0.5,
      ease: "expo.out",
    });
    gsap.to("[data-animation='header-burger']", {
      x: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: "expo.out",
    });
    gsap.fromTo(
      "[data-animation='header-link']",
      { x: 0, autoAlpha: 1 },
      {
        x: 165,
        autoAlpha: 0,
        stagger: 0.025,
        delay: 0.1,
        ease: "expo.out",
        onComplete: onComplete,
      }
    );
  }
  return (
    <header className="header">
      <div className={styles.logo}>
        <Logo color="#4A1A61" />
      </div>
      <div
        data-animation="header-burger"
        onClick={toggleHeaderMenu}
        className={styles.burger}
      >
        <Burger />
      </div>
      <div className={styles.menu}>
        <HeaderMenu isMobile={isMobile} toggleHeaderMenu={toggleHeaderMenu} />
      </div>
    </header>
  );
};
