"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  imageSrc?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  icon,
  title,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-2 hover: cursor-pointer hover:shadow-2xl ${
        isVisible ? "animate-fadeSlideUp" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative h-64 overflow-hidden group">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        )}
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="text-green-700 font-semibold hover:text-green-600 transition-colors duration-300"
        >
          SEE MORE
        </a>
      </div>

      {/* Inline Tailwind custom animation styles */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
