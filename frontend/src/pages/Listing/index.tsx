import React, { useEffect, useState } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

const Listing = () => {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`).then((res) => {
      const data = res.data as MoviePage;
      setPageNumber(data.number);
    });
  }, []);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
