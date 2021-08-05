import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import styles from "./Coin.module.scss";
interface CoinProps {
  coin: {
    image: {
      large: string;
    };
    name: string;
    symbol: string;
    market_data: {
      current_price: {
        usd: string;
      };
    };
  };
}
function IdTsx({ coin }: CoinProps) {
  return (
    <>
      <Layout>
        <div className={styles.coin_page}>
          <div className={styles.coin_container}>
            <img src={coin.image.large} alt={coin.name} />

            <h1 className={styles.coin_name}>{coin.name}</h1>
            <p className={styles.coin_sticker}>{coin.symbol}</p>

            <p className={styles.coin_current}>
              {coin.market_data.current_price.usd}
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IdTsx;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const coin = await res.json();

  return {
    props: {
      coin,
    },
  };
};
