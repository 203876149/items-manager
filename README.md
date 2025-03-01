# Items Manager

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.
For the backend, it uses a simple JSON server to simulate a REST API.
The UI is built using Angular Material components.
The CD strategy is OnPush.

## Development server

To start the JSON server, run:

```bash
node server/src/app.js
```
This will start the server on `http://localhost:3000/` and will serve the data from in memory.

To start a local client development , run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```
