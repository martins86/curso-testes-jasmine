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

| Action                               | Command                                                                          |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| `Create App`                         | ng new jasmine-angular                                                           |
| `Create Guard CanActivate`           | ng generate guard core/guard/auth-guard                                          |
| `Create Interceptor`                 | ng generate interceptor core/interceptor/http-request                            |
| `Create Module with Route Home`      | ng generate module pages/home --module --routing                                 |
| `Create Module with Route Not found` | ng generate module pages/not-found --module --routing                            |
| `Create Page Home`                   | ng generate component pages/home                                                 |
| `Create Page Not found`              | ng generate component pages/not-found                                            |
| `Create Component Loading Spinner`   | ng generate component shared/component/loading-spinner --skip-import             |
| `Create Component Star Rating`       | ng generate component shared/component/star-rating --skip-import                 |
| `Create Pipe Bypass Security`        | ng generate pipe pipes/bypass-security/bypass-security --skip-import             |
| `Create Pipe Replace Random String`  | ng generate pipe pipes/replace-random-string/replace-random-string --skip-import |
| `Create Pipe Truncate String`        | ng generate pipe pipes/truncate-string/truncate-string --skip-import             |

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
