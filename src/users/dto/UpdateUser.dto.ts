import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    username: string;


    @IsString()
    @IsOptional()
    displayname?: string;
    
    @IsEmail()
    @IsOptional()
    email?: string;
    
    @IsOptional()
    @IsNotEmpty()
    password: string;
    
    @IsArray()
    @IsOptional()
    roles?: string[];
    
}