import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="md:mt-20 z-[1] mt-10 flex w-full md:flex-row flex-col max-md:items-center justify-between h-auto flex-wrap max-md:gap-10">
      <div className="text-white">
        <h1 className="font-Orbitron text-[31.69px] font-black leading-[43.4px] text-left max-w-[333px]">
          Let’s Explore Three-Dimensional visual
        </h1>
        <p className="text-[12px] text-[#ffffffd0] mt-8 max-w-[314.41px]">
          With virtual technology you can see the digital world feel more real
          and you can play the game with a new style.
        </p>
        <div className="flex mt-8 gap-5">
          <Button title="Get it Now" style="gradient-1" />
          <button className="text-[11.06px] font-bold">Explore Device</button>
        </div>
        <div className="mt-8 flex">
          {[...Array(4)].map((_, i) => (
            <Image
              width={1000}
              height={1000}
              src="/img/user.png"
              alt="user"
              key={i}
              className={`${i > 0 && "-ml-2"} outline rounded-full w-[32px] h-[32px]`}
            />
          ))}

          <div className="flex items-center ml-5 gap-2">
            <Image
              width={1000}
              height={1000}
              className="w-[8.34px] h-[8.34px]"
              src="/img/circle.png"
              alt="circle"
            />
            <span className="text-[10.01px] font-semibold">
              400k people online
            </span>
          </div>
        </div>
      </div>

      <div className="sm:w-[380px] w-[300px] sm:h-[510px] h-[430px] relative text-white flex">
        <Image
          width={1000}
          height={1000}
          src="/img/hero-image.png"
          alt="hero-image"
          className="w-full absolute z-5"
        />
        <div className="z-10 bottom-15 gap-5 absolute w-full -ml-2 flex flex-col justify-center items-center">
          <h1 className="font-Orbitron font-extrabold sm:text-[19.59px] text-[16px] w-full text-center">
            Cinematic Virtual Reality
          </h1>

          <hr className="w-[151.62px]" />

          <span className="text-[11.06px] text-[#ffffffaa] max-w-[203.17px] text-center">
            Let’s be the best for more real and effective results and ready to
            explore the limitless world that we have prepared for you.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
