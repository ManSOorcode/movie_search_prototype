import { useState } from "react";

import Search from "../navigate/Search";
import Card from "../UI/Card";
import { MoviesGetResponse } from "../../types/types";
import { useGetDetailsQuery, useGetQuery } from "../../api/query";
import Pagination from "../pagination/Pagination";
import DetailsModal from "../UI/DetailsModal";

const Main = () => {
  const [moviename, setMovieName] = useState("movies");
  const [currentPage, setPage] = useState(1);
  const [imdbcode, setImdbcode] = useState("");

  //movie list by search Filter
  const { data, error, isError, isLoading } = useGetQuery(
    moviename,
    currentPage
  );

  //Movie Details
  const {
    data: detailsData,
    error: detailsError,
    isError: detailsIsError,
    isLoading: detailsIsLoading,
  } = useGetDetailsQuery(imdbcode);

  const hadnlingForSearch = (value: string) => {
    setMovieName(value);
  };

  const pageChangeshandler = (page: number) => {
    setPage(page);
  };

  const imdbCodehandler = (code: string) => {
    setImdbcode(code);
  };

  console.log(detailsData, imdbcode);

  console.log(data, error, isError);
  const closeHandler = () => {
    setImdbcode("");
  };
  return (
    <>
      {/* Movie Detail Modal */}
      {imdbcode && (
        <DetailsModal
          details={detailsData}
          close={closeHandler}
          error={detailsError}
          isError={detailsIsError}
          isLoading={detailsIsLoading}
        />
      )}
      <div className="grid justify-center gap-6 px-4 mb-6">
        {/* Filter for Movie */}
        <Search
          searchvalue={moviename}
          searchhandler={(value) => hadnlingForSearch(value)}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Card */}
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                  Loading...
                </div>
              </div>
            ))
          ) : isError ? (
            <p className="w-full col-span-3 text-center">💣✨{error.message}</p>
          ) : (
            data?.Search?.map((mov: MoviesGetResponse, i: number) => (
              <Card
                moviesData={mov}
                selectCode={(code) => imdbCodehandler(code)}
                key={i}
              />
            ))
          )}
        </div>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          onPageChange={(value) => pageChangeshandler(value)}
          totalPages={data?.totalResults ?? 0}
        />
      </div>
    </>
  );
};

export default Main;
