export declare class HotelResolver {
    private hotels;
    getAllHotels(): {
        id: number;
        name: string;
        address: string;
        phone: string;
    }[];
    getHotelById(id: number): {
        id: number;
        name: string;
        address: string;
        phone: string;
    } | undefined;
    createHotel(name: string, address: string, phone: string): {
        id: number;
        name: string;
        address: string;
        phone: string;
    };
    updateHotel(id: number, name: string, address: string, phone: string): {
        name: string;
        address: string;
        phone: string;
        id: number;
    };
    deleteHotel(id: number): boolean;
}
