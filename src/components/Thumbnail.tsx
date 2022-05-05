import { useCallback, VFC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon } from '@heroicons/react/outline';

import { useCart } from '../context/cart/CartContext';

interface ThumbnailProps {
  product: any;
}

const Thumbnail: VFC<ThumbnailProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleOnAdd = useCallback(() => {
    product.quantity = 1;
    addItem(product);
  }, [product, addItem]);

  return (
    <div className="relative md:h-60 md:w-60 w-full max-w-lg flex flex-col flex-wrap rounded-3xl overflow-hidden">
      <div className="h-full">
        <Image layout="fill" alt={product.name} src="https://sneakerstudio.pl/pol_pm_Plecak-Fjallraven-Kanken-F23510-166-1021669_1.jpg" />
      </div>

      <div className="absolute h-[80px] w-full bottom-0">
        <div
          className="w-full h-[20px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
          style={{ clipPath: 'polygon(100% 5%, -15% 100%, 100% 100%)' }}
        ></div>
        <div className="bottom-0 h-[60px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white">
          <Link passHref href={`/product/${product.id}`}>
            <div className="cursor-pointer flex flex-col leading-tight px-6 pt-1">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </Link>
          <ShoppingBagIcon
            onClick={handleOnAdd}
            className="cursor-pointer absolute h-[40px] w-[40px] bottom-[16px] right-[16px] hover:bg-red-500 p-1 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
