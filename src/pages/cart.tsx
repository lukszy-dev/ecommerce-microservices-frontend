import { VFC } from 'react';
import CartProduct from '../components/CartProduct';
import parseCookies from '../utils/parseCookies';

interface CartPageProps {
  data: any;
}

const CartPage: VFC<CartPageProps> = ({ data }) => {
  return (
    <>
      <div>Cart</div>
      {
        data?.items?.map(product =>
          <CartProduct
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        )
      }
    </>
  );
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return response.status;
}

export async function getServerSideProps(context) {
  const cookies = parseCookies(context.req.headers.cookie);
  const data = await fetch(`${process.env.HOST}/order/cart`, {
      headers: {
        'Authorization': 'Bearer ' + cookies['Authorization']
      }
    })
    .then(handleResponse);

  // Pass data to the page via props
  return { props: { data } };
}

export default CartPage;