export default function Events() {
  return (
    <div className="w-full h-[100vh] bg-zinc-800 flex justify-center  items-center" id='events'>
      <div className="w-[90%] h-max flex flex-col items-center gap-4  text-white">
        <p className='uppercase tracking-[2px]'>The wedding of</p>
        <h1 className='capitalize text-white sacramento text-[2.5rem]'>save the date</h1>
        <div className="w-[300px] h-[300px] border-4 border-zinc-400 rounded-full flex flex-col items-center justify-center gap-4 text-[2rem] dancing">
          <p>Amidun Akbar</p>
          <span className='text-[pink]'>&</span>
          <p>Sindi Presitia</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Minggu | 20 Desember 2025 | 08:00</p>
          <p>Pagar Merbau, Lubuk Pakam</p>
        </div>
      </div>
    </div>
  )
}