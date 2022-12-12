import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";

//this is error handler, if some data doesn't correspond schema

@Catch()
export class FallbackExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
      console.log("Fallback expection handler trigerred", JSON.stringify(exception));

      const ctx = host.switchToHttp(),
            res = ctx.getResponse();

            return res.status(500).json({
              statusCode: 500,
              createdBy: "Fallback Exception Filter",
              errorMessage: exception.message ? exception.message : 'Unexpected error ocurred'
            })
    }
}
