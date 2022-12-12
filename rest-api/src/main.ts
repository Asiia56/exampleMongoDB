import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { FallbackExceptionFilter } from './filters/fallback.filter';
import { ValidationFilter } from './filters/validation.filter';
import { ValidationException } from './filters/validation.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  app.useGlobalFilters(
    new FallbackExceptionFilter(),
    new ValidationFilter()); //filters should be placed from  generic to more specific

  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true, //only entries with errors will be displayed
    exceptionFactory: (err: ValidationError[]) => {
      const message = err.map(
        error => `${error.property} has wrong value ${error.value},
        ${Object.values(error.constraints).join(', ')}`
      )
      return new ValidationException(message);
    }
  }))

  await app.listen(8080);
}
bootstrap();
