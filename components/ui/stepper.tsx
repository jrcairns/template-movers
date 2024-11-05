import { cn } from "@/lib/utils";

interface StepProps {
    number: number;
    title: string;
    description: string;
    isLast?: boolean;
}

function Step({ number, title, description, isLast }: StepProps) {
    return (
        <div className="flex gap-6">
            <div className="relative">
                <div className="bg-chart-3 text-background rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shrink-0 relative z-10">
                    {number}
                </div>
                {!isLast && (
                    <div className="absolute top-16 left-1/2 h-[calc(100%-16px)] w-px bg-chart-3/20 -translate-x-1/2" />
                )}
            </div>
            <div className={cn("pb-12", isLast && "pb-0")}>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}

interface StepperProps {
    steps: Array<{
        title: string;
        description: string;
    }>;
    className?: string;
}

export function Stepper({ steps, className }: StepperProps) {
    return (
        <div className={cn("space-y-0", className)}>
            {steps.map((step, index) => (
                <Step
                    key={index}
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                    isLast={index === steps.length - 1}
                />
            ))}
        </div>
    );
} 