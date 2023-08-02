'use client';
import React from 'react';

function loading() {
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-100'></div>
    </div>
  );
}

export default loading;
