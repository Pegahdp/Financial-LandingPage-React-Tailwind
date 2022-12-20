import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleHumMenu = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="text-white flex h-24 max-w-[1240px] mx-auto justify-between items-center px-2">
      <h1 className="uppercase w-full font-bold text-[#00df9a] text-3xl">
        react.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-2">Home</li>
        <li className="p-2">Company</li>
        <li className="p-2">Business</li>
        <li className="p-2">About</li>
        <li className="p-2">Contact</li>
      </ul>
      <div onClick={toggleHumMenu} className="block md:hidden">
      {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={isOpen ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out h-full duration-500 fixed left-[-100%]' }>

        <h1 className="uppercase w-full font-bold text-[#00df9a] text-3xl">
          react.
        </h1>
        <ul className="flex flex-col p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Business</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4  border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
