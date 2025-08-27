const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-clickflow-blue-textured py-20 md:py-28 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full bg-white/10 text-white placeholder-gray-400 p-3 rounded-lg border-2 border-transparent focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full bg-white/10 text-white placeholder-gray-400 p-3 rounded-lg border-2 border-transparent focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                className="w-full bg-white/10 text-white placeholder-gray-400 p-3 rounded-lg border-2 border-transparent focus:border-accent focus:outline-none transition-colors"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-accent text-clickflow-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="text-center mt-8 text-gray-400">
            Or email us directly at{" "}
            <a
              href="mailto:info@clickflow.com"
              className="text-accent hover:underline"
            >
              info@clickflow.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
