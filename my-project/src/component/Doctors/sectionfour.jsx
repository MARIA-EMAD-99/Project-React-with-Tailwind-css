
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Sectionfour() {
    const doctors = [
      { name: 'Mary Ann Doe', image: './../../../src/assets/doctor-5.jpg', link: '#' },
      { name: 'John Doe', image: './../../../src/assets/doctor-1.jpg', link: '#' },
      { name: 'Robin Doe', image: './../../../src/assets/doctor-2.jpg', link: '#' },
      { name: 'Jessica Doe', image: './../../../src/assets/doctor-3.jpg', link: '#' }
    ];
  
    return (
      <>
        <div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
              {doctors.map((doctor, index) => (
                <div key={index} className="text-center">
                  <img src={doctor.image} alt={doctor.name} className="rounded-full mx-auto" style={{ width: '100%', height: '100%' }} />
                  <div className="inline-flex items-center justify-center bg-white py-2 px-4 text-black mt-0 group hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                    <a href={doctor.link} className="text-black no-underline  group-hover:text-white  ">{doctor.name}</a>
                    <FaRegArrowAltCircleRight className="ml-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Sectionfour;
  