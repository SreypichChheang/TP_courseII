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
exports.HotelResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let HotelResolver = class HotelResolver {
    hotels = [
        {
            id: 1,
            name: "Royal Hotel",
            address: "123 Main Street",
            phone: "012345678",
        },
        {
            id: 2,
            name: "Sunset Resort",
            address: "456 Beach Avenue",
            phone: "098765432",
        },
        {
            id: 3,
            name: "Mountain Inn",
            address: "789 Hilltop Blvd",
            phone: "011223344",
        },
    ];
    getAllHotels() {
        return this.hotels;
    }
    getHotelById(id) {
        return this.hotels.find((hotel) => hotel.id === id);
    }
    createHotel(name, address, phone) {
        const sortedHotels = this.hotels.sort((a, b) => a.id - b.id);
        const lastId = sortedHotels.length > 0 ? sortedHotels[sortedHotels.length - 1].id : 0;
        const newHotel = {
            id: lastId + 1,
            name,
            address,
            phone,
        };
        this.hotels.push(newHotel);
        return newHotel;
    }
    updateHotel(id, name, address, phone) {
        const index = this.hotels.findIndex((hotel) => hotel.id === id);
        if (index === -1) {
            throw new Error("Hotel not found");
        }
        const updatedHotel = {
            ...this.hotels[index],
            name,
            address,
            phone,
        };
        this.hotels[index] = updatedHotel;
        return updatedHotel;
    }
    deleteHotel(id) {
        const index = this.hotels.findIndex((hotel) => hotel.id === id);
        if (index === -1) {
            return false;
        }
        this.hotels.splice(index, 1);
        return true;
    }
};
exports.HotelResolver = HotelResolver;
__decorate([
    (0, graphql_1.Query)("hotels"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "getAllHotels", null);
__decorate([
    (0, graphql_1.Query)("hotel"),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "getHotelById", null);
__decorate([
    (0, graphql_1.Mutation)("createHotel"),
    __param(0, (0, graphql_1.Args)("name")),
    __param(1, (0, graphql_1.Args)("address")),
    __param(2, (0, graphql_1.Args)("phone")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "createHotel", null);
__decorate([
    (0, graphql_1.Mutation)("updateHotel"),
    __param(0, (0, graphql_1.Args)("id")),
    __param(1, (0, graphql_1.Args)("name")),
    __param(2, (0, graphql_1.Args)("address")),
    __param(3, (0, graphql_1.Args)("phone")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String]),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "updateHotel", null);
__decorate([
    (0, graphql_1.Mutation)("deleteHotel"),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "deleteHotel", null);
exports.HotelResolver = HotelResolver = __decorate([
    (0, graphql_1.Resolver)("Hotel")
], HotelResolver);
//# sourceMappingURL=hotel.resolver.js.map