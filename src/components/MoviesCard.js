import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoviesCard({
  showName,
  genres,
  image,
  language,
  img,
  summary,
  premiered,
}) {
  const navigate = useNavigate();
  const fullView = () => {
    navigate("/summary", {
      state: { showName, genres, language, summary, img, premiered },
    });
  };
  return (
    <div className="card_container">
      <img className="movie_img" src={image} />
      <h1>{showName}</h1>
      <h3>
        {genres.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </h3>
      <button className="readmore_button" onClick={fullView}>
        Read More
      </button>
    </div>
  );
}

export default MoviesCard;
