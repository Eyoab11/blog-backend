# Express.js Blog Backend

An Express.js backend with MongoDB Atlas for managing blogs, newsletter subscriptions, and contact form submissions.

## Features

- **Blog CRUD**: Create, Read, Update, Delete blog posts
- **Newsletter Subscription**: Store subscriber emails
- **Contact Us**: Store contact form messages
- **RESTful API** with proper error handling
- **MongoDB Atlas** integration

## Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd express-blog-backend
```
2. Install dependecies
```bash
npm install
```
3. Create a .env file in the root directory and add:
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blogDB?retryWrites=true&w=majority
PORT=5000
```
Replace <username> and <password> with your MongoDB Atlas credentials.

4. Start the server
```bash
npm start
```
For development with auto-restart:
```bash
npm run dev
```
## API Endpoints

### Blogs

| Method | Endpoint           | Description                 | Request Body Example                     |
|--------|--------------------|-----------------------------|------------------------------------------|
| GET    | `/api/blogs`       | List all blogs              | -                                        |
| GET    | `/api/blogs/:id`   | Get a single blog           | -                                        |
| POST   | `/api/blogs`       | Create a new blog           | ```json<br>{<br>  "title": "Blog Title",<br>  "content": "Blog Content",<br>  "author": "Author Name"<br>}<br>``` |
| PUT    | `/api/blogs/:id`   | Update a blog               | Same as POST                             |
| DELETE | `/api/blogs/:id`   | Delete a blog               | -                                        |

### Newsletter

| Method | Endpoint            | Description                 | Request Body Example                     |
|--------|---------------------|-----------------------------|------------------------------------------|
| POST   | `/api/newsletter`   | Subscribe to newsletter     | ```json<br>{<br>  "email": "user@example.com"<br>}<br>``` |

### Contact

| Method | Endpoint         | Description                 | Request Body Example                     |
|--------|------------------|-----------------------------|------------------------------------------|
| POST   | `/api/contact`   | Submit contact form         | ```json<br>{<br>  "name": "User Name",<br>  "email": "user@example.com",<br>  "message": "Message text"<br>}<br>``` |

## Project Structure

```text
src/
├── config/
│   └── db.js
├── controllers/
│   ├── blogController.js
│   ├── newsletterController.js
│   └── contactController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   ├── Blog.js
│   ├── Newsletter.js
│   └── Contact.js
├── routes/
│   ├── blogRoutes.js
│   ├── newsletterRoutes.js
│   └── contactRoutes.js
└── server.js

## Dependencies

### Production Dependencies
- **express** ^4.18.2 - Web framework
- **mongoose** ^8.0.3 - MongoDB ODM
- **cors** ^2.8.5 - Cross-Origin Resource Sharing middleware
- **dotenv** ^16.3.1 - Environment variables loader

### Development Dependencies
- **nodemon** ^3.0.2 - Development server with auto-restart