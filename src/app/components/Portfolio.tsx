const projects = [
  {
    title: "Manzi Homes",
    description: "A modern, professional website for a real estate agency.",
    span: "col-span-1 md:col-span-2",
    liveSite: "http://manzi-homes-p8hf.vercel.app/",
    imageUrl: "/Manzi-homes.jpg",
  },
  {
    title: "Lex & Co. Advocates",
    description:
      "A website for a legal firm committed to providing personalized legal solutions.",
    span: "col-span-1",
    liveSite: "https://lex-and-co-advocates.vercel.app/",
    imageUrl: "/lawyer.jpg",
  },
  {
    title: "Fairview Gardens",
    description:
      "An elegant website for a coffee estate and premium events venue, specializing in weddings.",
    span: "col-span-1",
    liveSite: "https://fairviewgarden.co.ke/",
    imageUrl: "/fairview.jpg",
  },
  {
    title: "Stadium Status",
    description:
      "A professional website for an event and experiential marketing agency.",
    span: "col-span-1 md:col-span-2",
    liveSite: "https://www.stadiumstatus.org/",
    imageUrl: "/stadiumstatus.jpg",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-light-gray py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-clickflow-blue">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse into our passion for design and development.
          </p>
        </div>
        {/* Unique staggered grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg ${project.span}`}
            >
              {/* This is the updated div for the background image */}
              <div
                className={`h-80 bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              ></div>
              <div className="absolute inset-0 bg-clickflow-blue bg-opacity-70 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-accent mt-2">{project.description}</p>
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white border-b-2 border-accent hover:border-white transition-colors duration-300"
                >
                  View Live Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
