import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    displayname?: string;
    
    @IsEmail()
    @IsOptional()
    email?: string;
    
    password: string;
    
    @IsArray()
    @IsOptional()
    roles?: string[];
    
    @IsBoolean()
    @IsOptional()
    isdeleted?: boolean;
    
    @IsString()
    @IsOptional()
    createdby?: string;
    
    @IsString()
    @IsOptional()
    modifiedby?: string;
}