import CardSkill from "@/components/cardSkill";

function Skills() {
  return (
    <section id="skills" className="h-[100%] w-full mb-[80vh] lg:mb-[60vh]">
      <h1 className="text-white pb-[2%] text-[5vh] mb-[2vh] font-bold lg:text-[3vw]">Habilidades</h1>
      <div className="flex flex-wrap gap-[4vw]  lg:justify-center w-full ">
        <a href="https://www.typescriptlang.org/">
          <CardSkill
            title="Typescript"
            type="Backend"
            color="bg-[#0A4BA0]"
            effectColor="hover-effect-blue"
          />
        </a>
        <a href="https://nodejs.org/pt">
          <CardSkill
            title="NodeJS"
            type="Backend"
            color="bg-[#3b8b08]"
            effectColor="hover-effect-green"
          />
        </a>
        <a href="https://react.dev/">
          <CardSkill
            title="React"
            type="Frontend"
            color="bg-[#6F42C1]"
            effectColor="hover-effect-purple"
          />
        </a>
        <a href="https://tecnoblog.net/responde/o-que-e-sql/">
          <CardSkill
            title="SQL"
            type="Backend"
            color="bg-[#CC2927]"
            effectColor="hover-effect-red"
          />
        </a>
        <a href="https://www.mongodb.com/pt-br">
          <CardSkill
            title="MongoDB"
            type="Backend"
            color="bg-[#00B2A9]"
            effectColor="hover-effect-cyan"
          />
        </a>
        <a href="https://nextjs.org/">
          <CardSkill
            title="NextJS"
            type="FullStack"
            color="bg-[#B0B0B0]"
            effectColor="hover-effect-gray"
          />
        </a>
        <CardSkill
          title="Comunicação"
          type="Social"
          color="bg-[#713f12]"
          effectColor="hover-effect-brown"
        />
        <CardSkill
          title="Liderança"
          type="Social"
          color="bg-[#713f12]"
          effectColor="hover-effect-brown"
        />
        <CardSkill
          title="Criatividade"
          type="Social"
          color="bg-[#713f12]"
          effectColor="hover-effect-brown"
        />
      </div>
    </section>
  );
}

export default Skills;
