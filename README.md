# Authentication and User Management API Documentation

## Endpoints

### 1. **User Registration**

- **URL**: `/register`
- **Method**: `OST`
- **Description**: Registers a new user by saving their details and hashing their password.

#### Request Body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

#### Validation Rules:

- `email`:
  - Must be a valid email address.
- `fullname.firstname`:
  - Required.
  - Minimum length: 3 characters.
- `fullname.lastname`:
  - Optional.
  - Minimum length: 3 characters.
- `password`:
  - Required.
  - Minimum length: 6 characters.

#### Success Response:

- **Status Code**: `201 Created`
- **Response**:

```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "<hashed_password>",
    "_id": "<USER_ID>"
  }
}
```

#### Error Responses:

- **Validation Errors**:
  - **Status Code**: `400 Bad Request`
  - **Response**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

---

### 2. **User Authentication Middleware**

- **Description**: Middleware to authenticate users based on JWT tokens and check if the token is blacklisted.

#### How It Works:

1. Extracts the token from cookies or `Authorization` header.
2. Checks if the token is blacklisted.
3. Verifies the token.
4. Attaches the authenticated user to the request object.

#### Errors:

- **Unauthorized Access**:
  - **Status Code**: `401 Unauthorized`
  - **Response**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```
- **Token Blacklisted**:
  - **Status Code**: `401 Unauthorized`
  - **Response**:
  ```json
  {
    "message": "Unauthorized - Token is blacklisted"
  }
  ```
- **Token Expired**:
  - **Status Code**: `401 Unauthorized`
  - **Response**:
  ```json
  {
    "message": "Unauthorized - Token expired"
  }
  ```

---

### 3. **User Logout**

- **URL**: `/logout`
- **Method**: `POST`
- **Description**: Logs out a user by blacklisting their token.

#### Process:

1. Takes the JWT token from cookies or `Authorization` header.
2. Adds the token to the blacklist database.
3. Clears the `token` cookie.

#### Success Response:

- **Status Code**: `201 Created`
- **Response**:

```json
{
  "message": "You are logged out"
}
```

---

## Blacklist Token Schema

- **Purpose**: To store blacklisted JWT tokens and enforce token expiry for 24 hours.

#### Schema:

```javascript
const mongoose = require("mongoose");
const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});

const BlacklistedToken = mongoose.model("BlacklistedToken", blacklistedTokenSchema);
module.exports = BlacklistedToken;
```

---

## Error Handling

### General Errors:

- **Unauthorized**: If the token is invalid or not provided.
- **Bad Request**: For validation errors.
- **Internal Server Error**: For unexpected issues.

---

## Environment Variables

- `JWTSECRET`: The secret key used for signing JWT tokens.
- PORT\:for ports.
- MONGODB: Mangodb url.

---

