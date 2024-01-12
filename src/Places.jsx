// IMAGES............
import instabul from './assets/instabul.png'
import sydney from './assets/sydney.png'
import Baku from './assets/baku.png'
import maldives from './assets/maldives.png'
import paris from './assets/paris.png'
import newYork from './assets/newYork.png'
import london from './assets/london.png'
import tokyo from './assets/tokyo.png'
import dubai from './assets/dubai.png'

// iCONS.........


const Places = () => {
  const images = [
    { id: 1, src: instabul, alt: 'Istanbul', description: 'Istanbul, Turkey', list: 'Flights • hotels • resort' },
    { id: 2, src: sydney, alt: 'Sydney', description: 'Sydney' , list:  'Flights • hotels • resort' },
    { id: 3, src: Baku, alt: 'Sydney', description: 'Baku, Azerbaijan', list:  'Flights • hotels • resort'  },
    { id: 4, src: maldives, alt: 'Sydney', description: 'Male, Maldives' , list:  'Flights • hotels • resort' },
    { id: 5, src: paris, alt: 'Sydney', description: 'Paris, France' , list:  'Flights • hotels • resort' },
    { id: 6, src: newYork, alt: 'Sydney', description: 'New York, US' , list:  'Flights • hotels • resort' },
    { id: 7, src: london, alt: 'Sydney', description: 'London, Uk' , list:  'Flights • hotels • resort' },
    { id: 8, src: tokyo, alt: 'Sydney', description: 'Tokyo, Japan' , list:  'Flights • hotels • resort' },
    { id: 9, src: dubai, alt: 'Sydney', description: 'Dubai, UAE' , list:  'Flights • hotels • resort' },
  ];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-5 mt-10 w-full'>
      {images.map((image) => (
        <div key={image.id} className='w-full border flex gap-1 rounded-lg shadow-md shadow-gray-300 text-blackGreen font-monts'>
          <img
          src={image.src}
          alt={image.alt}
          className='max-h-14 my-2 mx-2' />
          <div className=''>
              <p className='mt-3 font-semibold'>{image.description}</p>
              <p className='text-blackGreen text-sm font-medium'>{image.list}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;




