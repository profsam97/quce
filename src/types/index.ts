import { JSX } from "react";

export type CompanyT = {
    id: number;
    name: string;
    icon: JSX.Element;
    isActive?: boolean;
}

export type DashboardT = {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
}