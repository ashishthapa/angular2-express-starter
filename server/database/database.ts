/**
 * Created by athapa on 17/05/2017.
 */

import * as mongoose from 'mongoose';
import {MongoString} from "./mongoConf";

/**
 * Create a Mongo connection to interact with DB.
 * */
export class Database {

  private port:string='';
  public static bootstrapDatabase() {
    new Database().connectDB();
  }
  private constructor(){

  }

  connectDB() {
    mongoose.connect(MongoString.monURL)
    mongoose.connection.on('error', err => {
      console.log(err);
    })
    mongoose.connection.on('open', () => {
      console.log('connected on port');
    })
  }
}
