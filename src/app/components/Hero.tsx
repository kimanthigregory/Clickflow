const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-clickflow-blue overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-clickflow-blue via-[#0f274d] to-[#0c1e3a] opacity-90"></div>
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -translate-x-1/2"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Crafting Digital Experiences That{" "}
          <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">
            Convert
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          We design and build modern, high-performance websites tailored to your
          business needs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#packages"
            className="px-6 py-3 rounded-full bg-accent text-clickflow-blue font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            View Our Packages
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-gray-400 text-white font-medium hover:bg-white/10 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
