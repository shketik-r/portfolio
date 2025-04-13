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
    <div className="flex flex-col gap-5 rounded-lg overflow-hidden bg-[#ffffff] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ">
      <img className='w-full object-contain' src={item.imageUrl} alt={item.name} />

      <h3 className='text-2xl px-3'>{item.name}</h3>

      <div className='flex flex-wrap gap-3 justify-between px-3 pb-3'>
        <a href={`${item.linkSite}`} target="_blank" className='px-5 py-1 bg-[#000000] text-[#ffffff] rounded-[8px]'>сайт</a>
        <Link href={`/projects/${item.id}`} className='px-5 py-1 bg-[#000000] text-[#ffffff] rounded-[8px]'>подробнее</Link>
      </div>



    </div>
  );
};