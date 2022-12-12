import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { MONGO_CONNECTION } from 'src/constants';
import { AuthController } from './auth.controller';
import { Usersschema } from './users.schema';



@Module({
  imports: [MongooseModule.forFeature([
    {name: 'User', schema: Usersschema}
  ])],
  controllers: [AuthController],
  providers: []
})
export class AuthModule { }
