import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const  Title: React.FC<Props> = ({className, children }) => {


 return(
   <h2 className={cn('relative inline-block text-[34px] font-extrabold tracking-tight max-sm:text-[26px]', className)}>
     {children}
     <span className='absolute -bottom-2 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2855da] to-[#7e52ec]' />
   </h2>
  );
};