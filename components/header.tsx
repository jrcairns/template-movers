'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ExternalLink, Menu, PartyPopper, Phone } from "lucide-react"
import Link from "next/link"
import { ServiceIcon } from "./service-icon"
import { buttonVariants } from "./ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"

const services = [
  {
    icon: "map",
    title: "Long Distance Moving",
    description: "Professional moving services across provinces with care and precision.",
    href: "/services/long-distance"
  },
  {
    icon: "statue",
    title: "USA Moving",
    description: "Seamless cross-border relocations between Canada and the United States.",
    href: "/services/usa-moving"
  },
  {
    icon: "ship",
    title: "Moving Overseas",
    description: "International moving services with comprehensive logistics support.",
    href: "/services/international"
  },
  {
    icon: "building",
    title: "Corporate Relocation",
    description: "Specialized moving solutions for businesses and employees.",
    href: "/services/corporate"
  },
  {
    icon: "warehouse",
    title: "Storage Solutions",
    description: "Secure storage facilities available across major Canadian cities.",
    href: "/services/storage"
  }
]

export function Header() {
  return (
    <header className="w-full relative z-50">
      {/* Announcement Bar - 44px height */}
      <div className="w-full bg-chart-3">
        <div className="flex items-center justify-between container px-4 mx-auto text-background text-sm h-11">
          <p className="flex items-center justify-center gap-2 max-w-[70%] md:max-w-none">
            <PartyPopper className="h-4 w-4" />
            <span className="hidden lg:block">
              {"We've officially hit 400+ Google Reviews with a 4.9 Rating"}
            </span>
            <a href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/90 underline whitespace-nowrap flex items-center gap-1">
              Google Reviews <ExternalLink className="h-3 w-3" />
            </a>
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={`tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`} className="flex items-center gap-2 hover:text-background/90">
                <Phone className="h-4 w-4" />
                <span>{process.env.NEXT_PUBLIC_CONTACT_NUMBER}</span>
              </Link>
            </div>
            <div className="w-px h-4 bg-background/20 mx-4" />
            <Link href="/get-a-quote" className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      {/* Updated Main Navigation - Reduced height */}
      <div className="h-[64px] lg:h-[84px] flex items-center border-b bg-background">
        <div className="container mx-auto px-4">
          <nav className="flex items-center">
            <div className="flex items-center gap-8 justify-between w-full">
              <div className="flex flex-col">
                <Link href="/" className="text-base lg:text-lg font-bold tracking-tight">
                  {process.env.NEXT_PUBLIC_COMPANY_NAME}
                </Link>
                <span className="text-xs lg:text-sm text-gray-600">Hello, Bonjour, Hola, 你好, Ciao</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                          {services.map((service) => (
                            <li key={service.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="text-chart-3">
                                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                                    </div>
                                    <div className="text-sm font-medium leading-none">{service.title}</div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/locations" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          About Us
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a
                        href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={navigationMenuTriggerStyle()}
                      >
                        Reviews
                      </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Contact
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Mobile Navigation */}
              <div className="lg:hidden">
                <Drawer>
                  <DrawerTrigger asChild>
                    <button className="p-2 hover:bg-accent rounded-md">
                      <Menu className="h-6 w-6" />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="px-4 py-6 flex flex-col">
                      <div className="space-y-4">
                        {/* Services Accordion */}
                        <div className="border-b pb-4">
                          <div className="font-medium mb-2">Services</div>
                          <div className="space-y-2">
                            {services.map((service) => (
                              <Link
                                key={service.title}
                                href={service.href}
                                className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                              >
                                <ServiceIcon name={service.icon} className="h-5 w-5 text-chart-3" />
                                <span className="text-sm">{service.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Other Navigation Links */}
                        <div className="space-y-2">
                          <Link
                            href="/locations"
                            className="block p-2 hover:bg-accent rounded-md"
                          >
                            About Us
                          </Link>
                          <a
                            href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                          >
                            Reviews
                            <ExternalLink className="h-4 w-4" />
                          </a>
                          <Link
                            href="/contact"
                            className="block p-2 hover:bg-accent rounded-md"
                          >
                            Contact
                          </Link>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="border-t mt-4 pt-4 space-y-3">
                        <Link
                          href="/get-a-quote"
                          className={cn(buttonVariants({ size: "lg" }), "w-full")}
                        >
                          Get a Quote
                        </Link>
                        <Link
                          href={`tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`}
                          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          {process.env.NEXT_PUBLIC_CONTACT_NUMBER}
                        </Link>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}