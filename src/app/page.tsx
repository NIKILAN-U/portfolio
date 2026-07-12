import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { ClientProjects } from "@/components/sections/ClientProjects";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Research } from "@/components/sections/Research";
import { Achievements } from "@/components/sections/Achievements";
import { GithubStats } from "@/components/sections/GithubStats";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ClientProjects />
      <FeaturedProjects />
      <Skills />
      <Research />
      <Achievements />
      <GithubStats />
      <Resume />
      <Contact />
    </>
  );
}
