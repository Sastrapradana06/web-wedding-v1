
export default function Footer() {

  return (
    <div className="w-full  h-max bg-zinc-800 flex justify-center " id='footer'>
      <div className="w-[95%] h-max flex flex-col items-center gap-4  text-white py-3">
        <div className="text-center">
          <p className="uppercase tracking-[2px] text-[1rem]">thank you for watching </p>
        </div>
        <div className="w-full h-max flex justify-center">
          {/* <img src="" alt="" className="w-[150px] h-[150px] border-2 rounded-full object-cover" /> */}
          <img src="/img_1.jpg" alt="" className="w-[150px] h-[150px] border-2 rounded-full object-cover" />
        </div>
      </div>
    </div>
  )
}