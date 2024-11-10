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
    value?: string
    onChange?: (value: string) => void
    onAddressSelect?: (address: string) => void
    onBlur?: () => void
    disabled?: boolean
}

export function AddressInput({
    id,
    name,
    placeholder = "Enter an address",
    value: controlledValue,
    onChange,
    onAddressSelect,
    ...props
}: AddressInputProps) {
    const [input, setInput] = useState("")
    const [selectedAddress, setSelectedAddress] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const debouncedInput = useDebounce(input, 500)

    const displayValue = controlledValue || selectedAddress || input

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
                value={displayValue}
                onChange={(e) => {
                    setInput(e.target.value)
                    setSelectedAddress("")
                    setIsOpen(true)
                    onChange?.(e.target.value)
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
                                                    setInput(value)
                                                    onChange?.(value)
                                                    onAddressSelect?.(value)
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