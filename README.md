### Food order app

A food order app based on the MERN stack developed during the following Udemy course: [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

### Running the app

In order to run the app in development mode you have to run the command:

```bash
$ npm install
```

in the frontend and server directory.

Then you have to run the following command in the server directory:

```bash
$ npm run dev
```

and the following command in the frontend directory:

```bash
$ npm start
```

### Requirements

The project requires you to have **MongoDB Community Edition** installed in order for the API and the server to work.

### Enviroment variables

You have to create 2 .env files one in the server directory and one in the frontend directory.
In the server's .env you have to define the variable DATABASE_URL which contains your mongodb url.
In the frontend's .env you have to define the variable REACT_APP_BASE_API_URL which contains the base url of the API for example http://localhost:3000
