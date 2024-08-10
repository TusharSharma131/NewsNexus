import React from 'react'
import { useState, useEffect } from 'react';
import DetailNewsCards from './DetailNewsCards';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import Search from '../Search/Search';

export const DetailNews = (props) => {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null)

  
  const getData = async() => {
    try {
      const url = `https://news-nexus-application.netlify.app/.netlify/functions/fetchDetailNews?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
      const parsedData = await axios.get(url);
      const ActualData = parsedData.data.articles;
      setNewsData(ActualData);
      setTotalPages(Math.ceil(parsedData.data.totalResults / props.pageSize));
      setLoading(false);
    } catch(error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [props.category, page]);

  const fetchMoreData = async () => {
    try {
      if (page < totalPages) {
        setPage(page + 1);
        getData();
      }
    } catch(error) {
      console.log(error);
      setError(true);
    }
  };

  const fetchPreviousData = async () => {
    try {
      if (page > 1) {
        setPage(page - 1);
        getData();
      }
    } catch(error) {
      console.log(error);
      setError(true);
    }
  };

  const capitalizeLetter = (first) =>{
     return first.charAt(0).toUpperCase() + first.slice(1);
  }

  const category = props.category;
  return (
    <>
     <Search/>
     <DetailNewsCards 
      capitalizeLetter={capitalizeLetter}
      category = {category}
      loading={loading}
      error={error}
      newsData={newsData}
      fetchMoreData={fetchMoreData}  
      mode={props.mode}  
     />
     {totalPages && (
      <>
      <div className='mb-10 flex items-center justify-center'>
       <button className='mx-3 rounded-full text-black text-3xl font-semibold bg-gray-300'
       disabled={page === 1} onClick={fetchPreviousData}>
        <IoIosArrowBack />
       </button>
       <span className={`font-bold text-black text-${props.mode === 'dark' ? 'white' : 'black'}`}>
        Page <span className='text-red-600'>{page}</span> of{" "}
        <span className='text-red-600'>{totalPages}</span>
        </span>
       <button className='mx-3 rounded-full text-black text-3xl font-semibold bg-gray-300'
        disabled={page === totalPages} onClick={fetchMoreData}>
         <IoIosArrowForward />
       </button>
      </div>
      </>
     )}
    </>
  )
}
export default DetailNews;
