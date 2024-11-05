'use client'

import { Phone } from "lucide-react"
import AvatarCircles from "./avatar-circles"
import Flag from "./icons/flag"
import { QuoteForm } from "./quote-form"
import { Rating } from "./rating"
import { DotPattern } from "./dot-pattern"

export function Hero() {
  return (
    <div className="min-h-[calc(100vh-128px)] relative">
      <div className="grid lg:grid-cols-2">
        {/* Left Column */}
        <div className="relative flex flex-col z-10">
          <div className="flex-1">
            <img
              alt="Team of movers posing with furniture"
              className="absolute inset-0 h-full w-full object-cover"
              src="https://static.wixstatic.com/media/5bc63f_e6b0aea0967648c09d65b431c26568bf~mv2.jpg/v1/fill/w_1483,h_1224,al_l,q_90,enc_auto/5bc63f_e6b0aea0967648c09d65b431c26568bf~mv2.jpg"
            />
            <div className="absolute inset-0 bg-chart-3/70" />
            <div className="relative p-6 lg:p-12">
              <h1 className="text-background text-4xl font-bold mb-2">Movers in London, Ontario</h1>
              <h2 className="text-background text-3xl font-bold mb-4">True North Movers</h2>
              <p className="text-background/90 mb-8">
                True North Movers in London, Ontario is a team of passionate movers providing Moving and Relocating services with
                professionals trained and certified to maintain, protect and enhance your moving experience. We simplify Home
                Moving with the utmost goal of providing better valued services to everyone who books with us.
              </p>
              <ul className="text-background/90 mb-8">
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
            <div className="relative bg-chart-3 p-6 lg:h-full flex items-center">
              <div>
                <span className="text-muted text-sm">Operated by</span>
                <a href={process.env.NEXT_PUBLIC_TENANT_URL} className="text-background text-2xl font-bold flex items-center">TNM <span><Flag className="h-8 w-8 ml-2" /></span></a>
              </div>
            </div>

            <div className="relative bg-chart-4 p-6 col-span-2">
              <div className="text-foreground text-sm lg:text-base">Get a Free Over the Phone Quote</div>
              <a href="tel:(519)697-0130" className="text-xl mt-1 flex items-center gap-2 text-foreground font-semibold">
                <Phone className="h-5 w-5" />
                <span>(519) 697-0130</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-muted lg:h-[calc(100vh-128px)] relative">
          <DotPattern className="[mask-image:radial-gradient(550px_circle_at_50%,white,transparent)]" />
          <div className="max-w-xl mx-auto p-6 overflow-y-auto h-full relative">
            <div className="">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}