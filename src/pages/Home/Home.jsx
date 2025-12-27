import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";



export default function Home() {
  const { allCoin, currency } = useContext(CoinContext);

  // Must be an array
  const [displayCoin, setDisplayCoin] = useState([]);

const [input, setInput] = useState('');

const inputHandler = (event) =>{
  setInput(event.target.value)
  if(event.target.value === ""){
    setDisplayCoin(allCoin)
  }
}


const searchHandler = async (event)=>{
  event.preventDefault()
  const coins = await allCoin.filter((item)=>{
   return item.name.toLowerCase().includes(input.toLowerCase())
  })

setDisplayCoin(coins);
}

  // Update displayed coins when allCoin updates
  useEffect(() => {
    if (Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
    }
  }, [allCoin]);

  // Update page title when currency changes
  useEffect(() => {
    document.title = `Top Coins in ${currency.name.toUpperCase()}`;
  }, [currency]);

  return (
    <div className="home">

      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world’s largest cryptocurrency marketplace. Sign
          up to explore more about cryptos
        </p>

        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list="coinlist" value={input} type="text" placeholder="Search crypto..."  required/>

          <datalist id="coinlist">
            {allCoin.map((item, index)=>(
                <option key={index} value={item.name}>
                </option>
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">

        <div className="table-layout table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {displayCoin?.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>

            <div className="coin-info">
              <img src={item.image} alt={item.name} />
              <p>
                {item.name} ({item.symbol.toUpperCase()})
              </p>
            </div>

            {/* Correct dynamic price */}
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p className={item.price_change_percentage_24h>0? "green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
          <p className="market-cap">{currency.symbol} {item.market_cap.toLocaleString()}</p>

          </Link>
        ))}
      </div>
    </div>
  );
}
