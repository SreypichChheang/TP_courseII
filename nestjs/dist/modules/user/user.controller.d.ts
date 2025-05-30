import { UsersService } from './user.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<import("./user.entity").User[]>;
    getUser(username: string): Promise<import("./user.entity").User | null>;
    createUser(body: {
        username: string;
        email: string;
        password: string;
    }): Promise<import("./user.entity").User>;
    updateUser(username: string, body: {
        email?: string;
        password?: string;
    }): Promise<import("typeorm").UpdateResult>;
    deleteUser(username: string): Promise<import("typeorm").DeleteResult>;
}
