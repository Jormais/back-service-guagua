import express from'express';
import MasterRouter from './routers/master';
//import ErrorHandler from './models/errorHandler';
import { NextFunction, Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// load the environment variables from the .env file
dotenv.config({
  path: './.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = MasterRouter;
}
const allowedOrigins = ['*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

 /* Swagger files start */
 /* const swaggerFile: string = (process.cwd()+"/swagger/swagger.json");
 const swaggerData: string = fs.readFileSync(swaggerFile, 'utf8');
 const customCss: string = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
 const swaggerDocument = JSON.parse(swaggerData); */
 /* Swagger files end */

// initialize server app
const server = new Server();
server.app.use(cors());
server.app.use('/api', bodyParser.json() , server.router);

// swagger docs
/* server.app.use('/api/docs', swaggerUi.serve,
swaggerUi.setup(swaggerDocument, undefined, undefined, customCss)); */

/* server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
}); */

// make server listen on some port
((port = process.env.PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();