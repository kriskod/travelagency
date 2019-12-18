export interface Order {
    tour_id: string;
    quantity: number;
}

export interface Orders {
    user_id: string;
    orders: [];
}