# Tutorial 11: Express Router and MVC

A server-rendered blog application demonstrating how to organize an Express app with a dedicated router, controller, and Mongoose model.

## What this tutorial covers

- Separating HTTP route definitions from request-handling logic.
- Using an Express `Router` to group blog endpoints.
- Following a simple MVC structure: routes dispatch to controller actions, controllers use the model and render views.
- Connecting to MongoDB with Mongoose and defining a timestamped blog schema.
- Rendering EJS pages, creating blogs from an HTML form, and deleting a blog with the browser Fetch API.
- Logging requests with Morgan.

## Requirements

- Node.js and npm
- A MongoDB database, either local or MongoDB Atlas

## Setup

Run these commands from this directory:

```bash
npm install
```

Create a `.env` file in this directory and set `MONGODB_URI` to your MongoDB connection string. See `.env.example` for the expected format:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/
```

Replace the placeholders with your database credentials and cluster host. Keep your `.env` file private; it is excluded from Git.

Start the app:

```bash
node app.js
```

For automatic restarts during development:

```bash
nodemon app.js
```

The app listens on [http://localhost:3000](http://localhost:3000) after connecting to MongoDB.

## Routes

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Redirects to `/blogs`. |
| `GET` | `/about` | Renders the About page. |
| `GET` | `/blogs` | Lists blogs, newest first. |
| `GET` | `/blogs/create` | Renders the new-blog form. |
| `POST` | `/blogs` | Creates a blog using the submitted `title`, `snippet`, and `body`, then redirects to `/`. |
| `GET` | `/blogs/:id` | Finds a blog by its MongoDB ObjectId and renders its detail page. |
| `DELETE` | `/blogs/:id` | Deletes a blog and returns `{ "redirect": "/blogs" }` as JSON. |

Use the **New Blog** link to open the form. The detail page's **delete** link sends a `DELETE` request with `fetch` and redirects to the blog list after success. The `/blogs/create` route is registered before `/blogs/:id`, ensuring `create` is treated as a static route rather than a blog ID.

## MVC project structure

```text
app.js                  App configuration, middleware, database connection,
                        root/about routes, and router mounting
routes/blogRoutes.js    Blog URL and HTTP-method definitions
controllers/            Blog request handlers and response logic
models/blog.js           Mongoose blog schema and model
views/                   EJS pages and shared partials
.env.example             Example MongoDB environment variable
```

The blog router is mounted at `/`. It delegates each blog route to a controller action. The controller reads or writes blog documents through the Mongoose model and renders the appropriate EJS view or sends a JSON response.
