import React, { useEffect, useState } from "react";
import { topHeadlines_BASE_URL, APIkey1, corsProxy } from "../API/Api";
import NewsCards from "./NewsCards";
import { categories } from "./TopNewsCategories";
import axios from "axios";
import Search from "../Search/Search";

const TopNews = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const getData = async () => {
      try {
        const Data = {};

        for (let category of categories) {
          const response = await axios.get(
            `${corsProxy}${topHeadlines_BASE_URL}?country=in&category=${category}&apiKey=${APIkey1}`
          );
          Data[category] = response.data.articles.slice(0, 3);
        }
        setNewsData(Data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getData();
  }, []);

  return(
    <>
    <Search/>
    <NewsCards 
    newsData = {newsData} 
    loading={loading}
    error={error}
    mode={props.mode}
    />
    </>
  )
    
};

export default TopNews;
