import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  const navigationItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
  ];
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navigationItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
