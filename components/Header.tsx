import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {

  return (
    <header className={className}>
      <div className='container flex'>
        <nav className='flex items-center gap-[10px] ml-auto text'>
          <Link className='hover-link text-lg font-medium' href="/">Обо мне</Link>
          <Link className='hover-link text-lg font-medium' href="#work">Технологии</Link>
          <Link className='hover-link text-lg font-medium' href="#projects">Проекты</Link>
          <Link className='hover-link text-lg font-medium' href="#contact">Контакты</Link>
        </nav>
      </div>
    </header>
  );
};