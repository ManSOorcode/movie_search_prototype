import { MovieGetDetailsProps } from "../../types/types";

const DetailsModal: React.FC<MovieGetDetailsProps> = ({
  details,
  close,
  error,
  isError,
  isLoading,
}) => {
  console.log(details);

  const preventHadnler = (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center px-4 bg-black/70"
      onClick={close}
    >
      {isLoading ? (
        <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            Loading...
          </div>
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <p className="w-full col-span-3 text-center">💣✨{error?.message}</p>
        </div>
      ) : (
        <div
          className="w-full max-w-[400px] h-[600px] md:max-w-[800px] md:h-auto rounded-lg overflow-hidden bg-gray-950 shadow-lg grid md:grid-cols-2"
          onClick={preventHadnler}
        >
          {/* Movie Poster Section */}
          <div className="relative h-60 md:h-auto">
            <img
              className="absolute top-0 left-0 w-full h-full bg-cover"
              src={details?.Poster}
              alt={details?.Title}
            />
          </div>

          {/* Movie Details Section */}
          <div className="p-6 overflow-y-scroll text-white">
            <h1 className="mb-2 text-2xl font-bold ">{details?.Title}</h1>
            <p className="mb-4 text-sm text-gray-400 ">{details?.Plot}</p>

            {/* Rating and Year */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="font-semibold">
                ⭐ {details?.imdbRating || "0"}
              </span>
              <span className="text-gray-400 "> {details?.Year || "----"}</span>
            </div>

            {/* Genre */}
            <p className="mb-2 text-sm ">
              <span className="font-semibold ">Genre:</span>{" "}
              {details?.Genre || "--"}
            </p>

            {/* Director */}
            <p className="mb-2 text-sm ">
              <span className="font-semibold">Director:</span>{" "}
              {details?.Director || "N/A"}
            </p>

            {/* Actors */}
            <p className="mb-2 text-sm ">
              <span className="font-semibold">Actors:</span>{" "}
              {details?.Actors || "N/A"}
            </p>

            {/* Additional Details in Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm ">
              <p>
                <span className="font-semibold">Runtime:</span>{" "}
                {details?.Runtime || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Language:</span>{" "}
                {details?.Language || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Awards:</span>{" "}
                {details?.Awards || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Box Office:</span>{" "}
                {details?.BoxOffice || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Production:</span>{" "}
                {details?.Production || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Rated:</span>{" "}
                {details?.Rated || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Writer:</span>{" "}
                {details?.Writer || "N/A"}
              </p>
              <p>
                <span className="font-semibold">DVD Release:</span>{" "}
                {details?.DVD || "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsModal;
