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
     this._router.get('/', this._controller.gerService2440);
  }
}

export = new ChivatasRouter().router;