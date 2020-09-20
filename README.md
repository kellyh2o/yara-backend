# Yet Another Reflection App - Backend

This backend repo provides support for the yara-frontend repo for the following features: 

- User Registration
- User Login
- View All Reflections
- Create Reflection

RESTful services power most any website today that receives and trasmits data via HTTP or HTTPS protocol. What you'll find below is what's used from express to run a simple set of Create, Read, Update, and Delete (CRUD) methods.

Only the bare essentials are used to create the API service, and only the feature used by express and mongoose (mongodb client) will be explained in this documentation guide.

_Caveats: Running this app assumes you have a working mongodb instance preinstalled on you machine_

## Quick Commands

To start the app: 

```
npm start
```

## What you'll find

| Directory   | Description                                           |
| ----------- | ----------------------------------------------------- |
| models      | Representations of data to be used in mongodb.        |
| controllers | Functions to be bound and executed on routes.         |
| routes      | A series of routes for handling HTTP requests.        |
| middleware  | Other helful functions necessary for running the app. |



## MongoDB Setup and Installation

Follow the instructions below to get mongo installed.

For Windows users, follow the setup and install on the [MongoDB website](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

For Mac/Linux users:

```bash
# Install using brew
brew install mongodb

# Create the database directory
mkdir -p /data/db

# Give write ownership for the directory
# You will be prompted to enter your password
sudo chown -R `id -un` /data/db

```
If running on MacOS Catalina, there is a known bug that prevents the writing on the default db path. You may need to run the following command instead:

```bash
mongod --dbpath /System/Volumes/Data/Users/<YourUsername>/Data/data/db
```

# Run the service
```bash
mongod
```

In another terminal window, you can access the mongo shell with:

```bash
mongo
```

You'll know you sucessfuly ran the service and connected given the logs it presents you.

**NOTE: once configured, move onto the next steps.**

## Setup and Install

1. Install all packages:

```bash
npm install
```

2. Spin up the mongodb instance:

```bash
mongod
```

3. Run server instance (either one works):

```bash
npm start
```

## Run App

In order to run the app, since the UI isn't fully complete, you must perform a Postman  POST request to this url: 

```
http://localhost:3000/api/auth/register
```

For the body of the request, select the x-www-form-urlencoded option and enter the following keys and fill out the values as well:


```
{
    email: "",
    username: "",
    password: ""
}
```

Then you will need to create a reflection with another Postman POST request:


```
http://localhost:3000/api/reflections
```

For this request, you need to set the authentication to "Bearer"  and use the token returned in the response from the register request performed right before this step. 


In the reflections post, for the body of the request, select the x-www-form-urlencoded option and enter the following keys and fill out the values as well:


```
{
    type: "",
    createdBy: "",
    title: ""
    text: ""
}
```

This is an example of a create f reflection request body:

```
{
    "type": "Open",
    "createdBy": "Kelly",
    "title": "test title",
    "text": "test text",
}
```


Then with the front end started, you will be able to login and view the reflection you created.