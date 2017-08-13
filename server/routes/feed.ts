import { Request, Response, Router } from "express";
import * as uuid from "uuid";
const   feedRouter: Router = Router();
var http = require('http')
var url="http://tuftuf.gambitlabs.fi/feed.txt";


feedRouter.get('/', (req:Request, res:Response)=>{

  http.get("http://tuftuf.gambitlabs.fi/feed.txt", function (response) {
    response.setEncoding('utf8')
    response.on('data', function (body) {
        //console.log(body);
        res.send(body.toString());
    })
    response.on('error', console.error)

  })

})

feedRouter.post("/", (request: Request, response: Response) => {

  response.json({
    id: uuid.v4(),
    name: request.body.name,
    text: request.body.text,
  });

});

feedRouter.post("/:id/comment", (request: Request, response: Response) => {

  const feedID = request.params.id;

  response.json({
    comment: {
      id: uuid.v4(),
      text: request.body.text,
    },
    id: feedID,
  });

});

feedRouter.delete("/:id", (request: Request, response: Response) => {

  response.json({
    id: request.params.id,
  });

});

export { feedRouter };
