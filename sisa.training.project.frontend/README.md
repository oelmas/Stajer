# HavelsanFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Getting started
- While developing this project, the monorepo method was adopted. 
- This application consists of three projects, one of them is a library which includes shared model, services and other shared stucture was named `shared`, the others are plain angular projects `front-panel` and `admin-panel`  

1- run `npm install` command to install required node_modules packages to project after pull it in your local git.  
2- run `npm run build-shared-libs` to build shared library  
3- run `npm run start-front-panel` command to serve front panel project on `http://localhost:4200/`  
4- run `npm run start-admin-panel` command to serve admin panel project on `http://localhost:4201/`

*Warning : apply step 3 and step 4 on separate command line in visual studio code or other ide terminal

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component components(folder-name)/component-name --project project-name(admin-panel|front-panel|shared) --skip-tests` to generate a new component without `spect`.  
You can also use `ng generate  directive|pipe|service|class|guard|interface|enum|module --project project-name(admin-panel|front-panel|shared|...)`.  

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
