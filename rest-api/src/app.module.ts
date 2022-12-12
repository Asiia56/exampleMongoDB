import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CranesModule } from './cranes/cranes.module';
import { MongooseModule } from '@nestjs/mongoose'
import { MONGO_CONNECTION } from './constants';
import { AuthModule } from './auth/auth.module';
import { GetUserMiddleware } from './middleware/get-user.middleware';
import { CranesController } from './cranes/controllers/cranes.controller';


@Module({
  imports: [
    CranesModule,
    AuthModule,
    MongooseModule.forRoot(MONGO_CONNECTION)],
    })
export class AppModule implements NestModule {

//middleware executes after hitting a back-end, but before hitting a controller

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(GetUserMiddleware).forRoutes(
      CranesController //it's only be targeting this controllers specifically
    );
  }
}
