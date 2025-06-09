import { UsersService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<import("./user.entity").User[]>;
    getUserById(id: number): Promise<import("./user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    updateUser(username: string, body: {
        email?: string;
        password?: string;
    }): Promise<import("typeorm").UpdateResult>;
    deleteUser(username: string): Promise<import("typeorm").DeleteResult>;
}
