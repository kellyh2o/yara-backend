# Yet Another Reflection App - Backend

This backend repo provides support for the yara-frontend repo for the following features: 

- User Registration
- User Login
- View All Reflections
- Create Reflection

RESTful services power most any website today that receives and trasmits data via HTTP or HTTPS protocol. What you'll find below is what's used from express to run a simple set of Create, Read, Update, and Delete (CRUD) methods.

Only the bare essentials are used to create the API service, and only the feature used by express and mongoose (mongodb client) will be explained in this documentation guide.

_Caveats: Running this app assumes you have a working mongodb instance preinstalled on you machine, as well as yarn installed too_

## Quick Commands

To start the app: 

```
yarn start
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
brew install mongodb-community
```

Then create the database directory and give it permissions (Before Mac OS Catalina):

```bash
# Create the database directory
sudo mkdir -p /data/db

# Give write ownership for the directory
# You will be prompted to enter your password
sudo chown -R `id -un` /data/db
```

OR if running on Mac OS Catalina, run these commands to create the database directory and give it permissions: 

```bash
# Create the database directory
sudo mkdir -p /System/Volumes/Data/data/db

# Give write ownership for the directory
# You will be prompted to enter your password
sudo chown -R `id -un` /System/Volumes/Data/data/db
```





## Run the service

In the past, I can run the `mongod` command to start MongoDB. This no longer works out for the box from MongoDB v4.2.3 onwards.
The best way to start MongoDB now is via brew services.

```bash
brew services run mongodb-community
```


You'll know you sucessfuly ran the service and connected given the logs it presents you.

**NOTE: once configured, move onto the next steps.**

## Setup and Install

1. Install all packages:

```bash
yarn install
```

2. Create the .env file with the following information

```
MONGODB_URL=mongodb://localhost/yaradb
JWT_KEY=reallysecretaccesssecret
PORT=3000
```

_The jwt key field can be whatever you want it to be. The one provided is just an example._

3. Run server instance:

```bash
yarn start
```

Then with the front end started, you will be able to create a user, login to the app, view all reflections, 
and create a reflection. You will also be able to log out. 