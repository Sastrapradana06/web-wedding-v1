import { Button } from 'antd';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function KomentarComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [listKomentar, setListKomentar] = useState([
    {
      nama: "Sipo gamang",
      komentar: "Insya Allah tahun depan akhirnya terwujud"
    },
    {
      nama: "abah",
      komentar: "Selamat Yo Crok"
    },
    {
      nama: "galiong",
      komentar: "Selamat Abangkuhhh"
    },
    {
      nama: "dani_kur",
      komentar: "Akhirnya sahabat awak"
    },
    {
      nama: "Nisa",
      komentar: "Selamat menempuh hidup baru, semoga cinta dan kebahagiaan senantiasa menyertai kalian berdua."
    },
    {
      nama: "Triya",
      komentar: "Selamat menikah! Semoga langgeng dan bahagia selamanya"
    },
    {
      nama: "Putri",
      komentar: "Selamat ya dun."
    }
  ])
  const [data, setData] = useState({
    'nama': '',
    'komentar': '',
  })

  const storedData = JSON.parse(localStorage.getItem('listKomentar'));
  console.log({ storedData });
  useEffect(() => {
    if (storedData) {
      setListKomentar(storedData)
    }
  }, [])

  const resetData = () => {
    setData({
      'nama': '',
      'komentar': '',
    })
    setIsModalOpen(false);
    setIsStatus(false)
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = () => {
    setIsModalOpen(false)
    const dataKomentar = listKomentar
    dataKomentar.unshift(data)
    setListKomentar(dataKomentar)
    localStorage.setItem('listKomentar', JSON.stringify(listKomentar));
    setIsStatus(true)
    setTimeout(() => (
      resetData()
    ), 3000)
  }

  return (
    <div className="w-full h-max mb-4 flex flex-col gap-6">
      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm text-black z-50">
          <div className="bg-white p-6 rounded-md w-80">
            <form className="w-full h-max flex flex-col gap-2 mt-2">
              <div className="w-full h-max flex flex-col gap-2">
                <label htmlFor="nama" className='font-medium'>Nama Anda</label>
                <input type="text" name='nama' className='border border-sky-400 px-2 py-2 rounded-sm outline-sky-600' value={data.nama} onChange={handleInput} required />
              </div>
              <div className="w-full h-max flex flex-col gap-2">
                <label htmlFor="komentar" className='font-medium'>Komentar</label>
                <textarea
                  id="komentar"
                  name="komentar"
                  rows="4" cols="50"
                  className='border border-sky-400 px-2 py-2 rounded-sm outline-sky-600'
                  required
                  value={data.komentar} onChange={handleInput}>
                </textarea>
              </div>
              <div className="w-full h-max flex justify-start gap-2 mt-2">
                <Button className='rounded-md bg-red-500 text-white' onClick={resetData}>
                  Close
                </Button>
                <Button className='rounded-md  bg-teal-500 text-white' onClick={handleSubmit}>
                  Kirim
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      <div className="w-full h-max">
        <button className='py-2 px-2 rounded-md bg-teal-500 hover:bg-teal-600 duration-300' onClick={() => setIsModalOpen(true)}>Tulis Komentar</button>
        {isStatus && <p className='text-[.8rem] text-sky-400'>Komentar Berhasil Di Posting</p>}
      </div>
      {listKomentar ? (
        <Marquee pauseOnHover gradient={false} speed={100}>
          {listKomentar.map((item, i) => {
            return (
              <div className="w-max min-h-[50px] max-h-max justify-center p-2 rounded-md border flex flex-col bg-[#e4e3e3] text-black ml-4" key={i}>
                <p className="text-teal-600 text-[1rem] capitalize font-semibold">{item.nama}</p>
                <p className="text-[.7rem]">{item.komentar}</p>
              </div>
            )
          })}
        </Marquee>
      ) : null}
    </div>
  )
}