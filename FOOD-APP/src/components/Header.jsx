import { LOGO_URL } from "../components/utils/constant";

const Header = () => {
  return (
    <div className="w-full flex justify-evenly items-center shadow-2xl">
      <div className="p-3 flex text-2xl font-bold">
        <img className="w-12 animate-pulse" src={LOGO_URL} />
        <h3 className="mt-6 text-orange-500 antialiased">Food App</h3>
      </div>
    </div>
  );
};

export default Header;
