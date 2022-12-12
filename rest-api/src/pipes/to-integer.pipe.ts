import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

//custom pipe, which converts strings to number
//https://angular-university.io/lesson/nestjs-pipes-example
//ParseIntPipe - pipe, which is part of nestjs/common and makes the identical operation, so it can be used instead of writing own

export class ToIntPipe implements PipeTransform<string> {

  transform(value: string, metadata: ArgumentMetadata): number {

    const val = parseInt(value);

    if(isNaN(val)) {
      throw new BadRequestException('conversation to number failed ' + value);
    }

    return val;
  }
}
