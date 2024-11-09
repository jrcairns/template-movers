import React from "react";
import Image from "next/image";
import { QuoteForm } from "@/components/quote-form";

export default function AboutUs() {
    return <div className="pt-[--header-height] text-base bg-muted">
        <div className="py-4 lg:py-12 container mx-auto px-4 flex-col lg:flex-row flex gap-12 items-start">
            <div className="mx-auto max-w-prose space-y-6">
                <h1>About {process.env.NEXT_PUBLIC_COMPANY_NAME}: Your Trusted Moving Partner in {process.env.NEXT_PUBLIC_LOCATION}</h1>

                <div className="relative h-48 lg:h-96">
                    <Image className="object-cover rounded-lg" src="https://utfs.io/f/AcrfdPTHiyV6fPExRbUltdkbpDn2rHW7hwPxgqz0Gu1yIRcm" alt="About Us" layout="fill" />
                </div>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2>The {process.env.NEXT_PUBLIC_COMPANY_NAME} Experience</h2>
                        <p>Moving shouldn't be stressful - it should be an exciting new chapter in your life! While many view moving as a hassle filled with headaches, we see it differently. At {process.env.NEXT_PUBLIC_COMPANY_NAME}, we believe relocating to a new home should be an adventure worth celebrating.</p>
                        <p>We take care of all the challenging aspects of moving, from careful packing to heavy lifting, so you can focus on the excitement of your new beginning. Our delicate approach ensures your transition is smooth and worry-free.</p>
                    </div>

                    <div className="space-y-4">
                        <h2>Award-Winning Service</h2>
                        <p>As a recognized leader in the moving industry in {process.env.NEXT_PUBLIC_LOCATION}, we take pride in providing exceptional service that puts your needs first. Our commitment to quality and safety has earned us the trust of countless satisfied customers.</p>
                        <p>Every move we handle strengthens our expertise and deepens our understanding of our community's needs. Whether your situation is straightforward or uniquely complex, our experienced team has the knowledge to handle it professionally.</p>
                    </div>

                    <div className="space-y-4">
                        <h2>Our Comprehensive Services</h2>

                        <div>
                            <h3>Corporate Relocation</h3>
                            <p>Our specialized corporate relocation services help businesses of all sizes manage their office moves and employee relocations. We understand that business moves require minimal disruption and precise execution, and our experienced team ensures a smooth transition.</p>
                        </div>

                        <div>
                            <h3>International Moving</h3>
                            <p>Moving overseas requires extensive planning and expertise. Our international moving services handle everything from customs documentation to international shipping and delivery, ensuring a seamless transition to your new country.</p>
                        </div>

                        <div>
                            <h3>Long Distance Moving</h3>
                            <p>Whether you're moving across the country or to another province, our long-distance moving services provide comprehensive support for your journey. We handle all aspects of your move with careful planning and attention to detail.</p>
                        </div>

                        <div>
                            <h3>Moving to America</h3>
                            <p>Relocating to the United States comes with unique challenges and requirements. Our specialized USA moving services help navigate the complexities of cross-border moves, ensuring compliance with all regulations while providing a stress-free experience.</p>
                        </div>

                        <div>
                            <h3>Storage and Warehousing</h3>
                            <p>Our secure storage solutions provide flexible options for both short-term and long-term needs. With climate-controlled facilities and state-of-the-art security, your belongings are safe and accessible whenever you need them.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2>Our Commitment</h2>
                        <p>At {process.env.NEXT_PUBLIC_COMPANY_NAME}, we believe in:</p>
                        <ul className="list-disc pl-6">
                            <li>Treating your belongings with the utmost care and respect</li>
                            <li>Providing transparent, honest service</li>
                            <li>Customizing our approach to meet your specific needs</li>
                            <li>Making your move as stress-free as possible</li>
                            <li>Building lasting relationships with our community</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2>Why Choose {process.env.NEXT_PUBLIC_COMPANY_NAME}?</h2>
                        <ul className="list-disc pl-6">
                            <li>Experienced, professional movers</li>
                            <li>Comprehensive moving solutions</li>
                            <li>Specialized services for seniors and businesses</li>
                            <li>Careful handling of your belongings</li>
                            <li>Local knowledge of {process.env.NEXT_PUBLIC_LOCATION}</li>
                            <li>Commitment to customer satisfaction</li>
                        </ul>
                    </div>

                    <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                        <p className="text-lg font-semibold">Ready to experience a better way to move?</p>
                        <p>Don't let the logistics of moving overshadow the excitement of your new beginning. Let {process.env.NEXT_PUBLIC_COMPANY_NAME} handle your relocation while you focus on the adventure ahead. Contact us today to schedule your move!</p>
                    </div>
                </div>
            </div>
            <div className="order-first lg:order-last lg:sticky lg:top-[calc(var(--header-height)+theme('spacing.12'))]">
                <QuoteForm />
            </div>
        </div>
    </div>
} 