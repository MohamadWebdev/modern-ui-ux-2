import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewExperience from "@/components/NewExperience";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full px-5 max-w-[854px] mx-auto">
        <Navbar/>
        <Hero/>
        
        <NewExperience/> 
       
      </div>
    </div>
  );
};

export default page;
