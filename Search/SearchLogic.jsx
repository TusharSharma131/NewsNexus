import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Everything_BASE_URL, corsProxy } from "../API/Api";
import { APIkey3 } from "../API/Api";

const SearchLogic = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);


  const getData = async () => {
    try {
      setLoading(true);
      if (search.trim() !== "") {
        const url = `https://news-nexus-application.netlify.app/.netlify/functions/fetchSearchResults?query=${encodeURIComponent(search)}&pageSize=${props.pageSize}&page=${page}`;
        const response = await axios.get(url);
        const ActualData = response.data.articles;
        setNewsData(ActualData);
        setTotalPage(Math.ceil(response.data.totalResults / props.pageSize));
        setLoading(false);
      } else {
        setNewsData([]);
        setTotalPage(0);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      setLoading(false);
    }
  };

  const handleByChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleBySubmit();
    }
  };

  const handleBySubmit = () => {
    getData();
  };

  useEffect(() => {}, [search, page]);

  const fetchMoreData = async () => {
    try {
      if (page < totalPage) {
        setLoading(true);
        setPage(page + 1);
        getData(); // Fetch new data based on the incremented page
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const fetchPreviousData = async () => {
    try {
      if (page > 1) {
        setLoading(true);
        setPage(page - 1);
        getData(); // Fetch new data based on the decremented page
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Search
        handleByChange={handleByChange}
        handleBySubmit={handleBySubmit}
        handleKeyPress={handleKeyPress}
        search={search}
      />
      <SearchResults
        loading={loading}
        error={error}
        newsData={newsData}
        mode={props.mode}
        search={search}
      />

      {totalPage && (
        <>
          <div className="mb-10 flex items-center justify-center">
            <button
              className="mx-3 rounded-full text-black text-3xl font-semibold bg-gray-300"
              disabled={page === 1}
              onClick={fetchPreviousData}
            >
              <IoIosArrowBack />
            </button>
            <span
              className={`font-bold text-black text-${
                props.mode === "dark" ? "white" : "black"
              }`}
            >
              Page <span className="text-red-600">{page}</span> of{" "}
              <span className="text-red-600">{totalPage}</span>
            </span>
            <button
              className="mx-3 rounded-full text-black text-3xl font-semibold bg-gray-300"
              disabled={page === totalPage}
              onClick={fetchMoreData}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SearchLogic;
