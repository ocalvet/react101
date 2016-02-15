# Sample React application
This is a sample React application that uses webpack to bundle react components together. It also use material-ui to make the application look better.

## Dependencies

* [nodejs](https://nodejs.org/en/)
* webpack (`$ npm install -g webpack`)
* webpack-dev-server (`$ npm install -g webpack-dev-server`)

## Installation
``` 
$ npm install
$ npm start
```
Navigate to [http://localhost:8090/webpack-dev-server/](http://localhost:8090/webpack-dev-server/) to run the app.

If there is an error that the webpack-dev-server was not found, run the following command to link the global package to the project

```
$ npm link webpack-dev-server --save
```