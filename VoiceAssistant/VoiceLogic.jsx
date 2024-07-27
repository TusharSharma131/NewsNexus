import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Everything_BASE_URL } from "../API/Api";
import { APIkey3 } from "../API/Api";
import VoiceCard from './VoiceCard';

const VoiceLogic = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      if (props.query) {
        const url = `${Everything_BASE_URL}?q=${props.query}&page=${page}&pageSize=${props.pageSize}&apiKey=${APIkey3}`;
        const response = await axios.get(url);
        const ActualData = response.data.articles;
        setNewsData(ActualData);
        setTotalPage(Math.ceil(response.data.totalResults / props.pageSize));
        setLoading(false);
      } else {
        setNewsData([]); // Clear the news data if the search term is empty
        setTotalPage(0);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [props.query, page]);

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
      <VoiceCard 
      loading={loading} 
      error={error} 
      newsData={newsData} 
      query={props.query} 
      mode={props.mode}
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

export default VoiceLogic;



{/* <VoiceCard 
      loading={loading} 
      error={error} 
      newsData={newsData} 
      query={props.query} 
      mode={props.mode}
/> */}

// const url = `${Everything_BASE_URL}?q=${props.query}&apiKey=${APIkey3}&page=${page}&pageSize=${props.pageSize}`;

//import VoiceCard from './VoiceCard';