import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/photos/services/design2.webp",
      title: "DESIGN",
      description:
        "Innovative and inspirational designs created for private, residential gardens, roof terraces, commercial outside spaces and schools.",
    },
    {
      imageSrc: "/photos/services/landscaping2.jpg",
      title: "LANDSCAPE ARCHITECTURE",
      description:
        "Landscaping gardens and outdoor spaces to exacting standards for private residential clients.",
    },
    {
      imageSrc: "/photos/services/garden2.webp",
      title: "GARDEN",
      description:
        "Garden maintenance for residential & commercial clients across London. Ensuring your garden will look beautiful all year round.",
    },
    {
      imageSrc: "/photos/services/maintenance2.webp",
      title: "MAINTENANCE",
      description:
        "Ardivia supplies Cane-line - stylish outdoor furniture to accessorise your garden and enjoy the great outdoors.",
    },
  ];

  return (
    <section className="bg-[#f5f7f3] 2xl:py-16 md:py-12 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        

        {/* 2×2 tile grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 justify-items-center">
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
