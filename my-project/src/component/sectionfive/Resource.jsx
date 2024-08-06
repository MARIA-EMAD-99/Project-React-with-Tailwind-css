function Resource() {
    const resources = [
      {
        title: 'Prepare for visit',
        image: './../../../src/assets/medical-gallery-2-300x150.jpg',
        description: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis',
      },
      {
        title: 'Surgery process',
        image: './../../../src/assets/medical-gallery-3-300x150.jpg',
        description: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis',
      },
      {
        title: 'Patients',
        image: './../../../src/assets/medical-gallery-4-300x150.jpg',
        description: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis',
      },
    ];
  
    return (
      <div className="mt-40 bg-gray-400 bg-opacity-50 py-8 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <div key={index} className="hover:bg-white hover:shadow-md transition duration-300 ease-in-out rounded p-2">
                <img src={resource.image} alt={resource.title} className="w-full" />
                <div className="text-center mt-2">
                  <button className="text-black hover:text-blue-500">{resource.title}</button>
                  <p className="text-sm">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <button className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Resource;
  