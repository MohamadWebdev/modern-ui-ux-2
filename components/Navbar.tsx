import Button from "./Button";
import ResponsiveNavbar from "./RsponsiveNavbar";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between mt-5">
      <h1 className="font-IMFellGreatPrimerSC text-[23.35px] text-white cursor-pointer">
        Light
      </h1>

      <div className="flex justify-center items-center">
        <ul className="font-medium md:flex hidden mr-10 gap-10 selected transition-all">
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

        {/* responsive navbar */}
        <ResponsiveNavbar />

        <Button style="gradient-1 md:flex hidden justify-center items-center" title="Sign In" />
      </div>
    </div>
  );
};

export default Navbar;
