import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {

  return (
    <header className={className}>
      <div className='container flex'>
        <nav className='glass flex items-center flex-wrap gap-1 mx-auto rounded-full px-2 py-2 text-sm shadow-lg shadow-black/20'>
          <Link className='rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10' href="/">Главная</Link>
          <Link className='rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10' href="/#work">Технологии</Link>
          <Link className='rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10' href="/#projects">Проекты</Link>
          <Link className='rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10' href="/#contact">Контакты</Link>
        </nav>
      </div>
    </header>
  );
};