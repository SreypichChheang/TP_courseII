import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    createUser(body: Partial<User>): Promise<User>;
    getUser(username: string): Promise<User | null>;
    updateUser(username: string, body: Partial<User>): Promise<import("typeorm").UpdateResult>;
    deleteUser(username: string): Promise<import("typeorm").DeleteResult>;
    findAll(): Promise<User[]>;
}
