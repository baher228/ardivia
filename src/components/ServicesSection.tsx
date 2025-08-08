import ServiceCard from "./ServiceCard";

const DesignIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/photos/services/Design.jpg",
      title: "DESIGN",
      description:
        "Innovative and inspirational designs created for private, residential gardens, roof terraces, commercial outside spaces and schools.",
    },
    {
      imageSrc: "/photos/services/landscaping.jpg",
      title: "LANDSCAPE ARCHITECTURE",
      description:
        "Landscaping gardens and outdoor spaces to exacting standards for private residential clients, Garden Designers and Landscape Architects.",
    },
    {
      imageSrc: "/photos/services/garden.jpg",
      title: "LANDSCAPING",
      description:
        "Garden maintenance for residential & commercial clients across London & the Home Counties. Ensuring your garden will look beautiful all year round.",
    },
    {
      imageSrc: "/photos/services/maintenance.jpg",
      title: "MAINTENANCE",
      description:
        "Viterra Landscapes supplies Cane-line - stylish outdoor furniture to accessorise your garden and enjoy the great outdoors.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <header className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800">
            Ardivia is an established landscape and garden design
            company; building and maintaining gardens and outdoor spaces in London
            and the Home Counties.
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
