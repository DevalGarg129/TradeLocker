import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            {learnMore ? (
              <a href={learnMore}>Learn More</a>
            ) : (
              <button type="button" className="btn btn-link p-0" onClick={(e)=>e.preventDefault()}>Learn More</button>
            )}
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt={`${productName} screenshot`} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
