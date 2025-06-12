"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let BookingResolver = class BookingResolver {
    bookings = [
        {
            id: 1,
            start_date: new Date("2025-06-10T00:00:00Z"),
            end_date: new Date("2025-06-12T00:00:00Z"),
            hotel_id: 1,
            is_checked_in: false,
            price: 100,
        },
        {
            id: 2,
            start_date: new Date("2025-06-15T00:00:00Z"),
            end_date: new Date("2025-06-17T00:00:00Z"),
            hotel_id: 2,
            is_checked_in: true,
            price: 150,
        },
    ];
    getAllBookings() {
        return this.bookings.map((b) => ({
            ...b,
            start_date: b.start_date ? b.start_date.toISOString() : null,
            end_date: b.end_date ? b.end_date.toISOString() : null,
        }));
    }
    getBookingById(id) {
        return this.bookings.find((b) => b.id === id);
    }
    getBookingsByDateRange(start, end) {
        return this.bookings.filter((b) => new Date(b.start_date) >= new Date(start) &&
            new Date(b.end_date) <= new Date(end));
    }
    bookHotel(start_date, end_date, hotel_id, price) {
        const newId = this.bookings.length > 0
            ? Math.max(...this.bookings.map((b) => b.id)) + 1
            : 1;
        const newBooking = {
            id: newId,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
            hotel_id,
            is_checked_in: false,
            price,
        };
        this.bookings.push(newBooking);
        return newBooking;
    }
    cancelBooking(id) {
        const index = this.bookings.findIndex((b) => b.id === id);
        if (index === -1)
            return false;
        this.bookings.splice(index, 1);
        return true;
    }
    checkInBooking(id) {
        const booking = this.bookings.find((b) => b.id === id);
        if (!booking)
            throw new Error("Booking not found");
        booking.is_checked_in = true;
        return booking;
    }
};
exports.BookingResolver = BookingResolver;
__decorate([
    (0, graphql_1.Query)("bookings"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookingResolver.prototype, "getAllBookings", null);
__decorate([
    (0, graphql_1.Query)("booking"),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookingResolver.prototype, "getBookingById", null);
__decorate([
    (0, graphql_1.Query)("bookingsByDateRange"),
    __param(0, (0, graphql_1.Args)("start")),
    __param(1, (0, graphql_1.Args)("end")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Date]),
    __metadata("design:returntype", void 0)
], BookingResolver.prototype, "getBookingsByDateRange", null);
__decorate([
    (0, graphql_1.Mutation)("bookHotel"),
    __param(0, (0, graphql_1.Args)("start_date")),
    __param(1, (0, graphql_1.Args)("end_date")),
    __param(2, (0, graphql_1.Args)("hotel_id")),
    __param(3, (0, graphql_1.Args)("price")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date,
        Date, Number, Number]),
    __metadata("design:returntype", void 0)
], BookingResolver.prototype, "bookHotel", null);
__decorate([
    (0, graphql_1.Mutation)("cancelBooking"),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookingResolver.prototype, "cancelBooking", null);
__decorate([
    (0, graphql_1.Mutation)("checkInBooking"),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookingResolver.prototype, "checkInBooking", null);
exports.BookingResolver = BookingResolver = __decorate([
    (0, graphql_1.Resolver)("Booking")
], BookingResolver);
//# sourceMappingURL=booking.resolver.js.map