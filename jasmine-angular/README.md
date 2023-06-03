# Jasmine Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.

<br />

# Installation

| Action                                           | Command                                                |
| ------------------------------------------------ | ------------------------------------------------------ |
| `Install Global Json-serve`                      | npm install -g json-server                             |
| `Install Dev Json-serve and Karma-spec-reporter` | npm install karma-spec-reporter json-server --save-dev |
| `Install Material`                               | ng add @angular/material                               |

<br />

# Commands

| Action                               | Command                                                                            |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| `Create App`                         | ng new jasmine-angular --routing=true --style=scss                                 |
| `Create Guard CanActivate`           | ng generate guard core/guard/auth-guard                                            |
| `Create Interceptor`                 | ng generate interceptor core/interceptor/http-request                              |
| `Create Module Layout`               | ng generate module shared/layout --module                                          |
| `Create Component Layout Top Bar`    | ng generate component shared/layout/default/top-bar                                |
| `Create Component Layout Bottom Bar` | ng generate component shared/layout/default/bottom-bar                             |
| `Create Module with Route Home`      | ng generate module pages/home --module --routing                                   |
| `Create Module with Route Not found` | ng generate module pages/not-found --module --routing                              |
| `Create Page Home`                   | ng generate component pages/home                                                   |
| `Create Page Not found`              | ng generate component pages/not-found                                              |
| `Create Service Loading`             | ng generate service services/loading/loading                                       |
| `Create Component Loading Spinner`   | ng generate component shared/components/loading-spinner --skip-import --standalone |
| `Create Component Header Pages`      | ng generate component shared/components/header-page --skip-import --standalone     |
| `Create Component Star Rating`       | ng generate component shared/components/star-rating --skip-import --standalone     |
| `Create Pipe Bypass Security`        | ng generate pipe pipes/bypass-security/bypass-security --skip-import               |
| `Create Pipe Replace Random String`  | ng generate pipe pipes/replace-random-string/replace-random-string --skip-import   |
| `Create Pipe Truncate String`        | ng generate pipe pipes/truncate-string/truncate-string --skip-import               |
| `Create Directive Sign in Google`    | ng generate directive directives/sign-in/google-sign-in --skip-import              |
| `Create Directive Mask Input CNPJ`   | ng generate directive directives/masks/mask-input-cnpj --skip-import               |
| `Create Service Crud Operations`     | ng generate service services/crud-operations/crud-operations                       |
| `Create Service Registry Icons`      | ng generate service services/registry-icons/registry-icons                         |
| `Create Interface Crud Operations`   | ng generate interface interfaces/crud-operations                                   |

<br />

# Running app

| Action                  | Command   |
| ----------------------- | --------- |
| `Running app localhost` | npm start |

<br />

# Running Database

| Action                       | Command    |
| ---------------------------- | ---------- |
| `Running database localhost` | npm run db |

<br />

# Running unit tests

| Action                                                   | Command          |
| -------------------------------------------------------- | ---------------- |
| `Running tests with coverage`                            | npm run test     |
| `Running tests with coverage in Chrome`                  | npm run test:dev |
| `Running tests with coverage in ChromeHeadlessNoSandbox` | npm run test:ci  |

<br />
