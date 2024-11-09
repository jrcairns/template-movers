import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function CorporateRelocation() {
    return <React.Fragment>
        <h1>Corporate Relocation Services in {process.env.NEXT_PUBLIC_LOCATION}: Professional Business Moving Solutions</h1>

        <div className="relative h-48 lg:h-96">
            <Image className="object-cover rounded-lg" src="https://utfs.io/f/AcrfdPTHiyV67ZZoGyU2H64QRonzDBfjhgUvMNZkTeIScX2K" alt="Corporate Relocation" layout="fill" />
        </div>

        <p>Corporate relocations require precise planning and seamless execution. Our team at {process.env.NEXT_PUBLIC_COMPANY_NAME} specializes in business moves and employee relocations in {process.env.NEXT_PUBLIC_LOCATION}.</p>
        <p><strong>We provide comprehensive corporate moving services to ensure minimal business disruption.</strong> Our experienced team handles everything from office equipment and furniture to employee household relocations.</p>
        <p>From {process.env.NEXT_PUBLIC_LOCATION}, we help businesses of all sizes relocate efficiently. Whether you're moving your office across town or relocating employees internationally, we ensure a smooth transition.</p>

        <h2>Corporate Moving Services</h2>
        <p>Our corporate relocation solutions include:</p>
        <ul>
            <li>Office moves and transitions</li>
            <li>Employee relocation assistance</li>
            <li>IT and equipment moving</li>
            <li>Furniture installation and reconfiguration</li>
            <li>Document and file management</li>
            <li>Storage solutions</li>
            <li>Project management</li>
            <li>Asset disposal and recycling</li>
        </ul>

        <h2>Planning Your Corporate Move</h2>
        <p>Successful business relocations require detailed planning:</p>
        <ol>
            <li>Initial consultation and needs assessment</li>
            <li>Development of moving timeline</li>
            <li>Space planning and layout design</li>
            <li>IT infrastructure coordination</li>
            <li>Employee communication strategy</li>
        </ol>
        <p>We recommend starting the planning process 3-6 months before your target move date.</p>

        <h2>Office Moving Process</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Phase</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead>Key Activities</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Planning</TableCell>
                    <TableCell>3-6 months before</TableCell>
                    <TableCell>Site surveys, timeline development</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Preparation</TableCell>
                    <TableCell>1-3 months before</TableCell>
                    <TableCell>Packing strategy, labeling systems</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Execution</TableCell>
                    <TableCell>Move weekend</TableCell>
                    <TableCell>Physical relocation, setup</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Employee Relocation Support</h2>
        <p>We offer comprehensive employee relocation services:</p>
        <ul>
            <li>Home finding assistance</li>
            <li>School search support</li>
            <li>Area orientation tours</li>
            <li>Temporary housing coordination</li>
            <li>Moving services for household goods</li>
            <li>Vehicle transportation</li>
            <li>Storage solutions</li>
            <li>Visa and immigration support</li>
        </ul>

        <h2>IT and Equipment Moving</h2>
        <p>Specialized services for technology relocation:</p>
        <ul>
            <li>Server room moves</li>
            <li>Workstation disconnection/reconnection</li>
            <li>Cable management</li>
            <li>Equipment tracking systems</li>
            <li>Secure data center relocation</li>
            <li>Specialized packing materials</li>
        </ul>

        <h2>Project Management</h2>
        <p>Our dedicated project managers oversee:</p>
        <ul>
            <li>Timeline development and management</li>
            <li>Budget tracking and control</li>
            <li>Vendor coordination</li>
            <li>Risk assessment and mitigation</li>
            <li>Quality control measures</li>
            <li>Progress reporting</li>
        </ul>

        <h2>Cost Considerations</h2>
        <p>Several factors influence corporate moving costs:</p>
        <ul>
            <li>Size of office space</li>
            <li>Number of employees</li>
            <li>Distance of move</li>
            <li>Specialty equipment requirements</li>
            <li>Timeline constraints</li>
            <li>Storage needs</li>
            <li>Additional services required</li>
        </ul>

        <h2>Move Management Timeline</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Time Before Move</TableHead>
                    <TableHead>Critical Tasks</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>6 months</TableCell>
                    <TableCell>Select moving company, create master plan</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3 months</TableCell>
                    <TableCell>Begin employee communications, order supplies</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1 month</TableCell>
                    <TableCell>Finalize details, start packing non-essentials</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1 week</TableCell>
                    <TableCell>Final checks, backup critical data</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Move day</TableCell>
                    <TableCell>Execute relocation plan</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Post-Move Support</h2>
        <p>Our services continue after the move:</p>
        <ul>
            <li>Furniture and equipment setup</li>
            <li>Systems testing and verification</li>
            <li>Employee orientation</li>
            <li>Debris removal</li>
            <li>Storage management</li>
            <li>Post-move assessment</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <p>Common questions about corporate relocations in {process.env.NEXT_PUBLIC_LOCATION}.</p>

        <Accordion type="multiple" className="w-full mt-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>How long does a typical office move take?</AccordionTrigger>
                <AccordionContent>
                    The duration depends on office size and complexity. Small offices might take a weekend, while larger relocations can take several weeks. {process.env.NEXT_PUBLIC_COMPANY_NAME} will provide a detailed timeline based on your specific needs.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>How do you handle sensitive equipment and data?</AccordionTrigger>
                <AccordionContent>
                    We use specialized packing materials and techniques for sensitive equipment. Our team is trained in handling IT infrastructure and follows strict security protocols. We coordinate with your IT team to ensure proper handling of all technology assets.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>What employee relocation support do you provide?</AccordionTrigger>
                <AccordionContent>
                    {process.env.NEXT_PUBLIC_COMPANY_NAME} offers comprehensive employee relocation services, including home finding, school search, area orientation, and moving services. We can customize packages based on your company's policies.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>Can you move during business hours?</AccordionTrigger>
                <AccordionContent>
                    Yes, we can schedule moves during business hours, evenings, or weekends. We'll work with you to minimize disruption to your operations and create a schedule that best suits your needs.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>Do you provide storage solutions?</AccordionTrigger>
                <AccordionContent>
                    Yes, {process.env.NEXT_PUBLIC_COMPANY_NAME} offers both short-term and long-term storage solutions. Our secure facilities can accommodate office furniture, equipment, and documents during your transition.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger>What insurance coverage is provided?</AccordionTrigger>
                <AccordionContent>
                    We offer comprehensive insurance coverage for corporate moves. This includes protection for office equipment, furniture, and employee belongings. We'll work with you to determine the appropriate coverage levels for your needs.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </React.Fragment>
} 