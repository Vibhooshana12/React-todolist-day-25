# React Todo App

A simple and responsive Todo application built using React and styled with Bootstrap CDN. This application allows users to add, update, delete, and filter todos (CRUD APPLICATION).

## Features

- Add new todos with a name and description.
- Edit and delete existing todos.
- Mark todos as completed or not completed.
- Filter todos based on their status (All, Completed, Not Completed).
- Responsive design using Bootstrap.

## Demo

Check out the live demo of the project [here](https://vibhooshana-todolist-36c73d.netlify.app/).

## Folder Structure

todolist-app/

├── node_modules/

├── public/

│   ├── favicon.ico

│   └── index.html

├── src/

│   ├── components/

│   │   ├── Cards.jsx

│   │   ├── Filter.jsx

│   │   └── Form.jsx

│   ├── App.css

│   ├── App.jsx

│   ├── index.css

│   ├── index.js

├── .gitignore

├── package.json

├── README.md


## Project Setup

1. Set up your React application:

   ```bash
   npx create-react-app todo-app
   cd todo-app

2. Add Components

Create the following components in the src/components directory:

         -`Form.jsx`
         
         -`Filter.jsx`
         
         -`Cards.jsx`

3.Run the development server:

To start the development server, use the following command:

     npm start

4.Open your browser and navigate to http://localhost:3000 to see the application.

## Deployment

To deploy your application:

1. Build the project:
   ```bash
    npm run build
   
2. Deploy the `build` folder to Netlify.

## Acknowledgements

React for the JavaScript library.

Bootstrap for styling.

Netlify for providing the platform to deploy the application.ion.
