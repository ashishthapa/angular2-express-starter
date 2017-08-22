/**
 * Created by athapa on 22/08/2017.
 */

import mongoose = require("mongoose");
import IBook = require("./IBook");

interface IBookModel extends IBook, mongoose.Document { }

export const BookSchema = new mongoose.Schema({
  author:String,
  date:String,
  status:String,
  genre:String,
  availability:Boolean
})
export const Book = mongoose.model<IBookModel>('Book', BookSchema);
