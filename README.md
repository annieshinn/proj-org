# multi-project-organizer
Solo Project -- a multi-project-organizer to keep track of where you left off on various projects.

## TO DO LIST:
- [X] Create repository on github, and clone down to my machine
- [X] Run `npm init -y` to create a package.json. [Docs](https://docs.npmjs.com/cli/v6/commands/npm-init)
- [X] Install/add other dependencies (affects package.json)
  - [X] [express](https://www.npmjs.com/package/express)
  - [X] [mongoose](https://www.npmjs.com/package/mongoose)
  - [X] [nodemon](https://www.npmjs.com/package/nodemon)
  - [X] [react](https://www.npmjs.com/package/react)
  - [X] [react-dom](https://www.npmjs.com/package/react-dom)
  - [X] [webpack and webpack-cli](https://webpack.js.org/guides/getting-started/)
  - [X] [react-redux and redux](https://www.npmjs.com/package/react-redux)
- [X] Create basic folders and files
  - [X] Client folder
    - [X] index.js, components folder -> App.js
      - this is where i need to use react & redux!
    - [X] css would go here
  - [X] Server folder
    - [X] server.js
      - this is where i need to use express!
--- commit 1 ---
- [X] Hand draw front-end React Components and back-end

---- MF FINALLY GOT WEBPACK-DEV-SERVER TO WORK BEFORE DINNER!!!! ----

- [X] [Webpack](https://webpack.js.org/concepts/).. stuff
  - [X] Follow along unit instructions to get basic properties on module.exports
  - [X] Finalize compatiblity with css, react, 
  - [X] use nodemon and webpack-dev-server

## FRONTEND: REACT/REDUX 
- [X] Get something to show on localhost:3000
- [X] Connect React/Redux components in client folder
  - [X] createStore -> connect redux extension
  - [X] Create reducers: combiner, projects, and task
  - [X] Create container
  - [X] Create components: Project, Task
  - [X] Connect components
- [X] Setup a basic CSS file

## BACKEND/SERVER:
  - [X] Get localhost:3000 connected
  - [X] Get mongoDB connected
  - [ ] Set up file structure for server side (controllers, models, routes)
  - Using postman.. (mimic the assessment...?)
    - [ ] C create new project
    - [ ] C create new task
    - [ ] R read task (in return body)
    - [ ] U edit a task/project
    - [ ] D delete a task/project

## FRONTEND PT 2:
- [ ] Complete components
- [ ] Pass down data as props