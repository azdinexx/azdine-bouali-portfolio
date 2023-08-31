import { cn } from '@/utils';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  Onclick?: () => void;
  className?: string;
}

function Button({ children, Onclick, className }: ButtonProps) {
  return (
    <button
      onClick={Onclick}
      className={cn(
        'px-4 py-2 rounded-md  bg-gradient-to-tr from-blue-500 shadow-lg dark:shadow-none to-purple-600 transition-all duration-200   text-white font-semibold hover:from-blue-600 hover:to-purple-700 hover:rounded-full  ',
        'active:scale-95',
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
