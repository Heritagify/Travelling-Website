// imagess............
import instabul from './assets/instabul.png'
import sydney from './assets/sydney.png'
import Baku from './assets/baku.png'
import maldives from './assets/maldives.png'
import paris from './assets/paris.png'
import newYork from './assets/newYork.png'
import london from './assets/london.png'
import tokyo from './assets/tokyo.png'
import dubai from './assets/dubai.png'

const Places = () => {
  const images = [
    { id: 1, src: instabul, alt: 'Istanbul', description: 'Istanbul, turkey' },
    { id: 2, src: sydney, alt: 'Sydney', description: 'Iconic Opera House' },
    { id: 2, src: Baku, alt: 'Sydney', description: 'Iconic Opera House' },
    { id: 2, src: maldives, alt: 'Sydney', description: 'Iconic Opera House' },
    { id: 2, src: paris, alt: 'Sydney', description: 'Iconic Opera House' },
    { id: 2, src: newYork, alt: 'Sydney', description: 'Iconic Opera House' },
    { id: 2, src: london, alt: 'Sydney', description: 'Iconic Opera House' },
    { id: 2, src: tokyo, alt: 'Sydney', description: 'Iconic Opera House' },
    { id: 2, src: dubai, alt: 'Sydney', description: 'Iconic Opera House' },
  ];

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {images.map((image) => (
        <div key={image.id} className='border flex gap-5'>
          <img src={image.src} alt={image.alt} />
          <p className='mt-6 text-center'>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Places;
