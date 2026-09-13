'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  className?: string;
}

const NAV_ITEMS = [
  { href: '/', label: 'Главная' },
  { href: '/#work', label: 'Технологии' },
  { href: '/#projects', label: 'Проекты' },
  { href: '/#contact', label: 'Контакты' },
];

export const Header: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  /* Портал можно рендерить только на клиенте */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Закрываем меню при смене маршрута */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Блокируем скролл, пока открыто мобильное меню */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Закрываем меню по Escape */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={className}>
      <div className='container flex items-center justify-center'>
        {/* Десктоп-меню */}
        <nav className='glass hidden items-center gap-1 rounded-full px-2 py-2 text-sm shadow-lg shadow-black/20 md:flex'>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              className='rounded-full px-3 py-2 font-medium transition-colors hover:bg-white/10 lg:px-4'
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка мобильного меню */}
        <button
          type='button'
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className='glass relative flex h-11 w-11 items-center justify-center rounded-full shadow-lg shadow-black/20 transition-colors hover:bg-white/10 md:hidden'
        >
          <span className='sr-only'>Меню</span>
          <span className='relative block h-4 w-5'>
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Мобильное выпадающее меню (портал в body) */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[60] md:hidden ${
              open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            } transition-opacity duration-300`}
            role='dialog'
            aria-modal='true'
          >
            {/* Клик по затемнённому фону закрывает меню */}
            <div
              className='absolute inset-0 bg-[#0a161c]/80 backdrop-blur-sm'
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <nav className='glass-strong absolute inset-x-5 top-24 flex flex-col gap-1 rounded-3xl p-3 shadow-2xl shadow-black/60'>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='rounded-2xl px-5 py-3 text-base font-medium transition-colors hover:bg-white/10'
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>,
          document.body
        )}
    </header>
  );
};