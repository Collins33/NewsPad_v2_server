# NewsPad_v2_server

RESTful service that powers the [newspad_client_v2](https://newspadv2client.herokuapp.com/).

## Getting Started

- git clone https://github.com/Collins33/NewsPad_v2_server.git
- cd into the project folder
- run `npm install`

## Setting up mongo Atlas

- create an account on mongo DB atlas
- create a mongo atlas database
- ensure the IP security settings allow connections from everywhere
- copy the connection url given to you.
- create nodemon.json file
- add the database connection given to you

```
  "MONGO_DATABASE_URL": "database url given"
```

## Starting the application

- run `npm start`

## Running the tests

- create test database on mongo atlas
- ensure the IP security settings allow connections from everywhere
- save the database url given

```
"MONGO_DATABASE_TEST_URL":"test database url given"
```

- run `npm test`

## endpoints

| Endpoint                  |              FUNCTIONALITY              |
| ------------------------- | :-------------------------------------: |
| POST /api/v1/users/signup | This will create the create an accoount |
| POST /api/v1/users/login  |        This will login the user         |
| POST /api/V1/news         |      This will save a news article      |
| GET /api/V1/news          | This will retrieve saved news articles  |

## MAKING A POST REQUEST ON POSTMAN

# SIGN UP

```
Payload
{
	"email":"name.name@gmail.com",
	"password":"123bunnyhop"
}
Response
{
    "message": "User was created successfully"
}
```

# LOGIN

```
Payload
{
	"email":"name.name@gmail.com",
	"password":"123bunnyhop"
}
Response
{
    "message": "Auth successfully",
    "token": "xxxxxxxxxxxx",
    "email": "name.name@gmail.com"
}
```

# SAVE NEWS ARTICLE

- Make sure to provide a valid token when saving the article

```
Payload
{
	{
	"author":"John Doe",
	"title":"The virus",
	"description":"The john Doe virus",
	"url":"www.wwe/instagram/kane/me/true/now/instead/sting/MN/stuff/kinky.com",
	"urlToImage":null,
	"source":"Nou"
}

}
Response
{
   "response":"The article was saved successfully"
}
```

## Built With

- [NODE/EXPRESS](https://expressjs.com/) - The web framework used
- [npm](https://www.npmjs.com/) - Dependency Management
- [Mongo Atlas](https://www.mongodb.com/cloud/atlas)-Database

## Authors

- **COLLINS NJAU MURU**

## License

This project is licensed under the MIT License
