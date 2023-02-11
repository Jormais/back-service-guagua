import { Router } from 'express';
import CuadrantesController from '../controllers/cuadrantes.controller';

class CuadrantesRouter {
    

  private _router = Router();
  private _controller = CuadrantesController;

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