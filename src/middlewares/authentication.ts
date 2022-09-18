import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import ResponseEnum from '../common/responseCodes';
import  BaseError  from "../errorHandler/baseError";

export function authentication(
  req: Request,
  res: Response,
  next: NextFunction
): void | Response {
  const  token  = req.headers.authorization;
  if (token == undefined) {
    res
      .status(ResponseEnum.Forbidden)
      .json({ message: "Token is missing" });
  }
  try {
    const key = process.env.JWT_SHARED_KEY;
    const tokenToValidate = token != undefined ? token.toString() : "";
    const jwtData = verify(tokenToValidate , key != undefined ? key : "") as JwtPayload;
    if (jwtData == null) {
      res.status(ResponseEnum.Forbidden).json({ message: "Unauthorized access" });
    }
    req.body.userId = jwtData.UserId;
    return next();
  } catch (e: any) {
    res.status(ResponseEnum.Forbidden).json({ message: "Unauthorized access" });
    throw new BaseError(e.name, ResponseEnum.Forbidden, true, e.message);
  }
}