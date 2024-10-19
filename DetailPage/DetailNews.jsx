import React, { useState, useEffect } from 'react';
import DetailNewsCards from './DetailNewsCards';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import Search from '../Search/Search';

export const DetailNews = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [articlesPerPage] = useState(6); 

  const getData = async () => {
    try {
      const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`;
      const parsedData = await axios.get(url);
      const ActualData = parsedData.data.articles;
      setNewsData(ActualData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [props.category, page]);

  // Calculate the indices for slicing
  const indexOfLastArticle = page * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsData.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(newsData.length / articlesPerPage);

  const fetchMoreData = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const fetchPreviousData = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const capitalizeLetter = (first) => {
    return first.charAt(0).toUpperCase() + first.slice(1);
  }

  const category = props.category;

  return (
    <>
      <Search />
      <DetailNewsCards 
        capitalizeLetter={capitalizeLetter}
        category={category}
        loading={loading}
        error={error}
        newsData={currentArticles}  // Use currentArticles for pagination
        mode={props.mode}
      />
      {totalPages > 1 && (  // Only show pagination if there are multiple pages
        <div className='mb-10 flex items-center justify-center'>
          <button 
            className='mx-3 rounded-full text-black text-3xl font-semibold bg-gray-300'
            disabled={page === 1} 
            onClick={fetchPreviousData}>
            <IoIosArrowBack />
          </button>
          <span className={`font-bold text-black text-${props.mode === 'dark' ? 'white' : 'black'}`}>
            Page <span className='text-red-600'>{page}</span> of{" "}
            <span className='text-red-600'>{totalPages}</span>
          </span>
          <button 
            className='mx-3 rounded-full text-black text-3xl font-semibold bg-gray-300'
            disabled={page === totalPages} 
            onClick={fetchMoreData}>
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </>
  )
}

export default DetailNews;