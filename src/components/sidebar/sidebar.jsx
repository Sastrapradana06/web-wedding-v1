import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const [link, setLink] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = () => {
    setLink(false)
  }

  return (
    <>
      <nav className={`fixed top-0 w-[100%] h-[80px] flex justify-between items-center px-6 z-[100] ${isScrolled ? 'bg-zinc-900 duration-500' : 'bg-transparent'}`} >
        <p className='capitalize allura-regular text-[2rem]'>Weddings</p>
        <button onClick={() => { link == true ? setLink(false) : setLink(true) }}>
          <GiHamburgerMenu size={20} fill='white' />
        </button>
      </nav>
      <div className="absolute left-0 top-14 w-[100%] z-[1000] bg-zinc-900 flex justify-center items-center" id={link ? 'link-on' : 'link-off'}>
        <div className="w-[40%] h-max flex flex-col justify-center items-center gap-3">
          <a href="#home" className="hover:text-slate-500 duration-200" onClick={handleNavigate}>Home</a>
          <a href="#about" className="hover:text-slate-500 duration-200" onClick={handleNavigate}>About</a>
          <a href="#events" className="hover:text-slate-500 duration-200" onClick={handleNavigate}>Events</a>
          <a href="#gallery" className="hover:text-slate-500 duration-200" onClick={handleNavigate}>Gallery</a>
        </div>
      </div>
    </>
  )
}