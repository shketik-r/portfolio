'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/** Длительность прелоадера при клиентских переходах (мс) */
const TRANSITION_DURATION = 800;

/**
 * Оборачивает содержимое страницы.
 * При первой загрузке управляет уже отрисованным в HTML прелоадером
 * (#preloader) — прогоняет прогресс и снимает блокировку скролла.
 * При клиентских переходах показывает прелоадер заново через оверлей.
 */
export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  // Первая загрузка: показываем прелоадер фиксированное время, затем снимаем его
  useEffect(() => {
    const root = document.documentElement;
    const preloader = document.getElementById('preloader');

    // Если инлайн-скрипт уже пометил приложение как загруженное — прелоадер не нужен
    if (root.classList.contains('app-loaded') || !preloader) {
      setVisible(true);
      return;
    }

    const hideTimeout = setTimeout(() => {
      root.classList.add('app-loaded');
      setVisible(true);
    }, TRANSITION_DURATION);

    return () => clearTimeout(hideTimeout);
  }, []);

  // Клиентские переходы между страницами
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setVisible(false);
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
      requestAnimationFrame(() => setVisible(true));
    }, TRANSITION_DURATION);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* Оверлей для клиентских переходов (первую загрузку рисует HTML) */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#102129]">
          <div className="preloader-spinner" />
        </div>
      )}
      <div
        className={`transition-all duration-500 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  );
};
