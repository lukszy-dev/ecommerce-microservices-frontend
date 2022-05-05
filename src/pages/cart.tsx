import { VFC } from 'react';
import CartProduct from '../components/CartProduct';
import Button from '../components/Button';
import { useCart } from '../context/cart/CartContext';
import parseCookies from '../utils/parseCookies';

interface CartPageProps {
  data: any;
}

const CartPage: VFC<CartPageProps> = ({ data }) => {
  const { items, count } = useCart();

  return (
    <>
      <div>Cart</div>
      <div className="flex flex-row">
        <div className="grow">
          {(data?.items || items).map((product) => (
            <CartProduct
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
        <div className="w-64 p-6 ml-6 rounded-3xl bg-gray-100">
          Subtotal (items: {count})<Button classes="w-full">Checkout</Button>
        </div>
      </div>
    </>
  );
};

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
      Authorization: 'Bearer ' + cookies['Authorization'],
    },
  }).then(handleResponse);

  // Pass data to the page via props
  return { props: { data } };
}

export default CartPage;
