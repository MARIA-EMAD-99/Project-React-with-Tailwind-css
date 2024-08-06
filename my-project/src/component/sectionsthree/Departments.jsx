function Departments() {
    return (
      <>
        <div className="bg-gray-200 mt-8">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl py-8">Departments</h3>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center space-x-2">
                <img src="./../../../src/assets/department-icon-cardiology.png" alt="Cardiology" />
                <div>
                  <button className="text-black hover:text-white hover:bg-black">Cardiology</button>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum…
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="./../../../src/assets/department-icon-gastroenterology.png" alt="Gastroenterology" />
                <div>
                  <button className="text-black hover:text-white hover:bg-black">Gastroenterology</button>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum…
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="./../../../src/assets/department-icon-dental.png" alt="Dental" />
                <div>
                  <button className="text-black hover:text-white hover:bg-black">Dental</button>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum…
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="./../../../src/assets/department-icon-gynecology.png" alt="Gynecology" />
                <div>
                  <button className="text-black hover:text-white hover:bg-black">Gynecology</button>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum…
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="./../../../src/assets/department-icon-pulmonology.png" alt="Pulmonology" />
                <div>
                  <button className="text-black hover:text-white hover:bg-black">Pulmonology</button>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum…
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="./../../../src/assets/department-icon-hepatology.png" alt="Hepatology" />
                <div>
                  <button className="text-black hover:text-white hover:bg-black">Hepatology</button>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum…
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12  ">
              <button className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white mb-12">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Departments;
  