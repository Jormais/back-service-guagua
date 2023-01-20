import { Router } from 'express';
import ServiceController from '../controllers/service.controller';

class ServiceRouter {
    

  private _router = Router();
  private _controller = ServiceController;

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

export = new ServiceRouter().router;