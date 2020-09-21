/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const YouTubeIFrame = () => (
  <iframe
    className='w-full'
    src='https://www.youtube.com/embed/Ek840SVER7c'
    frameBorder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
  />
);

const AdPlaceHolder = () => (
  <div className='flex overflow-hidden overflow w-40 h-40 justify-center items-center border border-gray-600 text-gray-700'>
    Ad will be added.
  </div>
);

export const Ad: React.FC = () => (
  <div className='lg:px-2 py-4'>
    <p className='font-medium pb-4'>Ad</p>
    <div className='flex justify-center'>
      <AdPlaceHolder />
      {/* <YouTubeIFrame /> */}
    </div>
  </div>
);
