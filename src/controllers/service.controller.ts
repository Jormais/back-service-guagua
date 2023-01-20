import { NextFunction, Request, Response } from 'express';

class ServiceController {
    gerService(req: Request, res: Response) {
        res.status(200).send('corrtecto');
    }
}

export = new ServiceController();