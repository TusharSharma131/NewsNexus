import React from "react";
import Pictures from "../Photos";
import { formatDate, formatTime } from "../Reusable UI/Date&Time";
import Spinner from './../Reusable UI/Spinner';
import ErrorBox from './../Reusable UI/ErrorBox';
import { ScrollToTop } from 'react-simple-scroll-up'

const NewsCards = (props) => {

  const trimDescription = (description) => {
    if (description && description.trim()) {
      const words = description.split(" ");
      if (words.length > 15) {
        const des = words.slice(0, 15).join(" ") + "...";
        return des;
      }
    } else {
      return "No description available";
    }
  };

  return (
    <>
     <h1 className={`mb-24 text-center text-4xl font-semibold text-${props.mode === 'dark' ? 'white' : 'black'}`}>
      Top Headlines
      </h1>
      {props.loading && <Spinner/>}
      {props.error && <ErrorBox/>}
      {props.newsData && (
      <>
     <div className={`mb-5 mx-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-${props.mode === 'dark' ? 'white' : 'black'}`}>
      {/* Iterate over the categories in the newsData */}
      {Object.keys(props.newsData).map((category) => 
      (
        <div key={category} className="col-span-1">

          {/* Render a single card for each category */}
          <div className={`px-3 max-w-full rounded-2xl ${props.mode === 'dark' ? 'shadow' : 'shadow-lg'} ${props.mode === 'dark' ? 'bg-black' : 'bg-slate-200'} ${props.mode === 'dark' ? 'shadow-white' : 'shadow-gray-400'} overflow-hidden h-full`}>
            <header className="pt-3 pb-3 font-semibold">
              {`Top news - ${category}`}
              </header>
              <hr className="border border-gray-400" />

            {/* Iterate over the articles in the current category */}
            {props.newsData[category].map((article, index) => (
              <div key={index}>
                <h3 className={`text-xs text-${props.mode === 'dark' ? 'white' : 'black'} pt-3 pb-1 font-bold`}>
                  {article.title}
                </h3>
                <div className={`py-3 text-${props.mode === 'dark' ? 'white' : 'black'} flex items-center`}>
                  <section className="text-xs font-normal text-justify flex-grow pr-3">
                    {trimDescription(article.description)}
                  </section>
                  <img
                   className="rounded-2xl max-w-20 max-h-24 hover:scale-125 transition-all"
                   src={article.urlToImage || Pictures.first}
                   alt="News"
                  />
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer" 
                className={`text-${props.mode === 'dark' ? 'black' : 'white'} text-center rounded-2xl font-bold text-xs bg-${props.mode === 'dark' ? 'white' : 'black'} px-2 py-1 hover:bg-blue-500`}>
                Read more
                </a>
                <p className="pt-1 text-sm font-semibold text-red-500">
                  {`- ${article.source.name}`}
                </p>
                <p className="pt-1 pb-3 text-xs font-semibold text-slate-400">
                  {formatDate(article.publishedAt)} at {formatTime(article.publishedAt)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
    )}
    <ScrollToTop/>
    </>
  );
};

export default NewsCards;
