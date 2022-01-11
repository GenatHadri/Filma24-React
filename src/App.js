import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import TrendingMovies from "./components/TrendingMovies";
import requests from "./requests";
import axios from "./axios";
import Pagination from "./components/Pagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopular);
      setMovies(request.data.results);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, [requests.fetchPopular]);

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <TrendingMovies movies={currentMovies} />
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={movies.length}
            paginate={paginate}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
