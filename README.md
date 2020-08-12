# gostack-01
First Rocketseat challenge - NodeJS server with Express

# Start
Run `yarn` to install all the dependencies and `yarn dev` to start the server.

# Available routes

- GET /repositories
  Get all existing repositories

- POST /repositories  
  Add new repository  
  ```sh
  body: {  
    "title": String,
    "url": String,
    "techs", Array
  }
  ```
- PUT repositories/:id
  Edit one repository
  ```sh
  body: {  
    "title": String,
    "url": String,
    "techs", Array
  }
  ```
  
* DELETE /repositories/:id  
  Remove project with given id  

* POST /repositories/:id/like
  Increment likes by one 
