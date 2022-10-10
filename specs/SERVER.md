# SERVER

### Description

### Server Stack

- MongoDB
- Mongoose
- Nodejs
- Express

### Endpoints

There are `events` and `users` endpoints for the backend. Refer to the format below:

> ℹ️ **_FORMAT:_**
>
> - **HTTP_METHOD**:::`endpoint`
>   - description of the endpoint

- **POST**:::`api/events/`
  - CREATE a new event in the database. Details of new event is in request body.
- **GET**:::`api/events/`
  - READ ALL events from the database
- **GET**:::`api/events/:id`
  - READ SPECIFIC event from the database
- **POST**:::`api/events/:id`
  - UPDATE SPECIFIC event from the database. Updated event details is in the request body.
- **DELETE**:::`api/events/:id`
  - DELETE SPECIFIC event from the database
- **POST**:::`api/users/`
  - CREATE a new user in the database. Details of new user is in request body.
- **GET**:::`api/users/`
  - READ ALL users from the database
- **GET**:::`api/users/:id`
  - READ SPECIFIC user from the database
