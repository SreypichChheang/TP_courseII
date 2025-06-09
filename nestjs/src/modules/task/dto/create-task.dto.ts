import { IsNotEmpty, IsOptional, IsString, IsInt } from "class-validator";

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsNotEmpty()
  @IsInt()
  readonly userId: number;
}
