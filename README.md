# Passport Local Authentication with React, ExpressJS and Mongoose

## Description

Simple app to show how to securely configure local authentification strategy (username & password) with [Passport](http://www.passportjs.org/packages/passport-local/) for an ExpresJS app with a React frontend. User data are stored in Mongo DB through Mongoose.

Passwords are hashed using [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) (See [this](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/) for some background information).

## Usage

Be sure to have a MongoDB running, either remotely (e.g. MongoAltas Sandbox) or locally.

Launch the backend:

```
cd backend
npm run start
```

Launch the frontend:

```
cd frontend
npm run start
```

Once everything is launched, you can test the app by:
1. Registering a user with a username and password
2. Login
3. Retreive user information
