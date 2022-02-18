import { VFC } from 'react';

interface CartProductProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartProduct: VFC<CartProductProps> = ({ id, name, price, quantity }) => {
  return (
    <div>{id} {name} {price} {quantity}</div>
  );
};

export default CartProduct;
