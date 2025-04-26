import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewExperience from "@/components/NewExperience";

const page = () => {
  return (
    <section className="w-full">
      <div className="w-full px-5 max-w-[854px] mx-auto relative lg:overflow-x-visible overflow-x-hidden">
        <div className="gradient_bg absolute z-[-1] sm:-top-[400px] -top-[350px] left-0 w-[552.48px] h-[552.48px]"/>

        <div className="gradient_bg absolute z-[-1] object-contain md:top-[100px] sm:top-[300px] top-[350px] sm:-right-[450px] -right-[300px] w-[667.97px] h-[667.97px]"/>

        <div className="gradient_bg absolute z-[-1] md:top-[280px] sm:top-[900px] top-[1000px] sm:-left-[450px] -left-[300px] w-[675.53px] h-[675.53px]"/>
        <Navbar/>
        <Hero/>
        <NewExperience/> 
      </div>
    </section>
  );
};

export default page;
