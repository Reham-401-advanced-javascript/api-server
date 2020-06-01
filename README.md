# LAB - Class 7 : Api-server
### Author: Reham Omar AL-Sobh

 ## Links and Resources
 - [submission PR/lab-07 ](https://github.com/Reham-401-advanced-javascript/api-server/pull/4)
 - [swager]( https://app.swaggerhub.com/apis/Reham-Omar/api-lab6/0.1#/default)

 ## Documentaion

 - CREATE a new record in a database, using the POST method 
   `*post: 3000/products*`
 - READ the list of all records in a database, using the GET method without specifies id or have aspecific record by entering it's id .
  ` *get: 3000/products* || *get: 3000/products/id*`
 - UPDATE  an existing record in a database, using the PUT with id parameter .
   `*update: 3000/products/id*`
 - DELETE an existing record in a database, using the DELETE with id parameter 
   `*delete: 3000/products/id*`
 
 ## Setup

 `npm i jest eslint`

 #### .env requirements (where applicable)
  i.e.

  `PORT - Port Number` :3000
  `MONGODB_URI` - URL to the running mongo instance/db

  ## How to initialize/run your application (where applicable)
   * `npm test`

  ## Tests

  #### How do you run tests?
  ` npm test`
  #### Any tests of note?
   `jest --verbose --coverage`


## UML

[UML Diagrame ](assest/lab-07.jpg)
