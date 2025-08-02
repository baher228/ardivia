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
      icon: <DesignIcon />,
      title: "DESIGN",
      description:
        "Innovative and inspirational designs created for private, residential gardens, roof terraces, commercial outside spaces and schools.",
    },
    {
      imageSrc:
        "https://www.belderbos.co.uk/wp-content/uploads/2018/09/Belderbos-Landscapes-Garden-Design-Holland-Park-1-1-768x512.jpg",
      title: "LANDSCAPE ARCHITECTURE",
      description:
        "Landscaping gardens and outdoor spaces to exacting standards for private residential clients, Garden Designers and Landscape Architects.",
    },
    {
      imageSrc:
        "https://www.belderbos.co.uk/wp-content/uploads/2019/10/water-feature-1-768x512.jpg",
      title: "LANDSCAPING",
      description:
        "Garden maintenance for residential & commercial clients across London & the Home Counties. Ensuring your garden will look beautiful all year round.",
    },
    {
      imageSrc:
        "https://www.belderbos.co.uk/wp-content/uploads/2016/09/IMG_3515-768x512.jpg",
      title: "MAINTENANCE",
      description:
        "Viterra Landscapes supplies Cane-line - stylish outdoor furniture to accessorise your garden and enjoy the great outdoors.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-2xl font-light text-gray-700 mb-12">
          Viterra Landscapes is an established landscape and garden design
          company; building and maintaining gardens and outdoor spaces in London
          and the Home Counties.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
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
