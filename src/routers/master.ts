import { Router } from 'express';
//import authRouter from './auth.router';
import serviceRouter from './service.router';
import cuadranteRouter from './cuadrantes.router';
import chivatasRouter from './chivatas.router';

class MasterRouter {
    private _router = Router();
  //private _authRouter  = authRouter;
  private _serviRouter  = serviceRouter;
  private _cuadranteRouter = cuadranteRouter;
  private _chivataRourer = chivatasRouter;

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
        this._router.use('/services', this._serviRouter);
        this._router.use('/cuadrantes', this._cuadranteRouter);
        this._router.use('/chivatas', this._chivataRourer);
    }
}

export = new MasterRouter().router;