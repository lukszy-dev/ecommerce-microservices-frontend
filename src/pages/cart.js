export default function CartPage({ data }) {
  return (
    <>
      <div>Cart</div>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/order/cart`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
