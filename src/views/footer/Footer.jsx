import QrCodeLokasi from "../../components/ui/Qr-code";

export default function Footer() {

  return (
    <div className="w-full  h-max bg-zinc-800 flex justify-center " id='footer'>
      <div className="w-[95%] h-max flex flex-col items-center gap-4  text-white py-3">
        <div className="text-center">
          <p className="uppercase tracking-[2px] text-[1rem]">thank you for watching </p>
          <p className="text-[.8rem] text-zinc-400">Scan untuk menemukan lokasi</p>
        </div>
        <div className="w-[90%] h-[300px] flex justify-center items-center bg-white">
          <QrCodeLokasi />
        </div>
      </div>
    </div>
  )
} 