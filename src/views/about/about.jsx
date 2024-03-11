import { Carousel, Card } from 'antd';
import LoveStory from './love-story';
const { Meta } = Card;

export default function About() {

  const CardCewe = () => {
    return (
      <Card
        hoverable
        className='w-full h-full'
        // cover={<img alt="example" src="" className='h-[350px] object-cover' />}
        cover={<img alt="sindi" src="/sindi1.jpg" className='h-[350px] object-cover' />}

      >
        <Meta title="Sindi Presitia S.M" description="A young female graduate in management: Brimming with enthusiasm, adeptly navigating business landscapes, challenging conventions, transforming aspirations into achievements, and forging innovative paths in entrepreneurship." />
      </Card>
    )
  }

  const CardCowo = () => {
    return (
      <Card
        hoverable
        className='w-full h-full'
        // cover={<img alt="example" src="" className='h-[350px] object-cover' />}
        cover={<img alt="midun" src="/midun.jpg" className='h-[350px] object-cover' />}

      >
        <Meta title="Amidun Akbar" description="A young entrepreneur: Full of enthusiasm, navigating business currents, challenging norms, turning dreams into reality, and leaving innovative footprints in the journey of entrepreneurship." />
      </Card>
    )
  }

  return (
    <div className="w-full h-max bg-[#436850] flex justify-center " id='about'>
      <div className="w-[90%] h-full pt-4 pb-2 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="uppercase tracking-[2px] text-center text-white">about us</h1>
          <p className="merriweather-regular text-[1.5rem] capitalize text-zinc-400">who&rsquo;s that</p>
        </div>
        <div className="w-full h-max border flex flex-col gap-2">
          <div className="w-full h-[500px] rounded-md">
            <Carousel dotPosition='left' autoplaySpeed={5000}>
              <div className='w-full h-[500px]'>
                <CardCowo />
              </div>
              <div className='w-full h-[500px] rounded-md'>
                <CardCewe />
              </div>
            </Carousel>
          </div>
        </div>
        <LoveStory />
      </div>
    </div>

  )
}