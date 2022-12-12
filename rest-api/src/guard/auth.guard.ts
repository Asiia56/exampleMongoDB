import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {

    const host = context.switchToHttp(),
      request = host.getRequest();

    const user = request["user"];
    if (!user) {
      console.log("Not authetificated user, access denied", user);
      throw new UnauthorizedException();
    }
    console.log("Authetificated user, access allowed");
    return true;
  }
}
