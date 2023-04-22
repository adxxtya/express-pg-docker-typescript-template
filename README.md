# Express.js & Postgres Server with Docker in Typescript

This is a starter template for an Express.js & Node.js server-side application with a Postgres database in Docker. The template uses best coding practices with ESLint and Prettier, it also uses nodemon for better development environment and is written in TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed on your machine:

- Node.js (version 18.x.x or later)
- Postgres
- Docker
- Docker Compose

### Installing

Clone the repository using Git:

`git clone https://github.com/adxxtya/express-pg-docker-typescript-template.git ./`

This command will clone this git repo in your current working directory.

- Install the dependencies:

  `npm install`

### Environment

Create an .env file in the root directory of the project and copy paste the following code in the env file, make sure to fill the details as per your configuration

```
NODE_PORT=5000

DB_USER="your_db_username"
DB_NAME="your_db_name"
DB_HOST="localhost"
DB_DATABASE="your_db_name"
DB_PASSWORD="your_db_password"
DB_PORT=5432
```

### Usage

- (Preferred) To start the server with nodemon which supports hot reloading out of the box, execute the following command:

`npm run nodemon`

- To start the server normally with ts-node, execute the following command:

`npm run dev`

The server will start on port 5000 by default according to the port mentioned in the `.env` file. You can change the port by changing the `PORT` environment variable in the `.env` file.

To stop the server, press `CTRL-C`.

- To lint the TypeScript files, execute the following command:

`npm run lint`

- To automatically fix linting errors in the TypeScript files, execute the following command:

`npm run lint-and-fix`

- To build the TypeScript files to JavaScript, execute the following command:

`npm run build`

If you have finished testing the application and it works perfectly in your local environment, you can move on to setting up Docker. Follow the below steps to set up Docker and Docker Compose:

1.  Install Docker and Docker Compose on your machine if you haven't already. Also, if you are using Windows or Mac, you wouldn't need to install docker-compose externally, it will be packaged along with the Docker Desktop Application.
2.  Now, open the project directory in the terminal and run the following command to build the Docker image:

- `docker build -t your_image_name .`

  This will build a Docker image with the name `your_image_name` in the current directory specified with the `.` in the end.

- Once the Docker image is built, you can run the Docker container using the following command:
- `docker compose up`

  This will start the Docker container with the PostgreSQL database and the Node.js server.

- You can access the application by navigating to `http://localhost:5000` in your web browser.
- To stop the Docker container, use the following command:

1.  `docker compose down`

    This will stop and remove the Docker container.

Note: Make sure to update the environment variables in the `.env` file according to your Docker setup.

### Stack Used

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [PostgreSQL](https://www.postgresql.org/) - Powerful, open-source object-relational database system
- [Docker](https://www.docker.com/) - Platform for building, shipping, and running distributed applications
- [Docker Compose](https://docs.docker.com/compose/) - Tool for defining and running multi-container Docker applications
- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript
- [ts-node](https://github.com/TypeStrong/ts-node) - TypeScript execution and REPL for node.js
- [ESLint](https://eslint.org/) - Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
- [Prettier](https://prettier.io/) - Opinionated code formatter

### Author

- Aditya Maurya - [My Github Profile](https://github.com/adxxtya)

### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.
