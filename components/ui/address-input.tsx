"use client"

import { useDebounce } from "@/hooks/use-debounce"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import useSWR from "swr"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "./command"
import { Input } from "./input"

interface AddressInputProps {
    id: string
    name: string
    label?: string
    placeholder?: string
    required?: boolean
    className?: string
}

export function AddressInput({ id, name, placeholder = "Enter an address", ...props }: AddressInputProps) {
    const [input, setInput] = useState("")
    const [selectedAddress, setSelectedAddress] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const debouncedInput = useDebounce(input, 500)

    const { data, isLoading } = useSWR(
        debouncedInput ? `/api/address/autocomplete?input=${debouncedInput}` : null,
        async (url) => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    )

    return (
        <div className="relative">
            <Input
                {...props}
                id={id}
                name={name}
                value={selectedAddress || input}
                onChange={(e) => {
                    setInput(e.target.value)
                    setSelectedAddress("")
                    setIsOpen(true)
                }}
                onFocus={() => setIsOpen(true)}
                placeholder={placeholder}
                autoComplete="off"
            />

            {isOpen && input && (
                <div className="absolute w-full z-50">
                    <Command className="w-full border rounded-lg mt-1 bg-background shadow-md">
                        <CommandList>
                            <CommandGroup>
                                {isLoading ? (
                                    <div className="flex items-center justify-center p-4">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    </div>
                                ) : (
                                    <>
                                        {data?.predictions?.map((prediction: any) => (
                                            <CommandItem
                                                key={prediction.placeId}
                                                value={prediction.description}
                                                onSelect={(value) => {
                                                    setSelectedAddress(value)
                                                    setIsOpen(false)
                                                }}
                                                className="cursor-pointer"
                                            >
                                                {prediction.description}
                                            </CommandItem>
                                        ))}
                                    </>
                                )}
                            </CommandGroup>
                            <CommandEmpty>No results found.</CommandEmpty>
                        </CommandList>
                    </Command>
                </div>
            )}
        </div>
    )
} 