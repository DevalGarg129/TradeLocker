import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

function MarketPage() {
  const [stocks, setStocks] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStocks = async () => {
      try {
        const res = await axios.get(`${API_URL}/stocks`);
        setStocks(res.data);
      } catch (err) {
        setError("Unable to load market data. Please try again later.");
      }
    };
    loadStocks();
  }, []);

  const filteredStocks = stocks.filter((stock) => {
    const lowerQuery = query.toLowerCase();
    return (
      stock.symbol.toLowerCase().includes(lowerQuery) ||
      stock.name.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <section className="market-page py-5">
      <div className="container">
        <div className="row gy-4 align-items-center mb-4">
          <div className="col-lg-8">
            <h1 className="display-6">Market watch</h1>
            <p className="text-muted">
              Explore popular NSE stocks, track live prices, and view current market momentum in a clean Zerodha-style dashboard.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="input-group">
              <span className="input-group-text bg-white">Search</span>
              <input
                type="search"
                className="form-control"
                placeholder="Search by symbol or name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {error && <div className="alert alert-warning">{error}</div>}

        <div className="row gy-3">
          {filteredStocks.length === 0 && !error ? (
            <div className="col-12">
              <div className="alert alert-secondary mb-0">
                No stocks found for your search. Try a different company or symbol.
              </div>
            </div>
          ) : (
            filteredStocks.map((stock) => (
              <div className="col-md-6" key={stock.symbol}>
                <div className="card market-card shadow-sm border-0 h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="mb-1">{stock.symbol}</h5>
                        <p className="text-muted small mb-0">{stock.name}</p>
                      </div>
                      <span className={`badge ${stock.change.startsWith("+") ? "bg-success" : "bg-danger"}`}>
                        {stock.changePercent}
                      </span>
                    </div>
                    <div className="mb-3">
                      <h2 className="fw-bold mb-0">₹{stock.price.toFixed(2)}</h2>
                      <p className="text-muted small mb-0">Volume: {stock.volume}</p>
                    </div>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <button className="btn btn-outline-primary btn-sm">View</button>
                      <span className={`fw-semibold ${stock.change.startsWith("+") ? "text-success" : "text-danger"}`}>
                        {stock.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MarketPage;
