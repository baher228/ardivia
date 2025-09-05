import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/photos/services/Design.jpg",
      title: "GARDEN DESIGN",
      description:
        "Crafting the perfect garden space. We will design a garden that suits your lifestyle.",
    },
    {
      imageSrc: "/photos/services/landscaping.jpg",
      title: "PLANT SELECTION",
      description:
        "Hand-picked greenery for your oasis. Our experts select the right plants.",
    },
    {
      imageSrc: "/photos/services/garden.jpg",
      title: "HARDSCAPING",
      description:
        "Adding structure to your landscape. We create functional and aesthetic hardscape features.",
    },
    {
      imageSrc: "/photos/services/maintenance.jpg",
      title: "GARDEN IRRIGATION",
      description:
        "Keeping your garden vibrant all year long. Our irrigation systems guarantee the right care.",
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
