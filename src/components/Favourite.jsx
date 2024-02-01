import { useState } from "react";
import { FaHeart } from "react-icons/fa";




const Favorite = () => {
    const [isFav, setFav] = useState(false);

    const handleToggleFav = ()=> {
        setFav(!isFav);
    };

    return (
        <FaHeart

            className={`text-xl ${isFav ? 'text-blackGreen' : 'text-gray-300'}`}
            onClick={handleToggleFav}
        />
    )
};

export default Favorite