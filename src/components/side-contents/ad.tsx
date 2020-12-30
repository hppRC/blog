/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo } from 'react';

const YOUTUBE_URL_LIST = [
  `https://www.youtube.com/embed/Ek840SVER7c`, // チューリングラブ / 葛葉, ひまちゃん
  `https://www.youtube.com/embed/aH0SdgEfoIc`, // エバ / メリッサ
  `https://www.youtube.com/embed/oPAcjv__fbc`, // KING / 葛葉
  `https://www.youtube.com/embed/8eQxRL5Lqgw`, // シニカルナイトプラン / メリッサ
  `https://www.youtube.com/embed/3JU6I12H5WU`, // レッドパージ!!! / メリッサ
  `https://www.youtube.com/embed/L5sbzUFHot8`, // あの夏が飽和する。 / ましろ
  `https://www.youtube.com/embed/4FcBWgi4nBg`, //  / ましろ
  `https://www.youtube.com/embed/oH7Xi__8k7E`, // コールボーイ / 久遠千歳
  `https://www.youtube.com/embed/QzdsaXemBWM`, // RE:I AM / 戌亥とこ
  `https://www.youtube.com/embed/Z-UJbyLqioM`, // 群青 / 葉加瀬冬雪
];

const YouTubeIFrame = () => (
  <iframe
    className='w-full rounded'
    src={YOUTUBE_URL_LIST[Math.floor(Math.random() * YOUTUBE_URL_LIST.length)]}
    frameBorder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
  />
);

// const AdPlaceHolder = () => (
//   <div className='flex overflow-hidden overflow w-40 h-40 justify-center items-center border border-gray-600 text-gray-700'>
//     Ad will be added.
//   </div>
// );

export const Ad: React.FC = memo(() => (
  <div className='lg:px-2 py-4'>
    <p className='font-medium pb-4'>Likes</p>
    <div className='flex justify-center'>
      {/* <AdPlaceHolder /> */}
      <YouTubeIFrame />
    </div>
  </div>
));
