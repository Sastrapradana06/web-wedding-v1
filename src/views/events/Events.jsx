import { FaUserEdit } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { useParams } from "react-router-dom";

export default function Events() {
  const { nama_tamu, alamat } = useParams()

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
        <div className="w-full h-max flex flex-col items-center rounded-md py-2 bg-[#436850]">
          <p className="dancing text-[1.3rem] text-orange-300">Kedatangan Anda Kami Tunggu</p>
          <span className="border w-[90%]"></span>
          <div className="w-max h-max  flex gap-3">
            <div className="w-[10%] h-[50px] flex flex-col gap-2 items-center">
              <FaUserEdit className="text-[1rem] ml-1 text-teal-500" />
              <HiBuildingOffice className="text-[1.1rem] text-teal-500" />
            </div>
            <div className="w-full h-[50px] flex flex-col gap-1">
              <p className="capitalize">{nama_tamu ? `${nama_tamu} & partner` : 'You & partner'}</p>
              <p className="capitalize">{alamat ? `${alamat}` : 'Di Tempat'}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}