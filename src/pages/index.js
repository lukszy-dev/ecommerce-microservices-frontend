import Thumbnail from '../components/Thumbnail'
import Banner from '../components/Banner'

export default function HomePage({ data }) {
  return (
    <>
      <Banner />
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center">
        {data.map(product => <Thumbnail product={product} key={product.id} />)}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/product/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
