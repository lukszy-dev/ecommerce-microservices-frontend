import Link from 'next/link';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import useUser from '../lib/useUser';

export default function Header() {
  const { role, email } = useUser();

  return (
    <nav className="fixed bg-white h-16 z-10 w-full">
      <div className="w-full h-full container lg:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3 px-4">
        <Link href="/">
          <a className="text-gray-900 text-base">
            <h2>Ecommerce</h2>
          </a>
        </Link>
        <div className="flex flex-row gap-2">
          <Link href="/cart">
            <a>
              <ShoppingBagIcon className="h-[40px] w-[40px] text-gray-900" />
            </a>
          </Link>
          <Link href="/login">
            <a className="flex flex-row items-center">
              <UserIcon className="h-[40px] w-[40px] text-gray-900" />
              { email && <p>Role: {role}, Email: {email}</p> }
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
