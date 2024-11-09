import { QuoteForm } from "@/components/quote-form";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <div className="pt-[--header-height] text-base bg-muted">
        <div className="py-4 lg:py-12 container mx-auto px-4 flex-col lg:flex-row flex gap-12 lg:items-start">
            <div className="mx-auto max-w-prose space-y-6">
                {children}
            </div>
            <div className="order-first lg:order-last lg:sticky lg:top-[calc(var(--header-height)+theme('spacing.12'))] max-w-xl mx-auto lg:max-w-none">
                <QuoteForm />
            </div>
        </div>
    </div>
}
