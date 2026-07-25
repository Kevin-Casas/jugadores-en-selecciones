import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log({
    method: req.method,
    url: req.url,
    ip: req.ip,
    timeStamp: new Date().toISOString(),
  });
  next();
}
