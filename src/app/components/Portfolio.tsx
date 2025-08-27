const projects = [
  {
    title: "Fintech App Redesign",
    description:
      "A sleek, user-friendly interface for a mobile banking platform.",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "E-commerce Store",
    description: "A high-performance online store for a luxury fashion brand.",
    span: "col-span-1",
  },
  {
    title: "SaaS Landing Page",
    description:
      "A conversion-focused landing page for a new software product.",
    span: "col-span-1",
  },
  {
    title: "Corporate Website",
    description: "A professional and modern site for a global consulting firm.",
    span: "col-span-1 md:col-span-2",
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
              {/* Using a placeholder background image */}
              <div
                className={`h-80 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop')]`}
              ></div>
              <div className="absolute inset-0 bg-clickflow-blue bg-opacity-70 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-accent mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
