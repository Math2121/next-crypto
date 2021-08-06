import Image from "next/image";
import Link from "next/link";
import style from "./Coin.module.scss";
interface CoinProps {
  name: string;
  id: number;
  price: number;
  symbol: string;
  marketcap: string;
  volume: number;
  image: string;
  priceChange: number;
}

function Coin({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}: CoinProps) {
  return (
    <>
      <Link href="/coin/[id]" as={`/coin/${id}`}>
        <a>
          <div className={style.coin_container}>
            <div className={style.coin_row}>
              <div className={style.coin}>
                 <Image src={image} alt={name} className={style.coin_img}   layout="responsive" width={30} height={30}/>
                <h1 className={style.coin_h1}>{name}</h1>
                <p className={style.coin_symbol}>{symbol}</p>
              </div>
              <div className={style.coin_data}>
                <p className={style.coin_price}>${price}</p>
                <p className={style.copin_volume}>${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                  <p className={`${style.coin_percent}, ${style.red}`}>
                    {priceChange.toFixed(2)}%
                  </p>
                ) : (
                  <p className={`${style.coin_percent}, ${style.green}`}>
                    {priceChange.toFixed(2)}%
                  </p>
                )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default Coin;
