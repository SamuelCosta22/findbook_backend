import { NextFunction, Request, Response } from "express";
import { HTTPException } from "../../types/httpException";

export function errorMiddleware(err: HTTPException, req: Request, res: Response, next: NextFunction){
    return res.status(err.status).json({
        status: 500,
        message: err.message || 'Internal server error',
    })
}