import React, { useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";
import "../css/App.css";
import axios from "axios";

function ListPage() {
  const [data, setData] = useState([]);

  const url = "https://api.tvmaze.com/search/shows?q=all";
  const fetchFunction = async () => {
    // const response = await fetch(url);
    // var result = await response.json();
    // setData(result);
  };

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        var result = response.data;
        setData(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="root_container">
      <h1 className="root_heading">Movies List</h1>
      <div className="root_container_card_box">
        {data.map((item, index) => {
          let { name, genres, image, summary, img, language, premiered } =
            item.show;
          return (
            <MoviesCard
              key={index}
              showName={name}
              genres={genres}
              image={image.medium}
              img={image.original}
              language={language}
              summary={summary}
              premiered={premiered}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListPage;
