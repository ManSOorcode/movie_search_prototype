import { FiType } from "react-icons/fi";
import { CardProps } from "../../types/types";
import { FaCalendar, FaImdb } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdOpenInNew } from "react-icons/md";
import { trunctactHandler } from "../utils/helper";

const Card: React.FC<CardProps> = ({ moviesData, selectCode }) => {
  return (
    <div className="relative rounded-md bg-white/60">
      <div className="w-full h-[400px]">
        <img
          src={moviesData.Poster}
          alt={moviesData.Title}
          className="w-full h-full bg-cover rounded-md"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 grid gap-2 px-4 py-4 bg-black/80 rounded-bl-md rounded-br-md">
        <h2
          className="flex items-center gap-2 break-words"
          onClick={() => selectCode(moviesData?.imdbID)}
        >
          <MdDriveFileRenameOutline className="w-5 h-5" />
          <span className="font-semibold hover:text-[#42A5A5] group cursor-pointer flex gap-1">
            {trunctactHandler(moviesData.Title, 20)}
            <MdOpenInNew className="w-4 h-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </span>
        </h2>

        <p className="flex items-center gap-2">
          <FiType className="w-4 h-4" />
          <span className="text-sm font-semibold text-blue-400">
            {moviesData.Type}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <FaCalendar className="w-4 h-4" />
          <span className="text-sm font-semibold text-rose-400">
            {moviesData.Year}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <FaImdb className="w-4 h-4" />
          <span className="text-sm text-[#9cd311] font-semibold">
            {moviesData.imdbID}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
