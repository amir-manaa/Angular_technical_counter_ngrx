# Angular_technical_test

# Project 2: counter_ngrx

Simple counter application.

## Description

counter application with 3 pages, /up to increment counter, /down to decrement counter and /reset to initialize the counter and X values to 0.

To persist data, i use a fake REST API json-server npm module : [Json server](https://www.npmjs.com/package/json-server),

And concurrently to run multiple commands : [concurrently](https://www.npmjs.com/package/concurrently)

first we run json-server to our API then we serve the Angular application.

## Getting Started

### Dependencies

* Node.js : ^18.10.0
* Angular CLI : 16.2.10

### Installing

* In the /counter_ngrx file execute [ npm install ] to install dependencies.

```
npm install
```

* To serve and open the application on the local host using port 4200 execute [ npm run start ].

```
npm run start
```

* localhost:3000 to acess to REST API.
* localhost:3000/counter to access to counter API.
* to edit manually the REST API, you need to access the file : **src/app/DB/counter.db.json**

  
