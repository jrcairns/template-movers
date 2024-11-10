"use client"

import { AddressInput } from "@/components/ui/address-input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
    quoteType: z.enum(["moving", "storage", "both"], {
        required_error: "Please select a quote type",
    }),
    startingAddress: z.string().min(1, "Starting address is required"),
    destinationAddress: z.string().min(1, "Destination address is required"),
    moveDate: z.string().min(1, "Moving date is required"),
});

export function QuoteForm() {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [date, setDate] = useState<Date>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            quoteType: "moving",
            startingAddress: "",
            destinationAddress: "",
            moveDate: undefined,
        },
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...values,
                    referrer: window.location.href,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to submit quote');
            }

            setShowSuccessDialog(true);
            form.reset();

        } catch (error) {
            console.error('Error submitting quote:', error);
        }
    }

    return (
        <>
            <Card>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle>Start Your Free Quote</CardTitle>
                            <CardDescription>How can we help you today?</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="moveDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Desired Moving Day</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={(newDate) => {
                                                            setDate(newDate);
                                                            field.onChange(newDate ? format(newDate, "yyyy-MM-dd") : "");
                                                        }}
                                                        initialFocus
                                                        disabled={(date) => date < new Date()}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="quoteType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What type of quote do you need?</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex gap-4"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="moving" id="moving" />
                                                    <Label htmlFor="moving">Moving</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="storage" id="storage" />
                                                    <Label htmlFor="storage">Storage</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="both" id="both" />
                                                    <Label htmlFor="both">Both</Label>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="startingAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Starting Address</FormLabel>
                                        <FormControl>
                                            <AddressInput
                                                {...field}
                                                id="startingAddress"
                                                placeholder="Enter starting address"
                                                onChange={(address: string) => {
                                                    field.onChange(address)
                                                }}
                                                onAddressSelect={(address: string) => {
                                                    field.onChange(address)
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="destinationAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Destination Address</FormLabel>
                                        <FormControl>
                                            <AddressInput
                                                {...field}
                                                id="movingAddress"
                                                placeholder="Enter destination address"
                                                onChange={(address: string) => {
                                                    field.onChange(address)
                                                }}
                                                onAddressSelect={(address: string) => {
                                                    field.onChange(address)
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input type="tel" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <span className="mr-2">Submitting...</span>
                                    </>
                                ) : (
                                    'Get Your Quote'
                                )}
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>

            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                <DialogContent className="sm:max-w-md">
                    <div className="grid gap-4 py-4 px-6 text-center">
                        <div className={cn(
                            "mx-auto rounded-full p-3",
                            "bg-gradient-to-b from-green-100/50 to-green-100/10",
                            "dark:from-green-900/50 dark:to-green-900/10"
                        )}>
                            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-500" />
                        </div>
                        <h2 className="text-lg font-semibold tracking-tight">
                            Quote Request Submitted
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Thank you for your quote request. Our team will review your details and get back to you shortly. We appreciate your interest in our services!
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
} 