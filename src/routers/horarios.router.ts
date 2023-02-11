import { Router } from 'express';
import HorariosController from '../controllers/horarios.controller';

class CuadrantesRouter {
    

  private _router = Router();
  private _controller = HorariosController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
   private _configure() {
     this._router.get('/', this._controller.gerService);
  }
}

export = new CuadrantesRouter().router;