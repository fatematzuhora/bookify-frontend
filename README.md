# bookify-frontend
A small ReactJS application for a travel company that will allow the user to publish, view, and search properties that are available for bookings based on user search criteria.

The Front-End application is build using the [ReactJS](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Redux](https://redux.js.org/). [Antd](https://ant.design/) is using to develop UI.

## Quick Start
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
* Run Project:
```
npm start
```

### Note
To communicate with the backend, first setup [bookify-backend](https://github.com/fatematzuhora/bookify-backend) project.

## Start with Docker
If you have docker installed on your local machine you just need to go a few steps with Docker to run the project.

* Step One: Build a `docker image`:
```
docker build -t bookify-frontend .
```

If you are using Linux distro and facing any permission error just insert `sudo` at beginning of the command. For example:
```
sudo docker build -t bookify-frontend .
```

Now you can see the following message on your terminal:

**Successfully tagged bookify-frontend:latest**

This means the docker image has built successfully.

* Step Two: Run the docker image:
```
docker run bookify-frontend
```
