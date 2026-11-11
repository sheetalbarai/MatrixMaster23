# The Timeline - Comments

A timeline web application built as part of the MERN program. This assignment
builds on Assignment 2 by adding comments to posts, using Express, EJS, MongoDB,
and Mongoose.

> **Status:** Comment  for the post creation, linking to post, deletion, and 
> server-side validation are implemented.

# VIDEO OF ADDING, DELETING, VALIDATING COMMENTS, DELETING POST(eventually deleting related comments)

![alt text](./img/The_timeline_comment.mp4)

## Features

The application supports:

- Listing posts, newest first, with their comments on the home page.
- Creating, viewing, editing, and deleting posts.
- Adding comments to a post and deleting comments.
- Validating post and comment fields with Mongoose.
- Deleting a post's linked comments when the post is deleted.
- Rendering EJS pages with shared header, navigation, and footer partials.

## What changed from Assignment 2

Assignment 2 stored and managed timeline posts. Assignment 3 adds comments and
the relationship between posts and comments:

- A new `comment` model stores each comment's author, text, and related post.
- The `post` model stores comment document IDs in its `linkedComments` array.
- When a comment is created, its ID is added to the associated post.
- The home page populates and displays each post's linked comments.
- A comment can be deleted, which also removes its ID from the post's array.
- Deleting a post also deletes the comment documents referenced by its
  `linkedComments` array.

## Directory structure

```text
Assignment3_The_timeline_comments/
├── app.js                         # Express app setup and server startup
├── package.json                   # Dependencies and npm scripts
├── .env.example                   # Example MongoDB connection setting
├── config/
│   ├── database.js                # Mongoose database connection
│   └── routes.js                  # Post and comment routes
├── controller/
│   ├── commentController.js       # Create and delete comments
│   └── postController.js          # Post and page request handlers
├── models/
│   ├── commentModel.js            # Comment schema
│   └── postModel.js               # Post schema and linked comment IDs
├── public/
│   ├── css/
│   │   └── style.css              # Application styles
│   └── HP.png                     # Static image asset
└── views/
    ├── 404.ejs                    # Not-found page
    ├── index.ejs                  # Timeline, post form, and comments
    ├── showAPost.ejs              # Single-post page
    ├── updatePost.ejs             # Edit-post form
    └── partials/
        ├── footer.ejs
        ├── head.ejs
        └── nav.ejs
```

`node_modules/` is generated when dependencies are installed and is not
application source. Keep your local `.env` file private; do not commit database
credentials.

## Requirements

- Node.js and npm
- A MongoDB database, local or hosted

## Setup and run

Open a terminal in this directory:

```sh
cd NodeJS_ExpressJS_MongoDB/Assignment3_The_timeline_comments
npm install
```

Create a `.env` file in this directory based on `.env.example`, and set
`MONGODB_URI` to your own MongoDB connection string. Replace the example
username, password, and host with valid values.

Start the application:

```sh
node app.js
```

The server listens on port `3000`. Once MongoDB connects, open
[http://localhost:3000](http://localhost:3000).

For automatic restarts during development, run:

```sh
 nodemon app.js
```

## Routes

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/` | List posts and comments |
| `GET` | `/showAPost/:id` | View a post |
| `GET` | `/editPost/:id` | Show the edit-post form |
| `POST` | `/updatePost/:id` | Update a post |
| `POST` | `/createNewPost` | Create a post |
| `GET` | `/deletePost/:id` | Delete a post and its linked comments |
| `POST` | `/createNewComment/:postID` | Add a comment to a post |
| `GET` | `/deleteAComment/:commentID/:postID` | Delete a comment and unlink it from its post |

## Learnings

This assignment provides practice with:

- Modeling related MongoDB documents with Mongoose ObjectId references.
- Keeping both sides of a relationship in sync when creating and deleting
  comments.
- Using Mongoose `populate()` to load related documents for a view.
- Handling asynchronous database operations in Express controllers.
- Rendering dynamic data and validation messages with EJS.
- Organizing an Express project into routes, controllers, models, and views.
- Configuring a database connection with an environment variable.

## Notes

- The app requires a valid `MONGODB_URI` before it can start serving requests.
- The `npm test` script is currently a placeholder; no automated test suite is
  configured.