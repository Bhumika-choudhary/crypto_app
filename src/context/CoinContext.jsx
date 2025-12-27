import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { CoinContext } from "./CoinContext";

const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        {
          headers: {
            "x-cg-demo-api-key": "CG-H19jUy6QBm3dbrs5bUM6ZvdG",
          },
        }
      );
      const data = await response.json();
      setAllCoin(data);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  }, [currency.name]);

  useEffect(() => {
    fetchAllCoin();
  }, [fetchAllCoin]);

  return (
    <CoinContext.Provider
      value={{ allCoin, currency, setCurrency, fetchAllCoin }}
    >
      {children}
    </CoinContext.Provider>
  );
};

CoinContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoinContextProvider;
