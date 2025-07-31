import HeroSection from '@/components/HeroSection';
import SectionCard from '@/components/SectionCard';
import Testimonial from '@/components/Testimonial';
import NewsSection from '@/components/NewsSection';

interface Place {
  imageSrc: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function Home() {
  const places: Place[] = [
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2023/05/Goodmans-7-10x7.jpg',
      title: "Goodman's Fields",
      subtitle: "Aldgate, London",
      link: '/place/goodmans-field'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2023/05/Places-WhitehillBordon-thumb-10x6.jpg',
      title: "Whitehill and Bordon",
      subtitle: "Bordon, Hampshire",
      link: '/place/whitehill-and-bordon'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-light text-black">Making places</h2>
            <a href="/places" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">
              view all places →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {places.map((place, index) => (
              <SectionCard
                key={index}
                imageSrc={place.imageSrc}
                title={place.title}
                subtitle={place.subtitle}
                link={place.link}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonial />

      <NewsSection />
    </div>
  );
}
