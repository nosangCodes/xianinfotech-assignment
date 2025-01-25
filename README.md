# Context
- [API docs](#api-documentation)
- [Admin Panel](#admin-panel)



# API Documentation

## Base URL

`http://localhost:4000`

---

## Authentication

### Register User

**Endpoint:** `POST /api/auth/register`

**Description:** Registers a new user.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "userType": "CLIENT",
  "phone": "+1234567112",
  "whatsappNo": "+1234567212",
  "email": "janedoe@mail.com",
  "state": "California",
  "password": "test"
}
```

**Response:**

- `201 Created`: User registered successfully.
- `400 Bad Request`: Validation errors.

---

### Login User

**Endpoint:** `POST /api/auth/login`

**Description:** Authenticates a user and returns a JWT token.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

```json
{
  "email": "janedoe@mail.com",
  "password": "test"
}
```

**Response:**

- `200 OK`: Returns JWT token.
- `401 Unauthorized`: Invalid credentials.

---

### Refresh Token

**Endpoint:** `GET /api/auth/refresh-token`

**Description:** Refreshes the JWT token.

**Request Headers:**

- `Authorization: Bearer <token>`

**Response:**

- `200 OK`: Returns refreshed JWT token.
- `401 Unauthorized`: Invalid or expired token.

---

## User Management

### Get User Information

**Endpoint:** `GET /api/user`

**Description:** Retrieves information about the authenticated user.

**Request Headers:**

- `Authorization: Bearer <token>`

**Response:**

- `200 OK`: Returns user data.
- `401 Unauthorized`: Invalid or missing token.

---

### Search Users

**Endpoint:** `GET /api/user/search`

**Description:** Searches for users based on a query string.

**Request Headers:**

- `Authorization: Bearer <token>`

**Query Parameters:**

- `search`: Search term (e.g., `?search=jo`).

**Response:**

- `200 OK`: Returns a list of matching users.
- `401 Unauthorized`: Invalid or missing token.

---

### Get User by ID

**Endpoint:** `GET /api/user/{userId}`

**Description:** Retrieves details of a user by their ID.

**Request Headers:**

- `Authorization: Bearer <token>`

**Path Parameters:**

- `userId`: The ID of the user.

**Response:**

- `200 OK`: Returns user data.
- `404 Not Found`: User not found.

---

### Update User

**Endpoint:** `PATCH /api/user/{userId}`

**Description:** Updates user information.

**Request Headers:**

- `Authorization: Bearer <token>`
- `Content-Type: application/json`

**Path Parameters:**

- `userId`: The ID of the user to update.

**Request Body:**

```json
{
  "firstName": "DabidUpdated"
}
```

**Response:**

- `200 OK`: User updated successfully.
- `400 Bad Request`: Validation errors.
- `404 Not Found`: User not found.

---

# Admin Panel

## Sign Up Form
### Register new user
![Screenshot from 2025-01-25 20-17-05](https://github.com/user-attachments/assets/4b790b87-3a4a-4b38-b2cc-3359611dd69d)
---
## Sign In Form
### Login registered users
(Users(ADMIN OR CLIENT) are logged in to admin panel for this assignment)
![Screenshot from 2025-01-25 20-16-50](https://github.com/user-attachments/assets/ef42efe6-d9c2-44e6-8585-d5250d01af62)
---
## User List
![Screenshot from 2025-01-25 20-10-18](https://github.com/user-attachments/assets/2999e822-d12d-48c8-a6b1-06a0a56d8390)
### Features
- Filter by name
- Paginated data
- View Individual user's data
- Edit user's data
  
![image](https://github.com/user-attachments/assets/d2938255-17a3-49aa-a2e2-e1828bbbe62e)
![Screenshot from 2025-01-25 20-16-38](https://github.com/user-attachments/assets/c517c9b8-8f04-4487-b04a-521e4e7d9ba1)

---
