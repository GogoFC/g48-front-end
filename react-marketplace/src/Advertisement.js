import React from "react";

const Advertisement = (props) => {
  const { adData, buttonClickHandler } = props;

  return (
    <div className="card mb-4 col-md-4">
      <img className="card-img-top" src={adData.image} alt={adData.image} />
      <div className="card-body">
        <h5 className="card-title">{adData.title}</h5>
        <p className="card-text">{adData.description}</p>
        <p className="card-text">Contact: {adData.contact}</p>
      </div>
      <div className="card-footer text-center">
        <button
          className="btn btn-info btn-block"
          onClick={() => buttonClickHandler(adData.contact)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
