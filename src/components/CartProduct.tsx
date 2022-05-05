import { VFC } from 'react';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/outline';
import { useCart } from '../context/cart/CartContext';

interface CartProductProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartProduct: VFC<CartProductProps> = ({ id, name, price, quantity }) => {
  const { removeItem } = useCart();

  const handleOnRemove = () => {
    removeItem(id, 1);
  };

  return (
    <div className="relative flex flex-row items-center justify-between rounded-3xl py-3 px-6 mb-2 bg-gray-100">
      <Image
        height={96}
        width={96}
        objectFit="contain"
        alt={name}
        src="https://sneakerstudio.pl/pol_pm_Plecak-Fjallraven-Kanken-F23510-166-1021669_1.jpg"
      />
      <div className="flex flex-col w-96">
        <span className="font-bold">{name}</span>
        <span>Price: {price}</span>
        <span>{quantity}</span>
      </div>
      <TrashIcon
        className="h-[32px] w-[32px] cursor-pointer"
        onClick={handleOnRemove}
      />
    </div>
  );
};

export default CartProduct;
