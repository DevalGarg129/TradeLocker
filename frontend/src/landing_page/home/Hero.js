import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img src="/media/homeHero.png" alt="Stock market investment platform" className="mb-5 img-fluid" />
        </div>
        <div className="col-12">
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <div className="d-flex justify-content-center">
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: "200px" }}>
              Signup Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
