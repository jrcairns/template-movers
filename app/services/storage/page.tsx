import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function Storage() {
    return <React.Fragment>
        <h1>Storage Services in {process.env.NEXT_PUBLIC_LOCATION}: Secure Storage Solutions for Every Need</h1>

        <div className="relative h-48 lg:h-96">
            <Image className="object-cover rounded-lg" src="https://utfs.io/f/AcrfdPTHiyV6jY0JWpf5BZ2A39zpoO0wqbKV8LCUcm6PfdYE" alt="International Moving" layout="fill" />
        </div>

        <p>Finding the right storage solution is crucial for protecting your belongings. Our team at {process.env.NEXT_PUBLIC_COMPANY_NAME} provides secure, flexible storage options in {process.env.NEXT_PUBLIC_LOCATION}.</p>
        <p><strong>We offer comprehensive storage services to meet both short-term and long-term needs.</strong> Our climate-controlled facilities ensure your items remain in perfect condition, whether you're storing household goods, business inventory, or valuable items.</p>
        <p>From {process.env.NEXT_PUBLIC_LOCATION}, we provide easy access to your stored items whenever you need them. Our state-of-the-art security systems and professional staff ensure your belongings are safe and well-maintained.</p>

        <h2>Storage Solutions</h2>
        <p>We offer various storage options to meet your needs:</p>
        <ul>
            <li>Short-term storage</li>
            <li>Long-term storage</li>
            <li>Climate-controlled units</li>
            <li>Business storage</li>
            <li>Document storage</li>
            <li>Vehicle storage</li>
            <li>Moving storage</li>
            <li>Seasonal storage</li>
        </ul>

        <h2>Storage Unit Sizes</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Unit Size</TableHead>
                    <TableHead>Typical Use</TableHead>
                    <TableHead>Capacity</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>5' x 5'</TableCell>
                    <TableCell>Small furniture, boxes</TableCell>
                    <TableCell>Studio apartment</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>10' x 10'</TableCell>
                    <TableCell>1-2 room contents</TableCell>
                    <TableCell>Small home</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>10' x 20'</TableCell>
                    <TableCell>3-4 room contents</TableCell>
                    <TableCell>Large home</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>20' x 20'</TableCell>
                    <TableCell>Commercial storage</TableCell>
                    <TableCell>Business inventory</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Security Features</h2>
        <p>Our storage facilities include comprehensive security measures:</p>
        <ul>
            <li>24/7 video surveillance</li>
            <li>Individual unit alarms</li>
            <li>Controlled access gates</li>
            <li>On-site security staff</li>
            <li>Fire protection systems</li>
            <li>Pest control measures</li>
            <li>Secure lighting</li>
            <li>Electronic access control</li>
        </ul>

        <h2>Climate Control Features</h2>
        <p>Our climate-controlled units maintain optimal conditions:</p>
        <ul>
            <li>Temperature regulation</li>
            <li>Humidity control</li>
            <li>Air filtration</li>
            <li>Weather protection</li>
            <li>Dust prevention</li>
            <li>Ventilation systems</li>
        </ul>

        <h2>Storage Preparation Tips</h2>
        <p>Maximize your storage space with these guidelines:</p>
        <ol>
            <li>Clean items before storage</li>
            <li>Use quality packing materials</li>
            <li>Label boxes clearly</li>
            <li>Create an inventory list</li>
            <li>Stack items properly</li>
            <li>Leave walkways for access</li>
        </ol>

        <h2>Business Storage Solutions</h2>
        <p>Specialized storage options for businesses:</p>
        <ul>
            <li>Inventory storage</li>
            <li>Document archiving</li>
            <li>Equipment storage</li>
            <li>Seasonal storage</li>
            <li>Office furniture storage</li>
            <li>File management</li>
        </ul>

        <h2>Storage Rates</h2>
        <p>Several factors influence storage costs:</p>
        <ul>
            <li>Unit size selected</li>
            <li>Storage duration</li>
            <li>Climate control needs</li>
            <li>Insurance coverage</li>
            <li>Access requirements</li>
            <li>Additional services</li>
        </ul>

        <h2>Additional Services</h2>
        <p>We offer complementary services to enhance your storage experience:</p>
        <ul>
            <li>Packing supplies</li>
            <li>Moving assistance</li>
            <li>Loading/unloading help</li>
            <li>Inventory management</li>
            <li>Delivery services</li>
            <li>Insurance options</li>
        </ul>

        <h2>Access Hours</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead>Service Type</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Monday-Friday</TableCell>
                    <TableCell>6:00 AM - 10:00 PM</TableCell>
                    <TableCell>Regular Access</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Saturday</TableCell>
                    <TableCell>8:00 AM - 8:00 PM</TableCell>
                    <TableCell>Regular Access</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Sunday</TableCell>
                    <TableCell>9:00 AM - 5:00 PM</TableCell>
                    <TableCell>Regular Access</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>24/7</TableCell>
                    <TableCell>Anytime</TableCell>
                    <TableCell>Premium Access</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h2>Frequently Asked Questions</h2>
        <p>Common questions about storage services in {process.env.NEXT_PUBLIC_LOCATION}.</p>

        <Accordion type="multiple" className="w-full mt-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>What size storage unit do I need?</AccordionTrigger>
                <AccordionContent>
                    Unit size depends on what you're storing. A 5'x5' unit fits small furniture and boxes, while a 10'x20' unit can store contents of a large home. {process.env.NEXT_PUBLIC_COMPANY_NAME} can help you choose the right size based on your inventory.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer climate-controlled storage?</AccordionTrigger>
                <AccordionContent>
                    Yes, we offer climate-controlled units that maintain consistent temperature and humidity levels. These units are ideal for sensitive items like electronics, wooden furniture, documents, and artwork.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>How secure are your storage facilities?</AccordionTrigger>
                <AccordionContent>
                    Our facilities feature 24/7 video surveillance, individual unit alarms, controlled access gates, and on-site security staff. {process.env.NEXT_PUBLIC_COMPANY_NAME} prioritizes the security of your stored items.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>Can I access my storage unit anytime?</AccordionTrigger>
                <AccordionContent>
                    Regular access hours are available seven days a week. Premium customers can access their units 24/7. {process.env.NEXT_PUBLIC_COMPANY_NAME} ensures convenient access to your belongings when you need them.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>Do you provide business storage solutions?</AccordionTrigger>
                <AccordionContent>
                    Yes, {process.env.NEXT_PUBLIC_COMPANY_NAME} offers specialized business storage solutions including inventory storage, document archiving, and equipment storage. We can customize solutions to meet your business needs.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger>What insurance options are available?</AccordionTrigger>
                <AccordionContent>
                    We offer various insurance coverage options to protect your stored items. Coverage can be customized based on the value of your belongings. {process.env.NEXT_PUBLIC_COMPANY_NAME} will help you select appropriate coverage.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </React.Fragment>
} 