import { Carousel, Card } from 'antd';
const { Meta } = Card;

// const contentStyle = {
//   height: '500px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };


export default function About() {

  const CardCewe = () => {
    return (
      <Card
        hoverable
        className='w-full h-full'
        // cover={<img alt="example" src="" className='h-[350px] object-cover' />}
        cover={<img alt="example" src="/sindi1.jpg" className='h-[350px] object-cover' />}

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
        cover={<img alt="example" src="/midun.jpg" className='h-[350px] object-cover' />}

      >
        <Meta title="Amidun Akbar" description="A young entrepreneur: Full of enthusiasm, navigating business currents, challenging norms, turning dreams into reality, and leaving innovative footprints in the journey of entrepreneurship." />
      </Card>
    )
  }

  return (
    <div className="w-full h-max bg-[#436850] flex justify-center " id='about'>
      <div className="w-[90%] h-full pt-24 pb-2 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="uppercase tracking-[2px]">about us</h1>
          <p className="merriweather-regular text-[1.5rem] capitalize text-zinc-400">who&rsquo;s that</p>
          {/* <p className="merriweather-regular text-[1.7rem]">Midun & Sindi</p> */}
        </div>
        <div className="w-full h-max border flex flex-col gap-2">
          <div className="w-full h-[500px] rounded-md">
            <Carousel dotPosition='left' autoplaySpeed={5000} autoplay>
              <div className='w-full h-[500px]'>
                <CardCowo />
              </div>
              <div className='w-full h-[500px] rounded-md'>
                <CardCewe />
              </div>
              {/* <div>
                <h3 style={contentStyle}>2</h3>
              </div> */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>

  )
}