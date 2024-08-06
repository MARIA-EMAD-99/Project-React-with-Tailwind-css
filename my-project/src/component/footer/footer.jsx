function Footer() {
    return (
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Location</h4>
              <p className="text-base">Porto Medical</p>
              <p className="text-base">123 Porto Blvd, Suite 100</p>
              <p className="text-base">New York, NY</p>
              <p className="text-base">Phone: 123-456-7890</p>
            </div>
  
            <div>
              <h4 className="text-2xl font-semibold mb-4">Opening Hours</h4>
              <p className="text-base">Mon-Fri: 8:30 am to 5:00 pm</p>
              <p className="text-base">Saturday: 9:30 am to 1:00 pm</p>
              <p className="text-base">Sunday: Closed</p>
            </div>
  
            <div>
              <h4 className="text-2xl font-semibold mb-4">Emergency Cases</h4>
              <p className="text-base">(800) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  