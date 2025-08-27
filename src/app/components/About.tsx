import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-light-gray py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Overlapping Image element */}
          <div className="relative order-2 md:order-1">
            <div className="absolute top-0 left-0 w-full h-full bg-accent rounded-lg transform -rotate-3"></div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"
              alt="Collaborative team working on a project"
              width={500}
              height={400}
              className="rounded-lg object-cover relative z-10 shadow-2xl"
            />
          </div>
          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-clickflow-blue mb-4">
              The ClickFlow Difference
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our philosophy is simple: create websites that are not only
              beautiful but also intuitive and performance-driven. We believe in
              a deeply collaborative process, working hand-in-hand with you to
              understand your vision and translate it into a digital reality.
              Our focus is on bespoke, user-centric design that engages your
              audience and achieves your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
