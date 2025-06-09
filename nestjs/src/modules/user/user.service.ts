import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  createUser(body: Partial<User>) {
    // body can have any subset of the properties defined in the User entity.
    const user = this.usersRepo.create(body);
    return this.usersRepo.save(user);
  }

  getUser(username: string) {
    return this.usersRepo.findOne({
      where: { username },
      relations: ["tasks"], // if needed
    });
  }

  async updateUser(username: string, body: Partial<User>) {
    return this.usersRepo.update({ username }, body);
  }

  deleteUser(username: string) {
    return this.usersRepo.delete({ username });
  }
  async findOne(id: number) {
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  findAll() {
    return this.usersRepo.find({ relations: ["tasks"] });
  }
}
