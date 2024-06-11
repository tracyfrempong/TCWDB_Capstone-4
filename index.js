import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import NodeCache from "node-cache";

const app = express();
const port = 3000;

// EJS for templating
app.set("view engine", "ejs");

// Public folder for static files
app.use(express.static("public"));

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize cache (expires entries after 1 hour)
const cache = new NodeCache({ stdTTL: 3600 });


// Define the GET route to render the form
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/get-book", async (req, res) => {
  const title = req.query.title;

  // Check if data is in cache
  const cachedData = cache.get(title);
  if (cachedData) {
    return res.render("index.ejs", { book: cachedData });
  }

  try {
    const result = await axios.get("https://openlibrary.org/search.json", {
      params: {
        title: title,
        limit: 1,
      },
    });

    const book = result.data.docs[0];
    cache.set(title, book); // Cache the result

    res.render("index.ejs", { book });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

// Run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
