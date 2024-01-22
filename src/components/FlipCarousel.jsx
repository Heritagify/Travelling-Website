import { useState, useEffect } from 'react';
import image1 from "../assets/login1.jpg"
import image2 from "../assets/login2.png"

const FlippingCarousel = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-6">
      <img
        src={image1}
        className={`w-96 h-96 my-6 rounded-3xl transform transition-transform duration-1000 ${isFlipped ? 'rotate-flip' : ''}`}
        alt="Image 1"
      />
      <img
        src={image2}
        className={`w-96 h-96 my-6 rounded-3xl transform transition-transform duration-1000 ${isFlipped ? 'rotate-flip' : ''}`}
        alt="Image 2"
      />
    </div>
  );
};

export default FlippingCarousel;
