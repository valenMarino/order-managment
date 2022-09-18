import ResponseEnum from "../common/responseCodes";

class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: ResponseEnum;
    public readonly isOperational: boolean;
    
    constructor(name: string, httpCode: ResponseEnum, isOperational: boolean, description: string) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
    
      this.name = name;
      this.httpCode = httpCode;
      this.isOperational = isOperational;
    
      Error.captureStackTrace(this);
    }
   }

   export default BaseError;