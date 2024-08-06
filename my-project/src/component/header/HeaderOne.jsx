import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


function HeaderOne() {
  return (
    <div className="flex flex-col lg:flex-row justify-end items-center bg-gray-200 p-2">
      <p className="mb-2 lg:mb-0 lg:mr-2">
        1234 Street Name, City Name
      </p>

      <div className="border-l border-gray-400 h-6 mx-2 mb-2 lg:mb-0 lg:h-auto lg:mx-0"></div>

      <div className="flex space-x-2">
        <button className="flex items-center space-x-1 text-gray-700 ">
          
        <FaWhatsapp  className="text-blue-500"/>
          <span className="hover:text-blue-500">123-456-7890</span>
        </button>

        <div className="border-l border-gray-400 h-6 mx-2 lg:hidden"></div>

        <button className="flex items-center space-x-1 text-gray-700 ">
        <CiMail className="text-blue-500" />
          <span className="hover:text-blue-500">mail@domain.com</span>
        </button>
      </div>
    </div>
  );
}

export default HeaderOne;
