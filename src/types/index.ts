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
export type CustomerT = {
    id: string;
    name: string;
    customerId: string;
    category: string;
    principal: string;
    userAlias: string;
    userAliasSecondary: string;
    status: string;
    lastUpdated: string;
}