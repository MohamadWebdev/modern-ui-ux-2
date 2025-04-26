import Button from "./Button";

const NewExperience = () => {
  return (
    <section className="w-full z-[10] flex text-white justify-between flex-wrap max-md:flex-col max-md:items-center max-md:mt-10">
      <div className="flex max-sm:flex-col">
        <img className="w-[205.16px] mr-5 h-[277.16]" src="/img/Group1.png" alt="" />
        <img className="w-[205.16px] h-[277.16] mt-25" src="/img/Group2.png" alt="" />
      </div>

      <div className="md:max-w-[250px] max-w-[400px] flex flex-col gap-3 md:h-[393px] md:justify-end md:pb-10 max-md:mb-10 max-md:mt-15">
        <h1 className="font-Orbitron font-black text-[20.85px] w-full leading-[33.4px]">
          New Experience In Playing Game
        </h1>
        <p className="w-full text-[12px] text-[#ffffffcb]">
          You can try playing the game with a new style and of course a more
          real feel, like you are the main character in your game and adventure
          in this new digital world.
        </p>
        <Button title="Get it Now" style="gradient-2 mt-1" />
      </div>
    </section>
  );
};

export default NewExperience;
