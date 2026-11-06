import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  inicio: number;

  @IsNumber()
  fim: number;
}