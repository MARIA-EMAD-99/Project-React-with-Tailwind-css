function Aboutus() {
  return (
    <div className="container mx-auto mt-24 px-8">
      <div className="flex flex-col md:flex-row md:gap-40 items-center lg:flex justify-center">
        <div className="md:w-1/2">
          <h3 className="text-3xl md:text-4xl mb-4">About Us</h3>
          <p className="text-base md:text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-base md:text-lg mb-8 md:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum pretium, tortor risus dapibus tortor, eu suscipit orci leo sed nisl. Integer et ipsum eu nulla auctor mattis sit amet in diam. Vestibulum non ornare arcu. Class aptent taciti sociosqu ad...</p>
          <div className="mt-8">
            <button className="border border-black px-4 py-2 my-5 hover:bg-black hover:text-white transition-colors duration-300">
              READ MORE
            </button>
          </div>
        </div>
        <div className="md:w-2/2">
          <img src="./../../../src/assets/medical-gallery-1.jpg" alt="Medical slide" className="w-full  h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
