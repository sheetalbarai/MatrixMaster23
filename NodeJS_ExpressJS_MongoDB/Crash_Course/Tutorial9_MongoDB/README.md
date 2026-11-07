
# Tutorial 9: MongoDB and Mongoose

A small Express and EJS blog app demonstrating how to connect to MongoDB with Mongoose, define a schema, save and query documents, and render database results in EJS views.

## What you'll learn

- Connect an Express app to MongoDB Atlas using Mongoose.
- Define a Mongoose schema and model, including required fields and timestamps.
- Create and save a document, find documents, and sort results by creation date.
- Render EJS templates and share common page sections with partials.
- Route requests to pages and display a not-found view.

## Prerequisites

- Node.js and npm
- A MongoDB Atlas cluster with valid connection settings

The database connection is configured in `app.js`. Make sure it is valid and your Atlas cluster allows your connection before starting the server.

## Run locally

From this folder:

```bash
npm install
nodemon app.js

open localhost:3000/ in your browser