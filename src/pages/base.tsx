import LogoSvg from "@/assets/LogoSvg";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import ParticleComponent from "@/components/particle";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import Projects from "./projects";
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function Base() {
  return (
    <div className="max-w-[100vw] h-[100vh] font-mono z-50">
      <aside className="hidden fixed top-0 left-0 w-full pl-10 pr-10 backdrop-blur h-[9%] z-[1000] lg:flex items-center justify-between ">
        <LogoSvg className="w-10" />
        <NavigationMenu className="text-white/85 flex gap-7">
          <a
            href="#home"
            className="hover:text-zinc-400 transition-colors duration-200"
          >
            <NavigationMenuLink>Home</NavigationMenuLink>
          </a>
          <a
            href="#about"
            className="hover:text-zinc-400 transition-colors duration-200"
          >
            <NavigationMenuLink>Sobre mim</NavigationMenuLink>
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-400 transition-colors duration-200"
          >
            <NavigationMenuLink>Habilidades</NavigationMenuLink>
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-400 transition-colors duration-200"
          >
            <NavigationMenuLink>Projetos</NavigationMenuLink>
          </a>
        </NavigationMenu>
      </aside>
      <Sheet>
        <SheetTrigger>
          <aside className="flex lg:hidden">
            <IoMdMenu className="text-white text-[5vh] right-2 top-2 fixed" />
          </aside>
        </SheetTrigger>
        <SheetContent className="text-white border-0 bg-gray-800/70">
          <NavigationMenu className="text-white/85 flex flex-col items-start gap-10 text-[3vh] mt-10">
            <SheetClose>
              <a
                href="#home"
                className="hover:text-zinc-400 transition-colors duration-200"
              >
                <NavigationMenuLink>Home</NavigationMenuLink>
              </a>
            </SheetClose>
            <SheetClose>
              <a
                href="#about"
                className="hover:text-zinc-400 transition-colors duration-200"
              >
                <NavigationMenuLink>Sobre mim</NavigationMenuLink>
              </a>
            </SheetClose>
            <SheetClose>
              <a
                href="#skills"
                className="hover:text-zinc-400 transition-colors duration-200"
              >
                <NavigationMenuLink>Habilidades</NavigationMenuLink>
              </a>
            </SheetClose>
            <SheetClose>
              <a
                href="#projects"
                className="hover:text-zinc-400 transition-colors duration-200"
              >
                <NavigationMenuLink>Projetos</NavigationMenuLink>
              </a>
            </SheetClose>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
      <main className="h-[94%] p-[8vw] pt-0">
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
      <footer className="fixed w-full z-50 -mt-[10vh] lg:-mt-[10vh] flex items-center justify-center gap-3 text-[4vh] lg:text-[2vw] text-white">
        <a href="https://github.com/Jadsonaguiarr">
          <FiGithub />
        </a>
        <a href="mailto:wilkerjadson000@gmail.com">
          <MdOutlineEmail />
        </a>
        <a href="https://www.linkedin.com/in/jadson-aguiar-686584251/">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/jadsonaguiar__?igsh=MThvMHNseGpxbXJuZw==">
          <FiInstagram />
        </a>
      </footer>
      <ParticleComponent />
    </div>
  );
}

export default Base;
