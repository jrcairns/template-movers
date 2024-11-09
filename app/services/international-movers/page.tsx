import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function InternationalMoving() {
    return <React.Fragment>
        <h1>International Moving Services in {process.env.NEXT_PUBLIC_LOCATION}: Expert Overseas Relocation Services</h1>

        <div className="relative h-48 lg:h-96">
            <Image className="object-cover rounded-lg" src="https://utfs.io/f/AcrfdPTHiyV68pGN6Dirlf26XzIEcQL4sdSvFgmHtuW7iy9w" alt="International Moving" layout="fill" />
        </div>

        <p>Moving internationally requires extensive planning and expertise. Our team at {process.env.NEXT_PUBLIC_COMPANY_NAME} specializes in overseas relocations from {process.env.NEXT_PUBLIC_LOCATION}.</p>
        <p><strong>We provide comprehensive international moving services to ensure a smooth transition to your new country.</strong> Our experienced team handles everything from customs documentation to international shipping and delivery.</p>
        <p>From {process.env.NEXT_PUBLIC_LOCATION}, we coordinate moves to destinations worldwide. Our global network of partners helps ensure reliable service wherever you're heading.</p>

        <h2>Understanding International Relocation</h2>
        <p>International moves involve complex logistics and planning. Here are key considerations for your overseas move:</p>
        <ul>
            <li>International customs regulations</li>
            <li>Import duties and taxes</li>
            <li>Shipping container options</li>
            <li>Air freight vs. sea freight</li>
            <li>Destination country requirements</li>
            <li>International insurance coverage</li>
            <li>Currency exchange considerations</li>
            <li>Time zone differences</li>
        </ul>

        <h2>Planning Your International Move</h2>
        <p>Successful international relocation requires careful preparation:</p>
        <ol>
            <li>Research visa requirements</li>
            <li>Obtain necessary permits</li>
            <li>Schedule shipping containers</li>
            <li>Arrange international insurance</li>
            <li>Plan temporary accommodation</li>
        </ol>
        <p>Start planning 16-20 weeks before your move date to ensure smooth customs clearance and shipping arrangements.</p>

        <h2>International Shipping Methods</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Transit Time</TableHead>
                    <TableHead>Best For</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Air Freight</TableCell>
                    <TableCell>1-2 weeks</TableCell>
                    <TableCell>Urgent items, smaller shipments</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Sea Freight</TableCell>
                    <TableCell>4-8 weeks</TableCell>
                    <TableCell>Large shipments, cost-effective</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Combined Service</TableCell>
                    <TableCell>Varies</TableCell>
                    <TableCell>Balanced solution</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Customs Documentation</h2>
        <p>Every country has specific customs requirements. Common documents include:</p>
        <ul>
            <li>Detailed inventory list</li>
            <li>Passport copies</li>
            <li>Visa documentation</li>
            <li>Work permits</li>
            <li>Customs declaration forms</li>
            <li>Proof of residence</li>
            <li>Value declarations</li>
        </ul>

        <h2>International Moving Costs</h2>
        <p>Several factors affect international moving costs:</p>
        <ul>
            <li>Distance to destination</li>
            <li>Shipping method chosen</li>
            <li>Volume and weight of items</li>
            <li>Insurance coverage</li>
            <li>Customs duties and taxes</li>
            <li>Packing services</li>
            <li>Storage requirements</li>
        </ul>

        <h2>Packing for International Moves</h2>
        <p>International shipping requires special packing considerations:</p>
        <ul>
            <li>Climate-controlled containers</li>
            <li>Marine-grade packing materials</li>
            <li>Custom crating for valuables</li>
            <li>Moisture protection</li>
            <li>Impact-resistant packaging</li>
            <li>International labeling standards</li>
        </ul>

        <h2>International Insurance Coverage</h2>
        <p>Comprehensive insurance is crucial for international moves:</p>
        <ul>
            <li>All-risk coverage</li>
            <li>Marine insurance</li>
            <li>Storage insurance</li>
            <li>High-value item protection</li>
            <li>Door-to-door coverage</li>
        </ul>

        <h2>Moving Timeline</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Weeks Before</TableHead>
                    <TableHead>Tasks</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>20 weeks</TableCell>
                    <TableCell>Begin visa process</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>16 weeks</TableCell>
                    <TableCell>Book shipping container</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>12 weeks</TableCell>
                    <TableCell>Start packing, documentation</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>8 weeks</TableCell>
                    <TableCell>Arrange customs clearance</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4 weeks</TableCell>
                    <TableCell>Confirm all arrangements</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Destination Services</h2>
        <p>We provide comprehensive support at your destination:</p>
        <ul>
            <li>Customs clearance assistance</li>
            <li>Delivery coordination</li>
            <li>Unpacking services</li>
            <li>Furniture assembly</li>
            <li>Debris removal</li>
            <li>Storage solutions</li>
            <li>Local orientation</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <p>International moves from {process.env.NEXT_PUBLIC_LOCATION} involve many considerations. Here are answers to common questions about overseas relocations.</p>

        <Accordion type="multiple" className="w-full mt-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>How long does international shipping take?</AccordionTrigger>
                <AccordionContent>
                    Shipping times vary by destination and method. Sea freight typically takes 4-8 weeks, while air freight can arrive in 1-2 weeks. {process.env.NEXT_PUBLIC_COMPANY_NAME} will provide detailed timing estimates for your specific move.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>What about customs clearance?</AccordionTrigger>
                <AccordionContent>
                    Our team at {process.env.NEXT_PUBLIC_COMPANY_NAME} handles all customs documentation and clearance procedures. We'll guide you through the required paperwork and ensure compliance with destination country regulations.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>How should I pack for an international move?</AccordionTrigger>
                <AccordionContent>
                    International moves require special packing materials and techniques. {process.env.NEXT_PUBLIC_COMPANY_NAME} provides professional packing services using marine-grade materials to protect your belongings during overseas transport.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>What items are prohibited for international shipping?</AccordionTrigger>
                <AccordionContent>
                    Prohibited items vary by country but typically include perishables, hazardous materials, and certain electronics. {process.env.NEXT_PUBLIC_COMPANY_NAME} will provide a detailed list based on your destination country.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>Do you provide storage services?</AccordionTrigger>
                <AccordionContent>
                    Yes, {process.env.NEXT_PUBLIC_COMPANY_NAME} offers both origin and destination storage solutions. Our facilities are secure, climate-controlled, and available for both short and long-term storage needs.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger>What type of insurance is recommended?</AccordionTrigger>
                <AccordionContent>
                    We recommend comprehensive all-risk insurance for international moves. This covers your belongings during packing, transport, and delivery. {process.env.NEXT_PUBLIC_COMPANY_NAME} offers various coverage options to suit your needs.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </React.Fragment>
} 