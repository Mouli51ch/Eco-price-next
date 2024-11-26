// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-green-800 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl font-bold">ecoPrice</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/products">
                <a className="hover:text-green-300">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-green-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-green-300">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Link href="/cart">
            <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Cart
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;