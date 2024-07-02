export interface HotelBooking{
    hotel_id: number;
    name_hotel: string;
    location: string;
    price: number;
}

export interface HotelTransaction{
    transaction_id: number;
    hotel_id: number;
    user_id: number;
    total_pay: number;
    total_night: number;
    total_date: Date;
}

export interface CustomerInfo{
    user_id: number;
    name_user: string;
    email: string;
    phone: number;
}