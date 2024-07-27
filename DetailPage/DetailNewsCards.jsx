import React from "react";
import Pictures from "../Photos";
import { formatDate, formatTime } from "../Reusable UI/Date&Time";
import Spinner from "./../Reusable UI/Spinner";
import ErrorBox from "./../Reusable UI/ErrorBox";
import { ScrollToTop } from 'react-simple-scroll-up'


const DetailNewsCards = (props) => {

    const trimDescription = (description) => {
       if (description && description.trim()) {
        const words = description.split(" ");
         if (words.length > 15) {
          const des = words.slice(0, 30).join(" ") + "...";
            return des;
          }
        } else {
          return "No description available";
        }
      };

    return (
    <>
      {props.error ? (<ErrorBox />) : (
      <>
      {props.loading && <Spinner />}
      
      {props.newsData && (
        <>
  <h1 className={`mb-24 text-center text-${props.mode === 'dark' ? 'white' : 'black'} text-4xl font-semibold`}>
    All News - {props.capitalizeLetter(props.category)}
  </h1>
  <div className={`mb-10 mx-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 text-${props.mode === 'dark' ? 'white' : 'black'} `}>
    <div key={props.category} className="col-span-1">
      <div className={`px-12 max-w-full rounded-2xl ${props.mode === 'dark' ? 'shadow' : 'shadow-lg'} ${props.mode === 'dark' ? 'bg-black' : 'bg-slate-200'} ${props.mode === 'dark' ? 'shadow-white' : 'shadow-gray-400'} overflow-hidden h-full`}>
        <header className="py-4 font-semibold">
          {`${props.category}>`}
        </header>
        <hr className="border border-gray-400" />
        {props.newsData.map((article, index) => (
          <div key={index}>
            <h3 className={`text-sm text-${props.mode === 'dark' ? 'white' : 'black'} pt-5 font-bold`}>
              {article.title}
           </h3>
            <div className="py-1 flex items-center">
              <section className={`text-sm text-${props.mode === 'dark' ? 'white' : 'black'} font-normal text-justify flex-grow pr-7`}>
                {trimDescription(article.description)}
              </section>
              <img
                className="rounded-2xl max-w-24 max-h-24 hover:scale-125 transition-all duration-500 ease-linear"
                src={article.urlToImage || Pictures.first}
                alt="News"
              />
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${props.mode === 'dark' ? 'black' : 'white'} text-center rounded-2xl font-bold text-xs bg-${props.mode === 'dark' ? 'white' : 'black'} px-2 py-1 hover:bg-blue-500`}
            >
              Read more
            </a>
            <p className="pt-1 text-sm font-semibold text-red-500">
              {`- ${article.source.name}`}
            </p>
            <p className="pt-1 pb-5 text-xs font-semibold text-slate-400">
              {formatDate(article.publishedAt)} at{" "}
              {formatTime(article.publishedAt)}
            </p>
            <hr className="border border-gray-300" />
          </div>
        ))}
      </div>
     </div>
   </div>
    </>
   )}
 <ScrollToTop/>
  </>
  )}
 </>
);
};

export default DetailNewsCards;
