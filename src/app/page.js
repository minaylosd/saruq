import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Goal } from "@/components/Goal/Goal";

export default function Home() {
  return (
    <main>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <About></About>
      <Goal></Goal>
    </main>
  );
}
