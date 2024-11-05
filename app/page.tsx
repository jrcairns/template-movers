import { Hero } from "@/components/hero";
import { ServiceIcon } from "@/components/service-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Stepper } from "@/components/ui/stepper";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
      description: "Since 1990, we've helped tens of thousands of Canadian families move long-distance. Over that time, we've learned a thing or two about getting belongings from one province to another safely and on-time."
    },
    {
      icon: "statue",
      title: "Moving to or from the USA",
      description: "Having performed thousands of household relocations from Canada to the U.S. and back, we have mastered cross-border moving and use our experience to assure our clients top quality service without compromise."
    },
    {
      icon: "ship",
      title: "Moving Overseas",
      description: "Our team has helped people move all over the world and back! We will be pleased to tailor our services to suit your specific needs."
    },
    {
      icon: "building",
      title: "Corporate Relocation",
      description: "We reduce the stress of changing residences, cities and even countries. Our commitment to exceptional customer service is our driving force and a great percentage of our business is from referrals and repeat business."
    },
    {
      icon: "warehouse",
      title: "Storage & Warehousing",
      description: "Whether you need temporary storage for your possessions during a household move or long-term storage we can accommodate all storage needs with our agent network in all major cities within Canada."
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

  return (
    <div>
      <section className="relative">
        <Hero />
      </section>
      <section className="bg-background border-t grid lg:grid-cols-2">
        {/* Left Column - Moving Process */}
        <div className="p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold mb-12">Your Moving Process</h2>
            <Stepper steps={movingSteps} />
          </div>
        </div>

        {/* Right Column - Why Choose Us Card */}
        <div>
          <div className="max-w-xl mx-auto p-6">
            {/* <Card> */}
            {/* <CardContent className="p-6"> */}
            <img
              src="https://static.wixstatic.com/media/5bc63f_e6b0aea0967648c09d65b431c26568bf~mv2.jpg/v1/fill/w_1483,h_1224,al_l,q_90,enc_auto/5bc63f_e6b0aea0967648c09d65b431c26568bf~mv2.jpg"
              alt="Moving team"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Why Choose {process.env.NEXT_PUBLIC_COMPANY_NAME}?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Professional and experienced moving team</li>
              <li>✓ Fully insured and licensed</li>
              <li>✓ Competitive and transparent pricing</li>
              <li>✓ Careful handling of your belongings</li>
              <li>✓ Local and long-distance moving services</li>
            </ul>
            {/* </CardContent> */}
            {/* </Card> */}
          </div>
        </div>
      </section>

      {/* Updated Services Section */}
      <section className="py-24 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
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
                      <a
                        href="#"
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
                      </a>
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
                      <a
                        href="#"
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
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

      {/* Footer with CTA */}
      <footer className="bg-background border-t">
        {/* CTA Section */}
        <div className="bg-chart-3 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                Whether you're moving across the province or across borders, we're here to make your move smooth and stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-base font-medium text-chart-3 shadow transition-colors hover:bg-white/90"
                >
                  Get a Quote
                </Link>
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {process.env.NEXT_PUBLIC_CONTACT_NUMBER}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-lg font-semibold">{process.env.NEXT_PUBLIC_COMPANY_NAME}</h3>
              <p className="text-muted-foreground">Professional moving services across Canada and beyond. Licensed, insured, and committed to excellence.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>London, Ontario</p>
                <p>{process.env.NEXT_PUBLIC_CONTACT_NUMBER}</p>
                <p>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/get-a-quote" className="block text-muted-foreground hover:text-foreground">Get a Quote</Link>
                <Link href="/locations" className="block text-muted-foreground hover:text-foreground">Service Areas</Link>
                <a href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground">Reviews</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                <Link href="/terms" className="block text-muted-foreground hover:text-foreground">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_COMPANY_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
