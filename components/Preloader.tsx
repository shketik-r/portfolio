'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  /** Время показа прелоадера в миллисекундах */
  duration?: number;
  /**
   * Внешнее управление показом. Если не задан — прелоадер
   * проигрывается один раз при монтировании.
   */
  active?: boolean;
  /** Колбэк, вызывается когда прогресс дошёл до 100% и прелоадер скрылся */
  onComplete?: () => void;
}

/**
 * Полноэкранный прелоадер.
 * Показывает логотип, прогресс-бар и плавно исчезает.
 * Не блокирует взаимодействие после завершения (pointer-events: none).
 */
export const Preloader: React.FC<Props> = ({ duration = 1200, active, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(true);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Если управление внешнее и прелоадер не активен — ничего не делаем
    if (active === false) {
      setHidden(true);
      return;
    }

    // Блокируем скролл на время загрузки
    document.body.style.overflow = 'hidden';
    setHidden(false);
    setProgress(0);

    let frame: number;
    let timeout: ReturnType<typeof setTimeout>;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const value = Math.min((elapsed / duration) * 100, 100);
      setProgress(value);

      if (value < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        // Небольшая задержка перед скрытием, чтобы бар успел дойти до 100%
        timeout = setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = '';
          onCompleteRef.current?.();
        }, 300);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, [duration, active]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#102129] transition-opacity duration-500 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={hidden}
    >
      {/* Логотип / имя */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <div
          className={`text-4xl font-black tracking-wide transition-all duration-700 ${
            progress > 0 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <span className="grad">Ruslan</span>
        </div>
        <div
          className={`h-[3px] w-[120px] overflow-hidden rounded-full bg-white/10 transition-opacity duration-700 ${
            progress > 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Прогресс-бар */}
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#2855da] to-[#7e52ec] transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Процент */}
      <div className="text-sm font-semibold tracking-[0.3em] text-white/60">
        {Math.round(progress)}%
      </div>
    </div>
  );
};
