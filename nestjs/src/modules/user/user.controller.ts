import {
  Get,
  Param,
  Controller,
  Post,
  Body,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from "@nestjs/common";
import { UsersService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // Use ParseIntPipe to automatically convert and validate 'id' param as a number
  @Get("/:id")
  async getUserById(@Param("id", ParseIntPipe) id: number) {
    return await this.userService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch("/:username")
  updateUser(
    @Param("username") username: string,
    @Body() body: { email?: string; password?: string }
  ) {
    return this.userService.updateUser(username, body);
  }

  @Delete("/:username")
  deleteUser(@Param("username") username: string) {
    return this.userService.deleteUser(username);
  }
}
