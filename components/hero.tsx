'use client'

import { Phone } from "lucide-react"
import Image from "next/image"
import AvatarCircles from "./avatar-circles"
import { DotPattern } from "./dot-pattern"
import Flag from "./icons/flag"
import { QuoteForm } from "./quote-form"
import { Rating } from "./rating"

export function Hero() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] pt-[--header-height] relative">
      <div className="grid lg:grid-cols-2">
        {/* Left Column */}
        <div className="relative flex flex-col z-10">
          <div className="flex-1">
            <Image
              src="https://utfs.io/f/AcrfdPTHiyV6fPExRbUltdkbpDn2rHW7hwPxgqz0Gu1yIRcm"
              alt="Team of movers posing with furniture"
              className="object-cover rounded-lg"
              layout="fill"
            />
            <div className="absolute inset-0 bg-chart-3/75" />
            <div className="relative p-4 lg:p-12 text-background shadow-black drop-shadow-sm">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{process.env.NEXT_PUBLIC_COMPANY_NAME}</h1>
              <p className="mb-6 lg:mb-8 text-sm lg:text-base">
                {process.env.NEXT_PUBLIC_COMPANY_NAME} in {process.env.NEXT_PUBLIC_LOCATION} is a team of passionate movers providing Moving and Relocating services with
                professionals trained and certified to maintain, protect and enhance your moving experience. We simplify Home
                Moving with the utmost goal of providing better valued services to everyone who books with us.
              </p>
              <ul className="mb-6 lg:mb-8 text-sm lg:text-base">
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="font-medium">Long Distance Provincial Moving</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="font-medium">Moving to or from the USA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="font-medium">Moving Overseas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="font-medium">Corporate Relocation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="font-medium">Storage & Warehousing</span>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <AvatarCircles />
                <div className="text-muted">
                  <div className="flex space-x-2">
                    <Rating value={5} />
                    <span className="text-xs">(4.9)</span>
                  </div>
                  <div><span className="font-semibold">10+ years</span> in service!</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            {/* Bottom bar remains the same */}
            <div className="relative bg-chart-3 p-4 lg:p-6 lg:h-full flex items-center">
              <div>
                <span className="text-muted text-sm lg:text-base">Operated by</span>
                <a target="_blank" href={process.env.NEXT_PUBLIC_TENANT_URL} className="text-background text-lg lg:text-2xl font-bold flex items-center">TNM <span><Flag className="h-6 w-6 lg:h-8 lg:w-8 ml-2" /></span></a>
              </div>
            </div>

            <div className="relative bg-chart-4 p-4 lg:p-6 col-span-2 flex items-center">
              <div>
                <div className="text-foreground text-sm lg:text-base">Get a Free Over the Phone Quote</div>
                <a href="tel:(519)697-0130" className="text-base lg:text-lg flex items-center gap-2 text-foreground font-semibold">
                  <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span>(519) 697-0130</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-muted lg:min-h-[calc(100vh-var(--header-height))] relative">
          <DotPattern className="[mask-image:radial-gradient(400px_circle_at_50%,white,transparent)]" />
          <div className="max-w-xl mx-auto p-6 overflow-y-auto h-full relative">
            <div className="relative">
              <span className="sr-only absolute top-[calc(var(--header-height)*-1-1rem)]" id="quote-form" />
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}