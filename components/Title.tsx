import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const  Title: React.FC<Props> = ({className, children }) => {


 return(
   <h2 className={cn('text-[34px] font-bold', className)}>{children}</h2>
  );
};