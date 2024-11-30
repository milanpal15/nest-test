import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";


@Controller('users')
export class UsersController {
    constructor( private UsersService: UsersService) {}

    @Get()
    async getUsers(): Promise<object> {
        return this.UsersService.getUsers();
    }

    @Get(":id")
    async getUserById(@Param() id: string): Promise<object> {
        return this.UsersService.getUserById(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body() createUserDto : CreateUserDto): Promise<object> {
        try {
            return this.UsersService.createUser(createUserDto);
        } catch (error) {
            return error
        }
    }

    @Put(":id")
    @UsePipes(new ValidationPipe())
    async updateUser(@Body() updateUserDto : UpdateUserDto): Promise<object> {
        try {
            return this.UsersService.updateUser( updateUserDto.id, updateUserDto);
        } catch (error) {
            return error
        }
    }

    @Delete(":id")
    @UsePipes(new ValidationPipe())
    async deleteUser(@Param() id: string): Promise<object> {
        try {
            const userId = JSON.parse(id);
            return this.UsersService.deleteUser( userId.id , {isdeleted: true});
        } catch (error) {
            return error
        }
    }
}