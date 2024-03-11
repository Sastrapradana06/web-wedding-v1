// import React from 'react';
import { Steps } from 'antd';

export default function LoveStory() {

  const Description1 = () => {
    return (
      <div className="w-full h-max border text-white rounded-3xl rounded-tl-none p-3 bg-[#ffffff25] mt-2">
        <p className='text-zinc-300'>Di tengah pandemi global, mereka bertemu secara daring. Percakapan mereka penuh dengan ketertarikan, humor, dan kehangatan. Meskipun terpisah jarak, mereka merasakan ikatan yang kuat melalui panggilan video dan pesan teks yang panjang.</p>
      </div>
    )
  }

  const Description2 = () => {
    return (
      <div className="w-full h-max border text-white rounded-3xl rounded-tl-none p-3 bg-[#ffffff25] mt-2">
        <p className='text-zinc-300'>Setelah tiga tahun berpacaran, pada tahun 2023, mereka akhirnya sampai pada titik di mana cinta mereka tumbuh begitu kuat sehingga mereka memutuskan untuk mengikat janji untuk selamanya. </p>
      </div>
    )
  }

  const Description3 = () => {
    return (
      <div className="w-full h-max border text-white rounded-3xl rounded-tl-none p-3 bg-[#ffffff25] mt-2">
        <p className='text-zinc-300'>Tepat di tahun 2024, mereka memutuskan untuk menikah. Dalam keindahan cinta yang mereka bagi, mereka bersatu untuk selamanya, mengukir cerita cinta abadi di bawah langit biru.</p>
      </div>
    )
  }

  return (
    <div className="w-full h-max flex flex-col gap-4 backdrop-blur-md mt-2">
      <div className="">
        <p className='text-[1.5rem] merriweather-regular text-zinc-400'>Love Story</p>
      </div>
      <Steps
        direction="vertical"
        progressDot
        size="small"
        current={2}
        items={[
          {
            title: <p className='text-white text-[1rem] merriweather-regular mt-1 uppercase '>2020</p>,
            description: <Description1 />,
          },
          {
            title: <p className='text-white text-[1rem] merriweather-regular mt-1 uppercase '>2023</p>,
            description: <Description2 />,
          },
          {
            title: <p className='text-white text-[1rem] merriweather-regular mt-1 uppercase '>2024</p>,
            description: <Description3 />
          },
        ]}
      />
    </div>

  )
}
