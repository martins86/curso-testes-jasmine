# JasmineAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.

<br />

## Installation

| Action                                    | Command                                                  |
| ----------------------------------------- | -------------------------------------------------------- |
| Install Global Json-serve                 | `npm install -g json-server`                             |
| Install Dev Json-serve and Karma-spec-rep | `npm install karma-spec-reporter json-server --save-dev` |
| Install Material                          | `ng add @angular/material`                               |

<br />

## Commands

| Action                             | Command                                                 |
| ---------------------------------- | ------------------------------------------------------- |
| Create App                         | `ng new jasmine-angular`                                |
| Create Guard                       | `ng generate guard core/guard/auth-guard`               |
| Create Interceptor                 | `ng generate interceptor core/interceptor/http-request` |
| Create Module with Route Home      | `ng generate module pages/home --module --routing`      |
| Create Page Home                   | `ng generate component pages/home`                      |
| Create Module with Route Not found | `ng generate module pages/not-found --module --routing` |
| Create Page Not found              | `ng generate component pages/not-found`                 |

<br />

## Running app

| Action                | Command     |
| --------------------- | ----------- |
| Running app localhost | `npm start` |

<br />

## Running db

| Action                      | Command      |
| --------------------------- | ------------ |
| Running data base localhost | `npm run db` |

<br />

## Running unit tests

| Action                                           | Command            |
| ------------------------------------------------ | ------------------ |
| Running with coverage                            | `npm run test`     |
| Running with coverage in Chrome                  | `npm run test:dev` |
| Running with coverage in ChromeHeadlessNoSandbox | `npm run test:ci`  |

<br />
