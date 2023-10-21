import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <Sidebar></Sidebar>
      <Hero></Hero>
    </main>
  );
}
