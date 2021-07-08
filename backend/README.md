# Backend

## Description

Simple and secure `ExpressJS` backend with PassportJS local authentication strategy

Uses `Mongo` through `Mongoose` as a database.

Defines several endpoints:

```
/login
/register
/user
```

## Usage

### Configure environment variables:

1. Rename `.env.exemple` to `.env`
2. Set the value of `MONGO_CONNECTION` in `.env`. You can use [Atlas](https://www.mongodb.com/cloud/atlas) to quickly create a free sandbox and get a connexion string.

### Run the app

In a terminal, run:

```
npm run start
```
