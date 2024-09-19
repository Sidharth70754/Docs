import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white overflow-hidden'>
      <div className='absolute inset-0 flex flex-col justify-between'>
        <div className='flex flex-col items-center justify-center h-full px-8 py-10'>
          <FaFileAlt />
          <p className='text-sm leading-tight mt-5 font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className='flex items-center justify-between bg-sky-200 w-full py-3 px-8'>
          <h5>.4mb</h5>
          <FiDownload />
        </div>
      </div>
    </div>
  );
}

export default Card;
