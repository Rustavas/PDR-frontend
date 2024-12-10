import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">ПДР</Link>
          </li>
          <li>
            <Link href="/auth">Особистий кабiнет</Link>
          </li>
          <li>
            <Link href="/rules">Правiла</Link>
          </li>
          <li>
            <Link href="/tests">Тести</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
