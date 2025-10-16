import { useState } from 'react';
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { IoBagOutline,IoCartOutline } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegHeart,  } from "react-icons/fa";
import { Link } from 'react-router';

const Navigation = () => {

  const [showText,setShowText] = useState(false);
  const handleMouseEnter =()=>{
    setShowText(true);
  };
  const handleMouseLeave =()=>{
    setShowText(false);
  }
  return (
    <div className="w-[4%] h-[100vh] hover:w-[15%] bg-gray-900 text-white py-10 px-5 fixed" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="my-5 flex pb-40">
         <ul className='flex flex-col'> 
            <li className="py-6 transform hover:translate-x-3">
                <Link to="/" className='flex flex-row items-center'>
                <AiOutlineHome  className="size-5 md:size-7"/>{showText && <span className="pl-4 md:flex hidden">Home</span>}
                </Link>
            </li>
            <li className="py-6 transform hover:translate-x-3">
                <Link to="/shop" className='flex flex-row items-center'>
                <IoBagOutline className="size-5 md:size-7"/>{showText && <span className="pl-4 md:flex hidden">Shop</span>}
                </Link>
            </li>
            <li className="py-6 transform hover:translate-x-3">
                <Link to="/cart" className='flex flex-row items-center'>
                <IoCartOutline className="size-5 md:size-7"/>{showText && <span className="pl-4 md:flex hidden">Cart</span>}
                </Link>
            </li>
            <li className="py-6 transform hover:translate-x-3">
                <Link to="/favourite" className='flex flex-row items-center'>
                <FaRegHeart className="size-5 md:size-7"/>{showText && <span className="pl-4 md:flex hidden">Favourite</span>}
                </Link>
            </li>
         </ul>
      </div>
      <div className='flex'>
         <ul>
            <li className="py-6 transform hover:translate-x-3">
                <Link to="/login" className='flex flex-row items-center'>
                <IoIosArrowDropright className="size-5 md:size-7"/>{showText && <span className="pl-4 md:flex hidden">Login</span>}
                </Link>
            </li>
            <li className="py-6 transform hover:translate-x-3">
                <Link to="/register" className='flex flex-row items-center'>
                <AiOutlineUserAdd className="size-5 md:size-7"/>{showText && <span className="pl-4 md:flex hidden">Register</span>}
                </Link>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Navigation;

 