# bookify-frontend
A small ReactJS application for a travel company that will allow the user to publish, view, and search properties that are available for bookings based on user search criteria.

The Front-End application is build using the [ReactJS](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Redux](https://redux.js.org/). [Antd](https://ant.design/) is using to develop UI.

### Quick Start
* Clone the repo:
```
git clone https://github.com/fatematzuhora/bookify-frontend.git
```
* Go inside the folder:
```
cd bookify-frontend
```
* Install necessary libraries:
```
npm i
```
* Build CSS from SASS:
```
npm run build:css
```
* Create an environment file:
```
touch .env
```
* Open environment file and edit configuration variables:
```
# .env file
NODE_PATH=./src
ROOT_DIR=./

NODE_ENV=dev
API_BASE_URL=http://localhost:8080/api
```
* Run Project:
```
npm start
```

### Note
To communicate with the backend, first setup [bookify-backend](https://github.com/fatematzuhora/bookify-backend) project.