import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/outline';

import { useAuth } from '../context/auth/AuthContext';
import { useCart } from '../context/cart/CartContext';

const Header: FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useAuth();
  const { count } = useCart();

  useEffect(() => {
    if (user.email && user.role) {
      setShowProfile(true);
    }
  }, [user.email, user]);

  return (
    <nav className="fixed bg-white h-16 z-10 w-full">
      <div className="w-full h-full container lg:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3 px-4">
        <Link href="/">
          <a className="text-gray-900 text-base">Ecommerce</a>
        </Link>
        <div className="flex flex-row gap-6">
          <Link href="/payment">
            <a className="text-gray-900 mt-1">Payment</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-900 mt-1">About</a>
          </Link>
          <div className="flex flex-row">
            <Link href="/cart">
              <a className="relative">
                <ShoppingBagIcon className="h-[30px] w-[30px] text-gray-900" />
                <div className="absolute -left-0.5 -bottom-0.5 bg-pink-500 h-5 w-5 rounded-full text-white flex justify-center items-center">
                  {count}
                </div>
              </a>
            </Link>
            <Link href="/login">
              <a className="flex flex-row items-center">
                <UserIcon className="h-[30px] w-[30px] text-gray-900" />
                {showProfile && (
                  <p>
                    Role: {user.role}, Email: {user.email}
                  </p>
                )}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
