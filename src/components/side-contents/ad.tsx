/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo, useState, useEffect } from 'react';

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
  `https://www.youtube.com/embed/zPMWAj54Seg`, // Virtual to Live
  `https://www.youtube.com/embed/Y98vM_pWsJE`, // Mela! / 東堂コハク
  `https://www.youtube.com/embed/S9sd_HvFB9k`, // 快晴 / フレン
  `https://www.youtube.com/embed/h2YDbhEURZA`, // メビウス / メリッサ
  `https://www.youtube.com/embed/h-LOlueKCtk`, // Live Again / Calliope Mori
  `https://www.youtube.com/embed/9PYi1080Q7k`, // 失楽ペトリ / 猫又おかゆ
  `https://www.youtube.com/embed/1Phzcf1T-U8`, // ジョジョ その血の記憶〜end of THE WORLD / 緑仙, チャイカ, 社築
  `https://www.youtube.com/embed/fGvYwVW38mc`, // WITHIN / 加賀美ハヤト
  // `https://www.youtube.com/embed/wtJcLWeY114`, // 季節は次々死んでいく / amazarashi
  `https://www.youtube.com/embed/HEf7p_7MjkM`, // 命にふさわしい / amazarashi
  `https://www.youtube.com/embed/M16xWzDjPmY`, // DOGMA / シスタークレア
  `https://www.youtube.com/embed/XyL6bhHsNhQ`, // グレゴリオ / アルス
  `https://www.youtube.com/embed/ccz4yLqlzPA`, // サマータイムレコード / AXF
  `https://www.youtube.com/embed/z3tukOqkjyc`, // 疑心暗鬼 / 葛葉
  `https://www.youtube.com/embed/ZpE3oRKpJQE`, // アスノヨゾラ哨戒班 / ド葛本社
  `https://www.youtube.com/embed/2l_6oIGTrbg`, // スパークル / 大神ミオ
  `https://www.youtube.com/embed/dPTeBvVJ_xY`, // 覚醒 / 星街すいせい
  `https://www.youtube.com/embed/XKOtUV_7izo`, // 第六感 / Reol
  `https://www.youtube.com/embed/F6KgJox-NmM`, // LAZY / DUSTCELL
  `https://www.youtube.com/embed/5Ec6eEOEuOM`, // 終点 / DUSTCELL
  `https://www.youtube.com/embed/broWJzNAdQM`, // あゝオオサカ dreamin' night / 歌衣メイカ, バーチャルゴリラ, 七瀬タク
  `https://www.youtube.com/embed/vO2cPVf1hMQ`, // ファッションモンスター / でびでび・でびる, 竜胆尊
  `https://www.youtube.com/embed/XwZZeMNanKw`, // 地獄屋八丁荒らし / 戌亥とこ
  `https://www.youtube.com/embed/UBSx4qqeikY`, // 花に亡霊 / ヨルシカ
  `https://www.youtube.com/embed/e0W-QW58Dy0`, // 獣ゆく細道 / 町田ちま, ジョー・力一
  // `https://www.youtube.com/embed/KnakQRoQRzk`, // LOST IN PARADISE / ALI, AKLO
  `https://www.youtube.com/embed/rZ6JSwVQ1tM`, // インドア系ならトラックメイカー / ござやよ
  `https://www.youtube.com/embed/6ydgEipkUEU`, // DEAD BEATS / Calliope Mori
];

const choiceUrl = () => YOUTUBE_URL_LIST[Math.floor(Math.random() * YOUTUBE_URL_LIST.length)];

const YouTubeIFrame = memo(() => {
  const [url, setUrl] = useState(choiceUrl());

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newUrl = choiceUrl();
      while (url === newUrl) {
        newUrl = choiceUrl();
      }
      setUrl(newUrl);
    }, 1000 * 60 * 2);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <iframe
      loading='lazy'
      className='w-full rounded'
      src={url}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );
});

// const AdPlaceHolder = () => (
//   <div className='flex overflow-hidden overflow w-40 h-40 justify-center items-center border border-gray-600 text-gray-700'>
//     Ad will be added.
//   </div>
// );

const OptoutButton = ({ setOptout }: { setOptout: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <button
    className='px-1 m-1 w-6 h-6 absolute right-0 top-0 bg-white rounded-full hover:opacity-50 opacity-75'
    type='button'
    aria-label='optout button'
    onClick={() => setOptout(true)}
  >
    ✖︎
  </button>
);

export const Ad: React.FC = memo(() => {
  const [optout, setOptout] = useState(false);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 1000 * 15);
  }, []);

  return (
    <div className='lg:px-2 py-4'>
      {!waiting && (
        <>
          <p className='font-medium pb-4'>Likes</p>
          <div className='flex justify-center relative'>
            {!optout && <OptoutButton setOptout={setOptout} />}
            {!optout && <YouTubeIFrame />}
          </div>
        </>
      )}
    </div>
  );
});
