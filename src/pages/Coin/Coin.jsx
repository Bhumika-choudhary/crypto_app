import { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

export default function Coin() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-H19jUy6QBm3dbrs5bUM6ZvdG" },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-H19jUy6QBm3dbrs5bUM6ZvdG" },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);
  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        
        <div className="coin-chart">
          <LineChart historicalData={historicalData}/>
        </div>

        <div className="coin-info">
          <div className="coin-info-row">
            <p>Current Price</p>
            <p>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</p>
          </div>
          <div className="coin-info-row">
            <p>Market Cap</p>
            <p>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</p>
          </div>
          <div className="coin-info-row">
            <p>24h High</p>
            <p>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</p>
          </div>
          <div className="coin-info-row">
            <p>24h Low</p>
            <p>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
}
