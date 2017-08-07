* This is a fork from https://github.com/vladotesanovic/angular2-express-starter, 
Please check for original version and License by vladotesanovic

* This project contains multiple branches for different purposes: Feel free to browse through them.
  for instance(playmore branch is an attempt to check for live trains, Paper branch to display & update the newest questions
  for different subjects..... library branch to ... mock a library and the book tansactions. )

This is an effort to load live trains. It uses Angular2 for scripting. Rxjs Observables are used to create observable
streams which then could be subscribed to. Ngrx/effects are used to listen to a particular action and start a new 
one based on the former action. The data retrieved from HTTP GET is stored to ngrx/store (through select method) which is
then subscribed to get continuous data. The data manipulation (Only receive in this case) is done through reducer functions.
The reducers only react to dispatched action using the store (Store is a JS Object which stores the state of the whole 
application) & data is not and should not be mutated directly anywhere else to retain the core concept of Redux.

