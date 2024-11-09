import { Hero } from "@/components/hero";
import { ServiceIcon } from "@/components/service-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Stepper } from "@/components/ui/stepper";
import Image from "next/image";
import Link from "next/link";

const movingSteps = [
  {
    title: "Get an Estimate",
    description: "Fill out an estimate form and we will contact you quickly with a detailed estimated price for your move. Our consultants are available to review and guide you through the process.",
  },
  {
    title: "Book Your Move",
    description: "Book your move and secure your preferred moving dates and services. Rest assured knowing you have selected a company that will take care of you.",
  },
  {
    title: "Moving Day",
    description: "Relax as our moving pros load your belongings into our truck, safely transport them to your new home and deliver your items into the rooms of your choice.",
  },
];

const services = [
  {
    icon: "map",
    title: "Long Distance Moving",
    description: "Since 2010, we've helped tens of thousands of Canadian families move long-distance. Over that time, we've learned a thing or two about getting belongings from one province to another safely and on-time.",
    href: "/services/long-distance-movers"
  },
  {
    icon: "statue",
    title: "Moving to or from the USA",
    description: "Having performed thousands of household relocations from Canada to the U.S. and back, we have mastered cross-border moving and use our experience to assure our clients top quality service without compromise.",
    href: "/services/moving-to-america"
  },
  {
    icon: "ship",
    title: "Moving Overseas",
    description: "Our team has helped people move all over the world and back! We will be pleased to tailor our services to suit your specific needs.",
    href: "/services/international-movers"
  },
  {
    icon: "building",
    title: "Corporate Relocation",
    description: "We reduce the stress of changing residences, cities and even countries. Our commitment to exceptional customer service is our driving force and a great percentage of our business is from referrals and repeat business.",
    href: "/services/corporate-relocation"
  },
  {
    icon: "warehouse",
    title: "Storage & Warehousing",
    description: "Whether you need temporary storage for your possessions during a household move or long-term storage we can accommodate all storage needs with our agent network in all major cities within Canada.",
    href: "/services/storage"
  }
];

const faqs = [
  {
    question: "How far in advance should I book my long-distance move?",
    answer: "We recommend booking your long-distance move at least 4-6 weeks in advance. During peak moving season (May-September), it's best to book 6-8 weeks ahead to ensure your preferred dates are available."
  },
  {
    question: "Do you provide packing services?",
    answer: "Yes, we offer full packing and unpacking services. Our professional packers are trained to handle your belongings with care, using high-quality packing materials to ensure everything arrives safely at your destination."
  },
  {
    question: "How do you handle customs for international moves?",
    answer: "Our team has extensive experience with international relocations. We'll guide you through the customs documentation process, help prepare detailed inventories, and ensure compliance with all customs requirements for your destination country."
  },
  {
    question: "What insurance coverage do you provide?",
    answer: "We provide comprehensive moving insurance coverage. Basic liability coverage is included with every move, and we offer additional full-value protection options for complete peace of mind."
  },
  {
    question: "How do you handle specialty items?",
    answer: "We have specialized equipment and trained professionals to handle items like pianos, artwork, antiques, and other valuable or delicate items. We'll create a custom moving plan to ensure these items are transported safely."
  }
];

export default async function Home() {
  return (
    <div>
      <section className="relative border-b">
        <Hero />
      </section>
      <section className="bg-background grid lg:grid-cols-2 lg:gap-16 container mx-auto px-4 py-12">
        {/* Left Column - Moving Process */}
        <div className="">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold mb-4">Your Moving Process</h2>
            <p className="text-muted-foreground mb-8">
              We've simplified the moving process into three easy steps. Our experienced team will guide you through each stage to ensure a smooth and stress-free relocation experience.
            </p>
            <Stepper steps={movingSteps} />
          </div>
        </div>

        {/* Right Column - Why Choose Us Card */}
        <div>
          <div>
            <div className="relative h-48 lg:h-72 mb-4 mt-12 lg:mt-0">
              <Image
                src="https://utfs.io/f/AcrfdPTHiyV6fPExRbUltdkbpDn2rHW7hwPxgqz0Gu1yIRcm"
                alt="Moving team"
                className="object-cover rounded-lg"
                layout="fill"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Why Choose {process.env.NEXT_PUBLIC_COMPANY_NAME}?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Professional and experienced moving team</li>
              <li>✓ Fully insured and licensed</li>
              <li>✓ Competitive and transparent pricing</li>
              <li>✓ Careful handling of your belongings</li>
              <li>✓ Local and long-distance moving services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Updated Services Section - Matching CTA padding */}
      <section className="py-8 lg:py-12 bg-muted border-t">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              From cross-province relocations to international moves, we offer comprehensive moving solutions tailored to your needs. Our experienced team ensures your belongings are handled with care every step of the way.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            {/* First Row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
              {services.slice(0, 2).map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-background rounded-xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <div className="text-chart-3">
                        <ServiceIcon name={service.icon} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                    <div className="mt-auto">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-chart-3 hover:text-chart-3/80 font-medium"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(2).map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-background rounded-xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <div className="text-chart-3">
                        <ServiceIcon name={service.icon} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                    <div className="mt-auto">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-chart-3 hover:text-chart-3/80 font-medium"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Matching CTA padding */}
      <section className="py-8 lg:py-12 bg-background border-t">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our long-distance moving services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
