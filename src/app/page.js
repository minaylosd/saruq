import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";

export default function Home() {
  return (
    <main>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <About></About>
    </main>
  );
}
