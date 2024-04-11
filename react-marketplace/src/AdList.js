import React from "react";
import Advertisement from "./Advertisement";

const AdList = (props) => {
  const handleButtonClick = (input) => {
    alert(`contact:  ${input}`);
  };

  return (
    <div className="container">
      <h2>Advertisement List</h2>

      <div className="row">
        {props.adList.map((advertisement) => (
          <Advertisement
            adData={advertisement}
            buttonClickHandler={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AdList;
