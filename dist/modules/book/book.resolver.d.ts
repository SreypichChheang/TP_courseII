export declare class BookResolver {
    private books;
    getAllBooks(): {
        id: number;
        title: string;
        author: string;
        price: number;
    }[];
    getBookById(id: number): {
        id: number;
        title: string;
        author: string;
        price: number;
    } | undefined;
    addBook(title: string, price: number): {
        id: number;
        title: string;
        price: number;
        author: string;
    };
    updateBook(id: number, title: string, price: number): {
        title: string;
        price: number;
        id: number;
        author: string;
    };
    deleteBook(id: number): boolean;
}
