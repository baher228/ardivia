import ServiceCard from "./ServiceCard";

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
      title: "FURNITURE",
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
    <section className="bg-[#f5f7f3] 2xl:py-16 md:py-12 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
      <header className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800">
            Ardivia is an established landscape and garden design
            company; building and maintaining gardens and outdoor spaces in London
            and the Home Counties.

          </h2>
        </header>

        {/* 2×2 tile grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <ServiceCard
              key={`${s.title}-${i}`}
              imageSrc={s.imageSrc}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
