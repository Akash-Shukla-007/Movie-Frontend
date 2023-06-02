import React from "react";
import { useLocation } from "react-router-dom";

function Summary() {
  const data = useLocation();
  let { showName, genres, img, summary, language, premiered } = data.state;
  return (
    <div className="root_container ">
      <h1 className="root_heading">Summary</h1>
      <div className="summary_container">
        <img className="summary_image" src={img} />
        <div className="summary_depth_container">
          <h1>{showName}</h1>
          <p>
            Genres :
            {genres.map((item, index) => {
              return (
                <span
                  key={index}
                  style={{ marginRight: "0.5em", marginLeft: "0.5em" }}
                >
                  {item}
                </span>
              );
            })}
          </p>
          <p>Release Date : {premiered}</p>
          <p>Language : {language}</p>
          <p className="para_summary">{summary.slice(3, summary.length - 4)}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
