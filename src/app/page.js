import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Goal } from "@/components/Goal/Goal";
import { Counterparty } from "@/components/Counterparty/Counterparty";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Hero />
      <About />
      <Goal />
      <Counterparty />
    </main>
  );
}
