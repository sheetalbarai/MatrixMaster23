# Tweeter - Back End Challenge
An application built with Node.js, Express, EJS, and MongoDB.
Users can register and log in, then create and browse tweets.

### STATUS -Current Limitation
1. ###Signup/login validation and database error handling are not proper. Need to do it with correct understanding. Server side validation to be communicated from baackend to frontend. 
2. Tweets are not associated with the creator. may be in future add to it.
3. if passwords are not matching- preserve the other user information than password.
4. E11000 duplicate key error - if user tries to register again - need to handle it correctly.

## Features
- User registration and login
- Password hashing with bcrypt
- JWT-based login cookie
- Tweet creation, listing, viewing, editing, and deletion
- EJS templates and static CSS
- Mongoose schema validation

## Requirements
- Node.js and npm
- A MongoDB database (local or hosted)

## Setup
1. Open a terminal in the `Tweeter` directory.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in this directory. Set the database connection string and a private JWT signing secret:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/<database-name>
   JWT_SECRET=<long-random-secret>
   ```

   Replace the placeholders with your own values. Do not commit `.env` or share its secrets.

4. Start the server:

   ```bash
   node app.js 
   ```
   The app connects to MongoDB before listening on port `7000`. Open [http://localhost:7000](http://localhost:7000).

For development with automatic restarts, run:

```bash
nodemon app.js
```

## Routes

| Method |         Path        |            Purpose                     | Login required |
|--------|---------------------|----------------------------------------|----------------|
| `GET`  | `/`                 | Show the registration and login page   |       No       |
| `POST` | `/`                 | Register a user                        |       No       |
| `POST` | `/login`            | Log in                                 |       No       |
| `GET`  | `/logout`           | Clear the login cookie                 |       No       |
| `GET`  | `/tweet`            | List tweets                            |       Yes      |
| `GET`  | `/addTweet`         | Show the new-tweet form                |       Yes      |
| `POST` | `/addTweet`         | Create a tweet                         |       Yes      |
| `GET`  | `/tweet/:id`        | View a tweet                           |       Yes      |
| `GET`  | `/tweet/edit/:id`   | Show the edit form                     |       Yes      |
| `POST` | `/tweet/edit/:id`   | Update a tweet                         |       Yes      |
| `GET`  | `/tweet/delete/:id` | Delete a tweet                         |       Yes      |

Unknown paths show a 404 page.

## Validation and data

- User records include first name, last name, email, and a bcrypt-hashed password.
- Emails are required, validated, stored lowercase, and marked unique in MongoDB.
- Tweet titles are required and at least 20 characters long.
- Tweet messages are required and limited to 50 characters.
- Tweets have Mongoose timestamps and are listed newest first.

## Project layout

```text
Tweeter/
├── app.js
├── auth/                 # JWT authentication middleware
├── config/               # Routes and database connection
├── controller/           # User and tweet request handlers
├── models/               # Mongoose schemas
├── public/css/           # Stylesheets
└── views/                # EJS pages and shared partials
```



