import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; 

const SearchLogic = (props) => {
  const [newsData, setNewsData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(""); 
  const [page, setPage] = useState(1); 
  const [articlesPerPage] = useState(6); // Number of articles to show per page

  // Fetch data from the API
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://saurav.tech/NewsAPI/everything/bbc-news.json`);
      setNewsData(response.data.articles); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      setLoading(false);
    }
  };

  // Handle search input change
  const handleByChange = (event) => {
    setSearch(event.target.value); 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleBySubmit(); 
    }
  };

  const handleBySubmit = () => {
    if (search.trim() !== "") {
      getData(); 
    } else {
      setNewsData([]); // Clear the news data if the search term is empty
    }
    setPage(1); // Reset to the first page whenever a new search is submitted
  };

  // Filter articles based on the search term
  const filteredArticles = newsData.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination: Calculate the indices for slicing
  const indexOfLastArticle = page * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Handle page change
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

  // Reset articles if search is cleared
  useEffect(() => {
    if (search.trim() === "") {
      setNewsData([]); // Clear articles when search is empty
    }
  }, [search]);

  return (
    <>
      <Search
        handleByChange={handleByChange}
        handleKeyPress={handleKeyPress}
        search={search}
      />
      <SearchResults
        loading={loading}
        error={error}
        mode={props.mode}
        search={search}
        newsData={currentArticles} // Pass the current articles for the current page
      />
      
      {/* Pagination Controls */}
      {totalPages > 1 && (  // Only show pagination if there are multiple pages
        <div className='mb-10 flex items-center justify-center'>
          <button 
            className='mx-3 rounded-full text-black text-3xl font-semibold bg-gray-300'
            disabled={page === 1} 
            onClick={fetchPreviousData}>
            <IoIosArrowBack />
          </button>
          <span className={`font-bold text-${props.mode === 'dark' ? 'white' : 'black'}`}>
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
  );
};

export default SearchLogic;