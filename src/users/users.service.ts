import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { User } from "src/schemas/User.schema";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModal: Model<User>) {}
    
    async getUsers(): Promise<object> {
        const users = await this.userModal.find();
        return {data: users, total: users.length}
    }

    async getUserById(id: any): Promise<object> {
        const userId = id.id
        const user = await this.userModal.findById(userId);
        return {data: user}
    }

    async createUser(creatreUserDto: CreateUserDto): Promise<object> {
        try {
            const newUser = new this.userModal(creatreUserDto);
            const user = await newUser.save();
            return {data: user}
        } catch (error) {
            return { error: error.message}
        }
    }

    async updateUser( id: string, updateUserDto: UpdateUserDto): Promise<object> {
        try {
            const updateteUser = this.userModal.findByIdAndUpdate( id, updateUserDto, {new: true});
            return updateteUser
        } catch (error) {
            return { error: error.message}
        }
    }

    async deleteUser( id: string, isdeleted: object): Promise<object> {
        try {
            const deletedUser = this.userModal.findByIdAndUpdate(id, {isdeleted: true}, {new: true});
            return deletedUser
        } catch (error) {
            return { error: error.message}
        }
    }
}