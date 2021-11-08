export default function Product({ product }) {
  return (
    <>
      <div>{product.name} {product.price}</div>
      <div>{product.description}</div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.HOST}/product/${id}`)
  const data = await res.json()

  return { props: { product: data } }
}

