const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");
const app = express();

const {
  validateCreateRepository,
  validateRepository,
} = require("./middlewares");

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", validateCreateRepository, (request, response) => {
  const { title, url, techs } = request.body;

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

app.put(
  "/repositories/:id",
  validateRepository(repositories),
  (request, response) => {
    const { id } = request.params;
    const { title, url, techs } = request.body;

    const repositoryIndex = repositories.findIndex(
      (repository) => repository.id === id
    );
    const repository = {
      ...repositories[repositoryIndex],
      title,
      url,
      techs,
    };
    repositories[repositoryIndex] = repository;

    return response.json(repository);
  }
);

app.delete(
  "/repositories/:id",
  validateRepository(repositories),
  (request, response) => {
    const { id } = request.params;
    const repositoryIndex = repositories.findIndex(
      (repository) => repository.id === id
    );

    repositories.splice(repositoryIndex, 1);

    return response.status(204).send();
  }
);

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
