import Coin from "./Coin";
interface CoinlistProps {
    filteredCoins:Array<{
        id:number;
        name:string;
        current_price:number;
        symbol:string;
        maket_cap:string;
        volume:string;
        total_volume:number;
        image:string;
        price_change_percentage_24h:number;

    }>
}
export default function CoinList({filteredCoins}:CoinlistProps) {

  return (
    <div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.maket_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}
