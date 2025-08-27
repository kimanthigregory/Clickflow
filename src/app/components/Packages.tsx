import { CheckCircleIcon } from "@heroicons/react/24/solid";

const packages = [
  {
    name: "Starter Site",
    price: "Ksh 15,000",
    description:
      "Best for small businesses, churches, and startups looking for an affordable online presence.",
    features: [
      "Single-page design",
      "Mobile-first & fully responsive",
      "Basic SEO (Google visibility)",
      "Contact form with WhatsApp integration",
      "Free .co.ke domain for 1 year",
      "M-PESA Till/Paybill payment guide",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "Ksh 35,000",
    description:
      "Most popular for growing businesses that want to attract more clients online.",
    features: [
      "Multi-page design (up to 5 pages)",
      "Advanced SEO & performance optimization",
      "Blog or news section setup",
      "CRM or Google Forms integration",
      "3 months of free support & updates",
      "WhatsApp chat button + email contact",
      "Free .co.ke domain + hosting (1 year)",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description:
      "Perfect for organizations needing a powerful, custom solution.",
    features: [
      "Fully custom design (unlimited pages)",
      "E-commerce functionality (M-PESA, Cards, PayPal)",
      "Headless CMS or WordPress integration",
      "Dedicated training for your team",
      "Ongoing website maintenance & support",
      "Priority customer service",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-clickflow-blue">
            Our Web Design Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan to get your project started.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`border rounded-lg p-8 flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? "border-accent shadow-2xl transform lg:scale-105"
                  : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="text-center mb-4">
                  <span className="bg-accent text-clickflow-blue text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-clickflow-blue text-center">
                {pkg.name}
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                {pkg.description}
              </p>
              <div className="mt-6 text-center text-4xl font-extrabold text-clickflow-blue">
                {pkg.price}
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${
                    pkg.popular
                      ? "bg-accent text-clickflow-blue hover:bg-opacity-90"
                      : "bg-clickflow-blue text-white hover:bg-opacity-90"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
