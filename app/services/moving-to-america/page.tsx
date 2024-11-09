import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function USAMoving() {
    return <React.Fragment>
        <h1>USA Moving Services in {process.env.NEXT_PUBLIC_LOCATION}: Expert Cross-Border Relocation Services for Seamless Transitions</h1>

        <div className="relative h-48 lg:h-96">
            <Image className="object-cover rounded-lg" src="https://utfs.io/f/AcrfdPTHiyV6ulmDMd5I5zTPW8irMUvXfHy320RVn6goG1eF" alt="International Moving" layout="fill" />
        </div>

        <p>Moving between Canada and the USA requires careful planning and expertise. We understand the complexities of cross-border moves and are here to help make your transition smooth.</p>
        <p><strong>We offer specialized cross-border moving services to ensure a hassle-free relocation.</strong> Our team has extensive experience moving people between Canada and the United States. We handle everything from customs documentation to transportation and delivery.</p>
        <p>{process.env.NEXT_PUBLIC_LOCATION} is an ideal starting point for moves to and from the USA. We can help you relocate to any major city in the United States. Our expertise in cross-border regulations and requirements ensures a smooth transition.</p>

        <h2>Understanding Cross-Border Relocation</h2>
        <p>Moving between countries involves more than just transportation. There are specific requirements and considerations for USA moves:</p>
        <ul>
            <li>Customs documentation and clearance</li>
            <li>Import/export regulations</li>
            <li>Restricted and prohibited items</li>
            <li>Vehicle importation rules</li>
            <li>Immigration requirements</li>
            <li>Currency declaration requirements</li>
            <li>Tax implications</li>
            <li>Insurance considerations</li>
        </ul>

        <h2>Planning Your USA Move</h2>
        <p>A successful move to the USA requires careful preparation. Here's what you need to consider:</p>
        <ol>
            <li>Obtain necessary visas and immigration documents</li>
            <li>Create a detailed inventory of items for customs</li>
            <li>Research import restrictions and regulations</li>
            <li>Arrange for cross-border insurance coverage</li>
            <li>Plan your travel arrangements</li>
        </ol>
        <p>Start planning at least 12-16 weeks before your move date. This allows time for documentation processing and customs clearance.</p>

        <h2>Customs Requirements and Documentation</h2>
        <p>Moving to the USA requires specific documentation for customs clearance:</p>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Document Type</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Required For</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Form 3299</TableCell>
                    <TableCell>Declaration for Free Entry</TableCell>
                    <TableCell>Personal Effects</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Detailed Inventory</TableCell>
                    <TableCell>Items Description</TableCell>
                    <TableCell>All Shipments</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Visa Documentation</TableCell>
                    <TableCell>Proof of Legal Entry</TableCell>
                    <TableCell>Immigration</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Vehicle Transportation to the USA</h2>
        <p>Moving vehicles across the border requires special consideration. All vehicles must meet U.S. safety and emissions standards.</p>
        <p>Required documentation for vehicle import:</p>
        <ul>
            <li>Vehicle title and registration</li>
            <li>Proof of ownership</li>
            <li>EPA form 3520-1</li>
            <li>DOT form HS-7</li>
            <li>Customs form 7501</li>
        </ul>

        <h2>Cross-Border Insurance Coverage</h2>
        <p>Proper insurance coverage is essential for international moves. We offer comprehensive coverage options:</p>
        <ul>
            <li>Basic liability coverage</li>
            <li>Full value protection</li>
            <li>Additional coverage for high-value items</li>
            <li>Vehicle transport insurance</li>
            <li>Storage-in-transit coverage</li>
        </ul>

        <h2>Cost Factors for USA Relocation</h2>
        <p>Several factors influence the cost of your USA move:</p>
        <ul>
            <li>Distance to destination</li>
            <li>Volume and weight of belongings</li>
            <li>Customs duties and fees</li>
            <li>Insurance coverage</li>
            <li>Special handling requirements</li>
            <li>Storage needs</li>
            <li>Season and timing</li>
        </ul>

        <h2>Moving Timeline and Scheduling</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Weeks Before Move</TableHead>
                    <TableHead>Tasks to Complete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>16 weeks</TableCell>
                    <TableCell>Begin visa application process</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>12 weeks</TableCell>
                    <TableCell>Book moving services, start inventory</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>8 weeks</TableCell>
                    <TableCell>Begin packing, prepare documents</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4 weeks</TableCell>
                    <TableCell>Finalize customs paperwork</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2 weeks</TableCell>
                    <TableCell>Confirm all arrangements</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Settling in the USA</h2>
        <p>After arriving in the USA, several tasks require attention:</p>
        <ul>
            <li>Obtain Social Security Number</li>
            <li>Open U.S. bank account</li>
            <li>Register vehicle (if applicable)</li>
            <li>Get U.S. driver's license</li>
            <li>Set up utilities and services</li>
            <li>Register for healthcare</li>
            <li>Enroll children in school</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <p>Moving between {process.env.NEXT_PUBLIC_LOCATION} and the USA requires understanding cross-border regulations and choosing the right moving company. Here are answers to common questions about USA relocations.</p>

        <Accordion type="multiple" className="w-full mt-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>What documentation do I need for moving to the USA?</AccordionTrigger>
                <AccordionContent>
                    You'll need a detailed inventory of your belongings, customs forms, and proper identification. Our team at {process.env.NEXT_PUBLIC_COMPANY_NAME} will guide you through the documentation process and ensure everything is properly prepared for customs clearance.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>Can I move my vehicle to the USA?</AccordionTrigger>
                <AccordionContent>
                    Yes, vehicles can be moved to the USA, but they must meet US safety and emissions standards. {process.env.NEXT_PUBLIC_COMPANY_NAME} can help coordinate vehicle transportation and guide you through the importation requirements.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>How long does customs clearance take?</AccordionTrigger>
                <AccordionContent>
                    Customs clearance typically takes 3-5 business days with proper documentation. {process.env.NEXT_PUBLIC_COMPANY_NAME} handles all customs procedures to ensure smooth and timely clearance of your belongings.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>What items are prohibited when moving to the USA?</AccordionTrigger>
                <AccordionContent>
                    Prohibited items include certain foods, plants, weapons, and hazardous materials. {process.env.NEXT_PUBLIC_COMPANY_NAME} will provide a detailed list and help ensure your shipment complies with all regulations.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>Do I need special insurance for international moving?</AccordionTrigger>
                <AccordionContent>
                    Yes, international moving insurance is recommended. {process.env.NEXT_PUBLIC_COMPANY_NAME} offers comprehensive coverage options to protect your belongings during cross-border transportation.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger>How are customs duties calculated?</AccordionTrigger>
                <AccordionContent>
                    Personal effects and household goods are generally duty-free if you've owned them for at least one year. New items may be subject to duties based on their value. {process.env.NEXT_PUBLIC_COMPANY_NAME} will help you understand any potential customs charges.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </React.Fragment>
} 