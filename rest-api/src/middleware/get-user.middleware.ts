import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: (error?: any) => void) {
    const authJwtToken = req.headers.authorization;
    if (!authJwtToken) {
      next();
      return;
    }

    try {
      const user = jwt.verify(authJwtToken, JWT_SECRET);
      if (user) {
        console.log("Found user in Jwt", user);
        req["user"] = user;
      }
    }

    catch (err) {
      console.log("Error handling auth Jwt: ", err);
    }

    next();
  }
}
