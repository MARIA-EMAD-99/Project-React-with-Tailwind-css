import { FaHeart } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdPhoneForwarded } from "react-icons/md";


function Specialists() {
    return (
      <div>
      
        <div className="bg-cover bg-center bg-[url('https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-slide-1.jpg')] text-white py-12 sm:py-20 md:py-24 flex items-center justify-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">SPECIALISTS</h2>
            <h5 className="text-lg md:text-xl lg:text-2xl mb-4">20 YEARS CARING ABOUT YOU</h5>
            <p className="text-base md:text-lg lg:text-xl">We are located in New York</p>
          </div>
        </div>
  <div className="container mx-auto px-11">
        <div className="container mx-auto mt-[-1rem] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-600 text-white p-4 flex items-center justify-center">
            <FaHeart className="mr-5" />
              <p className="text-base">Medical Treatment</p>
            </div>
            
              
            <button  className="bg-blue-600 text-white p-4 flex items-center justify-center">
            
              Doctors Timetable
              <FaRegArrowAltCircleRight className="ml-5" />
            </button>
            
            <button className="bg-blue-600 text-white p-4 flex items-center justify-center">
              Opening Hours
              <FaRegArrowAltCircleRight className="ml-5" />
            </button>
            <div className="bg-blue-900 text-white p-4 flex items-center justify-center">
            <MdPhoneForwarded className="mr-5"/>
              <p className="text-base">(800) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Specialists;
  