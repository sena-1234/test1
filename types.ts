import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  category: string;
  items: string[];
  icon: LucideIcon;
  description: string;
  image?: string;
}

export interface Client {
  name: string;
  category?: string;
  logo?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}