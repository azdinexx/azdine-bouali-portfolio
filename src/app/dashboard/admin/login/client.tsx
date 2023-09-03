'use client';
import { useState } from 'react';

function Client() {
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const onSubmit = (e: { preventDefault: () => void }) => {
    console.log('submit');
    e.preventDefault();
    setloading(true);
  };
  return (
    <form
      onSubmit={onSubmit}
      className='  p-4 flex flex-col justify-center items-center  gap-5'
    >
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='border password'
        className='text-white bg-black rounded-lg p-2 pl-4 shadow-lg border-2 border-white/60 focus:outline-none focus:border-blue-500'
      />
      <button type='submit'>{loading ? 'Loading...' : 'Log In'}</button>
    </form>
  );
}

export default Client;
