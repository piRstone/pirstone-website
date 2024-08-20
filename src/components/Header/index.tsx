import Link from 'next/link';

import './header.css'

const Header = () => {
  return (
    <header className="w-full">
      <Link href='/' className="header-title inline-block text-4xl font-bold bg-gradient-to-r from-violet-800 to-sky-600 bg-clip-text">piRstone</Link>
    </header>
  );
}

export default Header
