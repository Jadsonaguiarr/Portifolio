function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-between h-[100%] mb-[10vh]"
    >
      <div className="text-white flex flex-col items-center gap-2">
        <h1 className="text-[5vh] font-bold lg:text-[3vw]">Sobre mim</h1>
        <span className="text-center text-[2.5vh] w-[90%] leading-[5vh] lg:text-[1.5vw] lg:2-[60%]">
          Sou desenvolvedor FullStack, formado no nivel médio de informatica
          pelo IFRN e atual graduando no curso de Engenharia de Software. Possuo
          experiência em projetos de pequena a grande escala utilizando NodeJS,
          ReactJs, express, prisma e sql puro. Também tenho conhecimento sobre
          MongoDB, Tailwindcss, além de possuir conhecimento em metodologias
          ageis como Scrum e Kanban. 
        </span>
      </div>
    </section>
  );
}

export default About;
