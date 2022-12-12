import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { ValidationException } from "./validation.exception";

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {

  catch(exception: ValidationException, host: ArgumentsHost): any {

    const ctx = host.switchToHttp(),
    res = ctx.getResponse();

    return res.status(400).json({
      statusCode: 400,
      createdBy: "Validation Filter",
      validationErrors: exception.validationErrors
    });
  }
}
