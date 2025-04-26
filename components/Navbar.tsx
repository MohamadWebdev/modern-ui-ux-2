import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between mt-5">
      <h1 className="font-IMFellGreatPrimerSC text-[23.35px] text-white">
        Light
      </h1>

      <div className="flex justify-center items-center">
        <ul className="font-medium flex mr-10 gap-10 selected transition-all">
          <li id="Home" className="cursor-pointer">
            Home
          </li>
          <li id="Company" className="cursor-pointer">
            Company
          </li>
          <li id="Features" className="cursor-pointer">
            Features
          </li>
        </ul>

        <Button style="gradient-1" title="Sign In" />
      </div>
    </div>
  );
};

export default Navbar;
