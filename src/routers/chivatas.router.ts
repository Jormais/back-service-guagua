import { Router } from 'express';
import ChivatasController from '../controllers/Chivatas.controller';

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
  }
}

export = new ChivatasRouter().router;