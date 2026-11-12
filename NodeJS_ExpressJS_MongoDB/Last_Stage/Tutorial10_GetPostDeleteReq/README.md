# Tutorial 10: GET, POST, and DELETE Requests

A small Express and MongoDB blog application demonstrating server-rendered pages, form submissions, and deleting a blog with the Fetch API.

## What this tutorial covers

- Connecting an Express app to MongoDB with Mongoose.
- Defining a blog schema with required fields and automatic timestamps.
- Rendering EJS views and listing blogs newest first.
- Parsing form submissions and creating blog documents.
- Fetching a blog by its MongoDB ObjectId.
- Sending a `DELETE` request from the browser and redirecting after deletion.
- Logging HTTP requests with Morgan.

## Requirements

- Node.js and npm
- A MongoDB database (local or MongoDB Atlas)

## Setup

From this directory, install the dependencies:

```bash
npm install
```

Create a `.env` file in this directory and set `MONGODB_URI` to your MongoDB connection string. The `.env.example` file shows the expected variable:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/
```

Replace the placeholders with your database credentials and cluster host. Keep `.env` private; it is excluded from Git.

Start the app:

```bash
node app.js
```

For automatic restarts during development, run:

```bash
 nodemon app.js
```

Once MongoDB connects, the app listens on [http://localhost:3000](http://localhost:3000).

## Routes

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Redirects to the blog list. |
| `GET` | `/about` | Renders the About page. |
| `GET` | `/blogs` | Lists blogs, with the newest first. |
| `GET` | `/blogs/create` | Renders the new-blog form. |
| `POST` | `/blogs` | Creates a blog from the form fields `title`, `snippet`, and `body`. |
| `GET` | `/blogs/:id` | Renders a blog's detail page. |
| `DELETE` | `/blogs/:id` | Deletes a blog and returns a JSON redirect target. |
| `GET` | `/add-blog` | Inserts and returns a hard-coded sample blog; each request creates another document. |
| `GET` | `/single-blog` | Looks up a blog using the ObjectId currently hard-coded in `app.js`. |

Use the **New Blog** link to create a blog. On a blog's detail page, use **delete** to remove it; the browser sends the `DELETE` request with `fetch`.

The static `/blogs/create` route is registered before `/blogs/:id`, so the word `create` is not treated as a blog ID.

## Project structure

```text
app.js              Express app, MongoDB connection, and routes
models/blog.js      Mongoose blog schema and model
views/              EJS pages and shared partials
.env.example        Example MongoDB environment variable
```
