import { Request, Response, NextFunction } from 'express';

const pagination = (req: Request, res: Response, next: NextFunction) => {
  let page = 0;
  let limit = 0;

  if (typeof req.query.page === 'string') {
    page = parseInt(req.query.page);
  }

  if (typeof req.query.limit === 'string') {
    limit = parseInt(req.query.limit);
  }

  req.page = page;
  req.limit = limit;

  next();
};

export default pagination;
