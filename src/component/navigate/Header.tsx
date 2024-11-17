import { MdLocalMovies } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full text-gray-200 bg-gray-900 h-14">
      <div className="flex items-center justify-between w-full h-full px-4">
        <p className="flex items-center gap-2">
          <MdLocalMovies className="w-8 h-8 text-emerald-400" />
          <span className="text-emerald-400 font-maven">Movie Zone</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
