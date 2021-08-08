## API

### Create an user

POST http://localhost:3000/users

```json
{
  "name": "Bruno Nunes"
}
```

### List users

GET http://localhost:3000/users

### Add a hobby

POST http://localhost:3000/users/123456/hobbies

```json
{
  "name": "Running",
  "passionLevel": 2,
  "year": 2021
}
```

### Delete a hobby from user

DELETE http://localhost:3000/users/123456/hobbies/654321

