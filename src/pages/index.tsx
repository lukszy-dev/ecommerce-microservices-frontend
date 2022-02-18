import Banner from '../components/Banner';
import Products from '../components/Products';

const HomePage = ({ data }) => {
  return (
    <>
      <Banner />
      <Products data={data} />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.HOST}/product/products`);
  const data = await res.json();

  return { props: { data } };
}

export default HomePage;
