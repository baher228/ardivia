import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services | Ardivia Landscapes",
  description:
    "Comprehensive landscape design, build and maintenance services. From concept to construction and aftercare.",
  openGraph: {
    title: "Services | Ardivia Landscapes",
    description:
      "Comprehensive landscape design, build and maintenance services. From concept to construction and aftercare.",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
