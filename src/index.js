const express = require("express");
const path = require("path");

const app = express();

// Set view engine to use EJS template
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route for SSR
app.get("/", async (req, res) => {
  const pikachuRequest = await fetch(
    "https://pokeapi.co/api/v2/pokemon/pikachu"
  );
  const pikachu = await pikachuRequest.json();

  res.render("index", {
    message: `Hello, Server-Side Rendering! You are seeing ${pikachu.name}`,
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
