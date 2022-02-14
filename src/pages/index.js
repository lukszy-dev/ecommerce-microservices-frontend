import Banner from '../components/Banner';
import Products from '../components/Products';

export default function HomePage({ data }) {
  return (
    <>
      <Banner />
      <Products data={data} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/product/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
