import { Router } from 'express';
//import authRouter from './auth.router';
import cuadranteRouter from './cuadrantes.router';
import chivatasRouter from './chivatas.router';
import horariosRouter from './horarios.router';

class MasterRouter {
    private _router = Router();
  //private _authRouter  = authRouter;
  private _cuadranteRouter = cuadranteRouter;
  private _chivataRourer = chivatasRouter;
  private _horariosRouter =horariosRouter;

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
        this._router.use('/cuadrantes', this._cuadranteRouter);
        this._router.use('/chivatas', this._chivataRourer);
        this._router.use('/horario', this._horariosRouter);

    }
}

export = new MasterRouter().router;