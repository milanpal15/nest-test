import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://milanpaul212:milanpaul212@bookstore-backend.0dbc4xx.mongodb.net/?retryWrites=true&w=majority"),
    UsersModule,
  ]
})
export class AppModule implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    const connection = mongoose.connection;

    // Event listener for MongoDB connection
    connection.on('connected', () => {
      console.log('Connected to MongoDB successfully');
    });

    connection.on('error', (err) => {
      console.error('Error connecting to MongoDB:', err.message);
    });

    connection.on('disconnected', () => {
      console.warn('MongoDB connection lost');
    });
  }
}
