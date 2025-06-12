export declare class BookingResolver {
    private bookings;
    getAllBookings(): {
        start_date: string | null;
        end_date: string | null;
        id: number;
        hotel_id: number;
        is_checked_in: boolean;
        price: number;
    }[];
    getBookingById(id: number): {
        id: number;
        start_date: Date;
        end_date: Date;
        hotel_id: number;
        is_checked_in: boolean;
        price: number;
    } | undefined;
    getBookingsByDateRange(start: Date, end: Date): {
        id: number;
        start_date: Date;
        end_date: Date;
        hotel_id: number;
        is_checked_in: boolean;
        price: number;
    }[];
    bookHotel(start_date: Date, end_date: Date, hotel_id: number, price: number): {
        id: number;
        start_date: Date;
        end_date: Date;
        hotel_id: number;
        is_checked_in: boolean;
        price: number;
    };
    cancelBooking(id: number): boolean;
    checkInBooking(id: number): {
        id: number;
        start_date: Date;
        end_date: Date;
        hotel_id: number;
        is_checked_in: boolean;
        price: number;
    };
}
