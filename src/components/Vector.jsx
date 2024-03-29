import vector1 from '../assets/vectors/vector1.png';
import vector2 from '../assets/vectors/Vector2.png'
import vector3 from '../assets/vectors/Vector3.png';
import vector4 from '../assets/vectors/Vector4.png';
import slamon from '../assets/vectors/slamon.png';

const Vector = () => {
  return (
    <div className="hidden md:flex mx-8 my-10">
        <img src={vector1} className='relative z-30 w-34 h-32 ml-1 mt-1'/>
        <img src={vector2} className='absolute z-20 mr-4 w-36 h-32'/>
        <img src={vector3} className='absolute mr-4 w-60 h-32 z-10'/>
        <img src={slamon} className='z-10 w-20 h-12 ml-10 mt-20 '/>
        <img src={vector4} className='w-10 h-12 absolute mt-32 ml-28'/>

    </div>
  )
}

export default Vector
