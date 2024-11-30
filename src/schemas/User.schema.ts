import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ unique: true })
    username: string;

    @Prop()
    displayname?: string;
    
    @Prop()
    email?: string;
    
    @Prop()
    password: string;
    
    @Prop()
    roles?: string[];
    
    @Prop()
    isdeleted?: boolean;
    
    @Prop()
    createdby?: string;
    
    @Prop()
    modifiedby?: string;
}

export const UserSchema = SchemaFactory.createForClass(User)