# Task Management App Documentation



## Table of Content

- [overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [pre-requisits](#pre-requisits)
- [Getting started](#getting-started)
- [Usage](#usage)
- [contributions](#contributing)
- [License](#license)



## Overview
This is a full-stack To-Do App that allows users to manage their tasks efficiently. The app provides CRUD (Create, Read, Update, Delete) operations and consists of both frontend and backend components.

## Features

1. **Create Task**: Add new tasks with a specified deadline.

2. **View Task**: View details of a specific task, including creation date, task description, and deadline.

3. **Edit Task**: Modify the details of an existing task.

4. **Delete Task**: Remove tasks that are no longer needed.

5. **List All Tasks**: Display a list of all tasks with creation dates and options to view, edit, and delete.

## Technologies Used
- **Frontend:**
  - React.js
  - React Router
  - Axios for API calls
  - Bootstrap for styling
  - Font Awesome icons

- **Backend:**
  - Node.js
  - Express.js
  - MySQL database

-  **Dependcies**
    - Axios
    - Nodemon
    - mysql2
    - cors
    - express
    - dotenv

## pre-requisits
Before you begin, ensure you have the following installed:
    - `node.js`
    - `mysql`

### Note: since it is the node package manager (npm) you must aware of

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Uvishwanth/task_management_app.git

### Run the Backend Server 
2. change the directory:
    ```bash
   cd server && npm install

### Run the Backend Server 

3. change the directory:
    ```bash
   cd client && npm install

## Usage

- Let's Start with the installation clone the repo by following above procedure.
- Make sure all the dependencies mentioned above are installed.
- change the directory with respect to those directories and install dependencies using command `npm install` in each
    run the server in server directory using command 
    ```bash
    npm run dev
- run the client in server directory using command
    ```bash
    npm start
- woolah! you can use this project for your personal use for task management

## Contributing
Contributions are welcome! If you have ideas for improvement, found a bug, or want to contribute new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: git checkout -b feature-name.
3. Commit your changes: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-name.
5. Open a pull request.

## License

This project is licensed under the MIT License.