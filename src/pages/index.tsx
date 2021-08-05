import { GetServerSideProps } from "next";
import { useState } from "react";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

export default function Home({ filteredCoins }) {

  const [seacrh,setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(seacrh.toLowerCase())
  )

  function handleChange(e){
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange}/>
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );


  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
