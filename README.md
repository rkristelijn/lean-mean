# Git

    echo "# lean-mean" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/rkristelijn/lean-mean.git
    git push -u origin master

# LeanMean

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Setting up Node / Express
Copy 3 files:
server.js
api/controller.js
api/route.js
api/model.js

Add some things to package.json

npm install 

(or use npm install --save for ...?)

## To combine ng serve and node server.js
Option 1: use ng build --watch on tt1, use nodemon server.js on tt2

https://stackoverflow.com/questions/42895585/hooking-up-express-js-with-angular-cli-in-dev-environment 

use on the same line: 

ng build -w & nodemon server.js --watch dist --watch server

https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md
