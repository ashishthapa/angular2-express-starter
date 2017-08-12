/**
 * Created by athapa on 18/05/2017.
 */

import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as path from "path";

import { publicRouter } from "../routes/public";
import { feedRouter } from "../routes/feed";

export class APP{
  protected  app:express.Application;

  static initialize(){
    new APP()
  }
   constructor(){
     this.app = express();
     this.config();
     this.route();
  }
  config(){
    this.app.disable("x-powered-by");
    this.app.use(json());
    this.app.use(compression());
    this.app.use(urlencoded({ extended: true }));
    if (this.app.get("env") === "production") {

      // in production mode run application from dist folder
      this.app.use(express.static(path.join(__dirname, "/../client")));
    }

// catch 404 and forward to error handler
    this.app.use((req: express.Request, res: express.Response, next) => {
      const err = new Error("Not Found");
      next(err);
    });

// production error handler
// no stacktrace leaked to user
    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

      res.status(err.status || 500);
      res.json({
        error: {},
        message: err.message,
      });
    });
  }
  route(){
    // api routes
    this.app.use("/api/public", publicRouter);
  }
}
