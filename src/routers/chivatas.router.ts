import { Router } from 'express';
import ChivatasController from '../controllers/chivatas.controller';

class ChivatasRouter {
    

  private _router = Router();
  private _controller = ChivatasController;

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
     this._router.get('/lunes', this._controller.getLunes);
     this._router.get('/martes', this._controller.getMartes);
     this._router.get('/miercoles', this._controller.getMiercoles);
     this._router.get('/jueves', this._controller.getJueves);
     this._router.get('/viernes', this._controller.getViernes);

  }
}

export = new ChivatasRouter().router;