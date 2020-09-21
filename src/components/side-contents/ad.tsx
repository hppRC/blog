/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

export const Ad: React.FC = () => (
  <div className='px-2 py-4'>
    <p className='font-medium pb-4'>Ad</p>
    <div>
      <div className='flex overflow-hidden overflow w-40 h-40 justify-center items-center border border-gray-600 text-gray-700'>
        Ad will be added.
      </div>
      {/* <iframe
        src='https://www.youtube.com/embed/Ek840SVER7c'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      /> */}
    </div>
  </div>
);
