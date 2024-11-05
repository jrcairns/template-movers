import { Building, Building2, LucideIcon, Map, Ship, Truck, Warehouse } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    truck: Truck,
    map: Map,
    statue: Building2,  // Using Building2 as placeholder for statue
    ship: Ship,
    building: Building,
    warehouse: Warehouse,
};

interface ServiceIconProps {
    name: string;
    className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
    const Icon = iconMap[name] || Truck;
    return <Icon className={className} size={40} />;
} 