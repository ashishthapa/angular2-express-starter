/*
/!**
 * Created by athapa on 18/05/2017.
 *!/

import { Request, Response, Router } from "express";
import {Biology, Botany, Zoology} from '../database/paper';


const paperRouter: Router = Router();



let pName='username';
let pSurname ='surname';
let shortQ = 'short q';
let longQ = 'long q';
let bArray = new Array<string>();
bArray.push('first question ');
bArray.push('second question');
bArray.push('third question');

let botany1 = new Botany(shortQ, longQ,bArray,bArray,bArray,bArray);
let zoology1 = new Zoology(shortQ, longQ,bArray,bArray,bArray,bArray);


paperRouter.get("/addOne", (request: Request, response: Response) => {
  new Biology({name:pName,surname:pSurname, botany:[botany1], zoology:[zoology1]}).save((err,user)=> {
    if(err){
      console.log(err);
      return;
    }
    console.log('saved');
    //console.log(user);
    return response.redirect("/api/paper");
  });
});

paperRouter.get("/", (request: Request, response: Response) => {
  Biology.find({}, (err, docs)=>{
    if(err){console.log(err)}
    console.log(docs.length);
    response.json(docs);
    return;
  });
});

paperRouter.get("/:id", (request:Request, response:Response)=>{
  console.log(request.params.id);
  Biology.findById( request.params.id , (err, docs)=>{
    if(err){console.log('error'+ err)}
    response.json(docs);
    return;
  });
});

paperRouter.delete("/:id", (request:Request, response:Response)=> {
  console.log(request.params.id);
  Biology.findByIdAndRemove(request.params.id, (err, docs) => {
    if (err) {
      console.log('error' + err)
    }
    response.json(docs);
    return;
  });
});

export { paperRouter }
*/
/**
 * Created by athapa on 18/05/2017.
 */

import { Request, Response, Router } from "express";
import {Paper, Group, PaperInfo } from '../database/paper';

const paperRouter: Router = Router();

/**
 * Create Mock Data, everytime the url redirects to /addone: Use the following mock data to create an instance of
 * a Paper and post.
 *
 *
 * */
let paperID = new Date().toISOString();
let exam='new HSEB';
let grade ='12';
let subject = 'Biology';
let year = '2017/2074';
let info = 'Please complete all the questions';
let paperInfo = new PaperInfo (exam,grade,subject,year,info);
let long_question = "This is long question"
let long_or_questions = new Array<string>("whats is long_or quetion?","what is long_or question2?");
let brief_questions = new Array<string>("whats is brief quetion?","what is brief question2?");
let short_questions = new Array<string>("whats is short quetion?","what is short question2?");
let group_name = "botany & zoology";
let group1 = new Group(group_name, short_questions, brief_questions, long_or_questions, long_question);
let group2 = new Group(group_name, short_questions, brief_questions, long_or_questions, long_question);

/**
 *
 *
 * End of Mock data, Redirect the api to /api/paper once the paper instance is posted
 *
 * */



paperRouter.post("/addOne", (request: Request, response: Response) => {
  new Paper ( {paperID:new Date().toISOString(), paper_info: paperInfo , groups:[ group1, group2 ] }).save((err,user)=> {
    if(err){
      console.log(err);
      return;
    }
    console.log('saved');
    //console.log(user);
    return response.redirect("/api/paper");
  });
});

/**
 *
 * API to get all the papers. If error does not occur, return the papers.
 *
 * */

paperRouter.get("/", (request: Request, response: Response) => {
  Paper.find({}, (err, docs)=>{
    if(err){console.log(err)}
    console.log(docs.length);
    return response.json(docs);
    ;
  });
});

/**
 *
 * API to get individual paper.
 *
 * */

paperRouter.get("/:id", (request:Request, response:Response)=>{
  console.log(request.params.id);
  Paper.findById( request.params.id , (err, docs)=>{
    if(err){console.log('error'+ err)}
    response.json(docs);
    return;
  });
});

/**
 *
 * API to delete one paper.
 *
 * */
paperRouter.delete("/:id", (request:Request, response:Response)=> {
  console.log(request.params.id);
  Paper.findByIdAndRemove(request.params.id, (err, docs) => {
    if (err) {
      console.log('error' + err)
    }
    response.json(docs);
    return;
  });
});
paperRouter.post('/', (request:Request, response:Response)=>{
  console.log({
    name: request.body.name
  });
})

/**
 *
 * API to get update one the paper. Get the paperID to find the unique id from the DB and update the field.
 * Save and return the updated field if no error occurs
 *
 * */

paperRouter.post('/update', (request:Request, response:Response)=>{
  const reqID = request.body.id;
  const newData = request.body.info;
  console.log(reqID);
  Paper.findOne({paperID:reqID}, function(err, paper) {

    if (err)
      response.send(err);

        paper.paper_info.info = newData

    paper.save(function(err) {
      if (err)
        response.send(err);
      //console.log(paper);
      response.json(paper);

    });

  });
});

export { paperRouter }
