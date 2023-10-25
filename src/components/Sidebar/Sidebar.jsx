"use client";
import Logo from "../Logo/Logo.jsx";
import Burger from "../Burger/Burger.jsx";
import Arrow from "./Arrow.jsx";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import gsap from "gsap";

function openMenuTween({ onComplete }) {
  gsap.to("[data-animation='menu-wrapper']", {
    width: "150px",
    ease: "expo.out",
    duration: 0.25,
  });

  gsap.to("[data-animation='menu-logo']", {
    x: 24,
    duration: 0.5,
    delay: 0.1,
    ease: "expo.out",
  });

  gsap.to("[data-animation='menu-burger']", {
    x: -50,
    autoAlpha: 0,
    delay: 0.1,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.fromTo(
    "[data-animation='menu-link']",
    { x: 0, autoAlpha: 0 },
    {
      x: -165,
      autoAlpha: 1,
      stagger: 0.025,
      delay: 0.1,
      ease: "expo.out",
      onComplete: onComplete,
    }
  );
}

function closeMenuTween({ onComplete }) {
  gsap.to("[data-animation='menu-wrapper']", {
    width: "100px",
    ease: "expo.out",
    duration: 0.5,
  });

  gsap.to("[data-animation='menu-logo']", {
    x: 0,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.to("[data-animation='menu-burger']", {
    x: 0,
    autoAlpha: 1,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.fromTo(
    "[data-animation='menu-link']",
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

export const Menu = ({ closeMenuTween }) => {
  return (
    <nav className={styles.navigation}>
      <div
        onClick={closeMenuTween}
        data-animation="menu-link"
        className={`${styles.link} scroll__nav`}
      >
        Services
      </div>
      <div
        onClick={closeMenuTween}
        data-animation="menu-link"
        className={`${styles.link} scroll__nav`}
      >
        Tasks
      </div>
      <div
        onClick={closeMenuTween}
        data-animation="menu-link"
        className={`${styles.link} scroll__nav`}
      >
        About Us
      </div>
    </nav>
  );
};

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    isMenuOpen
      ? closeMenuTween({
          onComplete: () => setIsMenuOpen(false),
        })
      : openMenuTween({
          onComplete: () => setIsMenuOpen(true),
        });
  }
  return (
    <aside data-animation="menu-wrapper">
      <div data-animation="menu-logo" className={styles.logo}>
        <Logo color="#4A1A61" />
      </div>
      <div onClick={toggleMenu} className={styles.burger}>
        <div data-animation="menu-burger">
          <Burger />
        </div>
      </div>
      <div className={styles.menu}>
        <div
          onClick={toggleMenu}
          data-animation="menu-link"
          className={styles.arrow}
        >
          <Arrow />
        </div>
        <Menu closeMenuTween={closeMenuTween} />
      </div>
    </aside>
  );
};
