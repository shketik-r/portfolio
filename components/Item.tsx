/* eslint-disable @next/next/no-img-element */
import { Product } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  item: Product;
}

export const Item: React.FC<Props> = ({ item }) => {

  return (
    <div className="glass flex flex-col overflow-hidden">
      <div className='relative overflow-hidden'>
        <img className='w-full object-cover' src={item.imageUrl} alt={item.name} />
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102129] via-transparent to-transparent opacity-80' />
      </div>

      <h3 className='px-5 pt-4 text-2xl font-bold'>{item.name}</h3>

      <div className='mt-auto flex flex-wrap gap-3 px-5 pb-5 pt-4'>
        <a href={`${item.linkSite}`} target="_blank" rel="noopener noreferrer" className='btn-grad'>сайт</a>
        <Link href={`/projects/${item.id}`} className='btn-ghost'>подробнее</Link>
      </div>
    </div>
  );
};