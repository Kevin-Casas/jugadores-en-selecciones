import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on('finish', () => {
    console.log({
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
      timeStamp: new Date().toISOString(),
      statusCode: res.statusCode,
      duration: `${Date.now() - start}ms`,
    });
  });

  next();
}
