import CartProduct from '../components/CartProduct';

export default function CartPage({ data }) {
  return (
    <>
      <div>Cart</div>
      {
        data.items.map(product =>
          <CartProduct key={product.product_id} id={product.product_id} quantity={product.quantity} />
        )
      }
    </>
  )
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return response.status;
}

export async function getServerSideProps(context) {
  const authorizationCookie = context.req.headers.cookie;
  const token = authorizationCookie.split('=')[1];
  const data = await fetch(`${process.env.HOST}/order/cart`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(handleResponse);

  // Pass data to the page via props
  return { props: { data } };
}
