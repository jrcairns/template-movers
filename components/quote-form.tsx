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

export function QuoteForm() {
    const [date, setDate] = useState<Date>();

    return (
        <Card>
            <form action="/api/quote">
                <CardHeader>
                    <CardTitle>Start Your Free Quote</CardTitle>
                    <CardDescription>How can we help you today?</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" name="name" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="movingDate">Desired Moving Day</Label>
                            <Popover>
                                <PopoverTrigger asChild>
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
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>
                            <input
                                type="hidden"
                                name="movingDate"
                                value={date ? format(date, "yyyy-MM-dd") : ""}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>What type of quote do you need?</Label>
                        <RadioGroup name="quoteType" defaultValue="moving" className="flex gap-4">
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
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="startingAddress">Starting Address</Label>
                        <AddressInput
                            id="startingAddress"
                            name="startingAddress"
                            required
                            placeholder="Enter starting address"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="movingAddress">Moving Address</Label>
                        <AddressInput
                            id="movingAddress"
                            name="movingAddress"
                            required
                            placeholder="Enter destination address"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" name="phone" type="tel" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button type="submit" className="w-full">
                        Get Your Quote
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
} 