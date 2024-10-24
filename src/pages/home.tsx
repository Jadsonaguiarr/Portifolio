import me from "@/assets/RSF_8258.jpg";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center h-[100%] mt-[6vh] lg:mt-[10vh] lg:flex-row lg:justify-between "
    >
      <img src={me} alt="me" className="w-[90%] rounded-[100%] lg:w-[30vw] lg:h-[58vh]" />
      <div className="text-white  w-[100%] lg:w-[30vw]">
        <h1
          className="text-[7.5vh] jersey-25 line anim-typewriter-1 "
        >
          Olá, eu sou
        </h1>
        <h1 className="text-[7.5vh] lg:text-[5vw] jersey-25 line anim-typewriter-2">
          Jadson Aguiar
        </h1>
        <h3 className="text-[3.1vh] lg:text-[2vw] text-zinc-400 jersey-25 line anim-typewriter-3">
          Desenvolvedor fullStack :)
        </h3>
      </div>
    </section>
  );
}

export default Home;
