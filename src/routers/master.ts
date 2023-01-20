import { Router } from 'express';
//import authRouter from './auth.router';
import serviceRouter from './service.router'

class MasterRouter {
    private _router = Router();
  //private _authRouter  = authRouter;
  private _serviRouter  = serviceRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
   * Connect routes to their matching routers.
   */
    private _configure() {
        //this._router.use('/auth', this._authRouter);
        this._router.use('/services', this._serviRouter)
    }
}

export = new MasterRouter().router;