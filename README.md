# TCWDB_Capstone-4
# Book Search Application

This project allows users to search for book information using the Open Library API.

## Features

- Search for books by title
- Display book details including title, author, publication year, and cover image

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

## Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/yourusername/book-search-app.git
    ```

2. Navigate to the project directory:

    ```sh
    cd TCWDB_Capstone-4
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Application

1. Start the server using nodemon for automatic restarts on code changes:

    ```sh
    nodemon index.js
    ```

    Alternatively, you can start the server using Node.js directly:

    ```sh
    node index.js
    ```

2. Open your web browser and go to:

    ```
    http://localhost:3000
    ```

## Project Structure

- `index.js`: Main server file that sets up the Express server and handles routes.
- `views/index.ejs`: EJS template for rendering the search form and displaying book details.
- `public/`: Directory for static files (CSS, images, etc.).
- `package.json`: Project configuration file containing scripts and dependencies.

## API Reference

This project uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search) to fetch book data.

## Usage

1. Enter a book title in the search form and click "GET BOOK".
2. The application will display the book details including title, author, publication year, and cover image if available.

## Acknowledgments

- Open Library API for providing access to book data.
- Node.js and Express.js for the server-side framework.
