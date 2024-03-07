import { Image } from 'antd';

export default function Gallery() {
  return (
    <div className="w-full min-h-[100vh] h-max bg-zinc-800 flex justify-center  items-center" id='gallery'>
      <div className="w-[95%] h-max flex flex-col items-center gap-4  text-white py-3">
        <div className="text-center">
          <p className="text-[1rem] uppercase tracking-[2px]">Gallery photos</p>
          <p className='capitalize text-[.8rem] text-zinc-400'>sentuh untuk melihat</p>
        </div>
        <div className="w-full h-max flex justify-between">
          <Image
            width={190}
            src="/salaman1.jpg"
            preview={{
              width: '90%'
            }}
          />
          <Image
            width={190}
            src="/salaman2.jpg"
            preview={{
              width: '90%'
            }}
          />
        </div>
        <div className="w-full h-max flex justify-center">
          <Image
            width={350}
            src="/keluarga.jpg"
            preview={{
              width: '90%'
            }}
          />
        </div>
        <div className="w-full h-max flex justify-center">
          <Image
            width={190}
            src="/sahabatcewe.jpg"
            preview={{
              width: '70%'
            }}
          />
          <Image
            width={190}
            src="/sahabatcowo.jpg"
            preview={{
              width: '70%'
            }}
          />
        </div>

      </div>
    </div>
  )
}