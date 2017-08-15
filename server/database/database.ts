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
  //  private monURL:string ="mongodb://paper:paper1919@lamppost.13.mongolayer.com:10299,lamppost.14.mongolayer.com:10010/paper?replicaSet=set-55e7253c5556ddd3af000bf0";

  public static bootstrapDatabase() {
    new Database().connectDB();
  }
  private constructor(){

  }

  connectDB() {
    mongoose.connect(MongoString.MONGO_URL)
    mongoose.connection.on('error', err => {
      console.log(err);
    })
    mongoose.connection.on('open', () => {
      console.log('connected on port');
    })
  }
}
