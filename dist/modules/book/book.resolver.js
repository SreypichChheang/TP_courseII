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
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let BookResolver = class BookResolver {
    books = [
        {
            id: 1,
            title: 'Mathematic',
            author: 'Dara',
            price: 10,
        },
        {
            id: 2,
            title: 'Physic',
            author: 'Sok',
            price: 20,
        },
        {
            id: 3,
            title: 'Chemistry',
            author: 'Ratha',
            price: 15,
        },
    ];
    getAllBooks() {
        return this.books;
    }
    getBookById(id) {
        return this.books.find((book) => book.id == id);
    }
    addBook(title, price) {
        const sortedBooks = this.books.sort((a, b) => a.id - b.id);
        const lastId = sortedBooks.length > 0 ? sortedBooks[sortedBooks.length - 1].id : 0;
        const newBook = {
            id: lastId + 1,
            title,
            price,
            author: 'Unknown',
        };
        this.books.push(newBook);
        return newBook;
    }
    updateBook(id, title, price) {
        const bookIndex = this.books.findIndex((book) => book.id == id);
        if (bookIndex === -1) {
            throw new Error('Book not found');
        }
        const updatedBook = {
            ...this.books[bookIndex],
            title,
            price,
        };
        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }
    deleteBook(id) {
        try {
            const bookIndex = this.books.findIndex((book) => book.id == id);
            if (bookIndex === -1) {
                return false;
            }
            this.books.splice(bookIndex, 1);
            return true;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
};
exports.BookResolver = BookResolver;
__decorate([
    (0, graphql_1.Query)('books'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getAllBooks", null);
__decorate([
    (0, graphql_1.Query)('book'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getBookById", null);
__decorate([
    (0, graphql_1.Mutation)('addBook'),
    __param(0, (0, graphql_1.Args)('title')),
    __param(1, (0, graphql_1.Args)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "addBook", null);
__decorate([
    (0, graphql_1.Mutation)('updateBook'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('title')),
    __param(2, (0, graphql_1.Args)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "updateBook", null);
__decorate([
    (0, graphql_1.Mutation)('deleteBook'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "deleteBook", null);
exports.BookResolver = BookResolver = __decorate([
    (0, graphql_1.Resolver)('Book')
], BookResolver);
//# sourceMappingURL=book.resolver.js.map