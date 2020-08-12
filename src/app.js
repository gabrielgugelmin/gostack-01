const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");
const app = express();

const { validateGithubURL } = require("./validations/index");

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  if (!validateGithubURL(url))
    return response
      .status(400)
      .json({ error: "Invalid URL. e.g.: 'http://github.com/someting'" });

  if (!Array.isArray(techs))
    return response.status(400).json({ error: "Techs is not an Array" });

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);
  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
