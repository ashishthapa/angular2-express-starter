/**
 * Created by athapa on 21/08/2017.
 */

import { Request, Response, Router } from "express";

const libraryRouter: Router = Router();

libraryRouter.get("/", (request: Request, response: Response) => {
  console.log('inside library router');
  response.json({
   say:'helllo'
  });
});
libraryRouter.post("/", (request: Request, response: Response) => {
  console.log(request.body);
  let title = request.body.title;
  let author = request.body.author;
  let date = request.body.datePublished;
  let status = request.body.status;
  let genre = request.body.genre;
  let avail = request.body.avail;

  response.status(200)
    .json({title:title,
    author:author,
    date:date,
    status:status,
    genre:genre,
    availability:avail
    });

});


export { libraryRouter };
