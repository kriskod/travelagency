export interface tourStructure {
    id: number;
    name: string;
    destinationCountry: string;
    startDate: Date;
    finishDate: Date;
    price: number;
    maxSeats: number;
    leftSeats: number;
    description: string;
    imagePath: string;
    rate?: number;
    quantity?: number
}

export enum Currency {
    PLN,
    EUR,
    USD,
    GBP
}