import { Card, Button, Alert } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TulisTamu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [data, setData] = useState({
    'nama_tamu': '',
    'alamat': '',
  })

  const navigate = useNavigate()


  const copyUrlToClipboard = () => {
    const { nama_tamu, alamat } = data

    let url = window.location.href;
    const replaceUrl = url.replace('/tulis-tamu', '');
    const urlCopy = `${replaceUrl}/${nama_tamu}/${alamat}`

    navigator.clipboard.writeText(urlCopy)
      .then(() => {
        console.log('URL berhasil disalin ke clipboard');

        setIsAlert(true)
      })
      .catch((error) => {
        console.error('Gagal menyalin URL ke clipboard:', error);
      });
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }


  const resetData = () => {
    setData({
      'nama_tamu': '',
      'alamat': '',
    })
    setIsAlert(false)
    setIsModalOpen(false);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };


  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-4">
      {isAlert ? (
        <Alert
          width='90%'
          message="Link Berhasil Di Salin"
          description="Gunakan Link Tersebut Untuk Membagi Undangan"
          type="success"
          showIcon
        />
      ) : null}
      <Card
        title=<p className='text-white uppercase tracking-[2px]'>Detail undangan</p>
        className='w-[300px]  bg-sky-600 text-white'
      >
        <p>Nama <span className='ml-2'>: {data.nama_tamu != '' ? data.nama_tamu : '-'}</span></p>
        <p>Alamat <span className='ml-1'>: {data.alamat != '' ? data.alamat : '-'}</span></p>
      </Card>
      <div className="">
        {isAlert ? (
          <Button type="primary" onClick={() => navigate(`/${data.nama_tamu}/${data.alamat}`)} className='rounded-md'>
            Lihat Web
          </Button>
        ) : (
          <Button type="primary" onClick={showModal} className='rounded-md'>
            Buat Undangan
          </Button>
        )}
        {data.nama_tamu != '' && data.alamat != '' ? (
          <Button onClick={copyUrlToClipboard} className='rounded-md ml-2 bg-teal-500 text-white'>
            Copy Undangan
          </Button>
        ) : null}

        {isModalOpen ? (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm text-black">
            <div className="bg-white p-6 rounded-md w-80">
              <form action="" className="w-full h-max flex flex-col gap-2 mt-2">
                <div className="w-full h-max flex flex-col gap-2">
                  <label htmlFor="nama_tamu" className='font-medium'>Nama Tamu</label>
                  <input type="text" name='nama_tamu' className='border border-sky-400 px-2 py-2 rounded-sm outline-sky-600' value={data.nama_tamu} onChange={handleInput} />
                </div>
                <div className="w-full h-max flex flex-col gap-2">
                  <label htmlFor="alamat" className='font-medium'>Alamat</label>
                  <input type="text" name='alamat' className='border border-sky-400 px-2 py-2 rounded-sm outline-sky-600' value={data.alamat} onChange={handleInput} />
                </div>
                <div className="w-full h-max flex justify-start gap-2 mt-2">
                  <Button onClick={resetData} className='rounded-md bg-red-500 text-white'>
                    Close
                  </Button>
                  <Button onClick={() => setIsModalOpen(false)} className='rounded-md  bg-teal-500 text-white'>
                    Ok
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}