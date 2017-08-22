/**
 * Created by athapa on 21/08/2017.
 */

import { Request, Response, Router } from "express";
import { Book } from '../database/library';

const libraryRouter: Router = Router();

libraryRouter.get("/", (request: Request, response: Response) => {
  console.log('inside library router');
  Book.find({}, function(err, docs) {
    if (!err){
      console.log(docs);
      response.json({
        message:'success',
        data:docs
      });
      process.exit();
    } else {throw err;}
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

 let book = new Book({
    title:title,
    author:author,
    date:date,
    status:status,
    genre:genre,
    availability:avail
  });
 book.save();
  console.log('The book to be saved' +book);
  response.json({message:'success'})
});


export { libraryRouter };
