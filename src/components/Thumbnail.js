import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/outline'

export default function Thumbnail({ product }) {
  const addToCart = async () => {
    const res = await fetch(`${process.env.HOST}/order/cart/add`, {
      body: {
        product_id: product.id,
        quantity: 1
      }
    })
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="relative md:h-60 md:w-60 w-full max-w-lg flex flex-col flex-wrap rounded-3xl shadow-xl cursor-pointer overflow-hidden">
        <div className="h-full">
          <img className="object-cover" src="https://sneakerstudio.pl/pol_pm_Plecak-Fjallraven-Kanken-F23510-166-1021669_1.jpg" />
        </div>

        <div className="absolute h-[80px] w-full bottom-0">
          <div
            className="w-full h-[20px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
            style={{ clipPath: 'polygon(100% 5%, -15% 100%, 100% 100%)' }}
          ></div>
          <div className="bottom-0 h-[60px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white">
            <div className="flex flex-col leading-tight px-6 pt-1">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <ShoppingBagIcon
              onClick={addToCart}
              className="absolute h-[40px] w-[40px] bottom-[16px] right-[16px] hover:bg-red-500 p-1 rounded-lg"
              />
          </div>
        </div>
      </div>
    </Link>
  )
}
