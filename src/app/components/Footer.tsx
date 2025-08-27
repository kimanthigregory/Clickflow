const Footer = () => {
  // We'll use simple text for social icons for now. You can replace these with SVGs.
  const socialLinks = ["Twitter", "LinkedIn", "GitHub"];

  return (
    <footer className="bg-clickflow-blue border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-white">
              Click<span className="text-accent">Flow</span>
            </a>
            <p className="text-gray-400 text-sm mt-1">
              &copy; {new Date().getFullYear()} ClickFlow. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
