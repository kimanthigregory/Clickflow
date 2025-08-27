const testimonials = [
  {
    name: "Sarah L.",
    company: "CEO, Innovate Inc.",
    quote:
      "ClickFlow transformed our online presence. Their attention to detail and creative vision resulted in a website that exceeded all our expectations. Highly recommended!",
  },
  {
    name: "Michael B.",
    company: "Founder, TechStart",
    quote:
      "The team at ClickFlow is professional, responsive, and incredibly talented. They delivered a high-performance website on time and on budget. We've seen a significant increase in user engagement since launch.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-clickflow-blue">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light-gray p-8 rounded-lg">
              <p className="text-gray-700 text-lg italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-6">
                <p className="font-bold text-clickflow-blue">
                  {testimonial.name}
                </p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
