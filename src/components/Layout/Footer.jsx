const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="flex justify-center lg:justify-between p-4 border-b">
          <div className="me-5 hidden lg:block">
            <span className="font-bold">Get connected with us on social networks:</span>
          </div>
          <div className="flex">
            <a href="#" className="me-4 text-gray-500 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-gray-500 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-gray-500 hover:text-blue-500">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="me-4 text-gray-500 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-gray-500 hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-gray-500 hover:text-blue-500">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="container mx-auto text-center md:text-left mt-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3">
              <div className="mb-4">
                <h6 className="text-2xl font-bold">
                  <i className="fas fa-gem me-3"></i>Health Counseling
                </h6>
                <p>
                  This is a health Organization. Anyone can Get Recommendation abut Diet, Exercise , Mental and physical. Its provide 24 hour services.
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-2xl font-bold">Our Service</h6>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Health</a>
                </p>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Physical Health</a>
                </p>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Mental Health</a>
                </p>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Recommendation</a>
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-2xl font-bold">Useful links</h6>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-blue-500 hover:underline">Help</a>
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-2xl font-bold">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          &copy; 2021 Copyright:
          <a className="text-blue-500 font-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>

    </>
  );
};

export default Footer;
