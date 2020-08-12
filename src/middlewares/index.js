const { validateGithubURL } = require("../validations");

module.exports = {
  validateCreateRepository: (request, response, next) => {
    const { title, url, techs } = request.body;

    if (!validateGithubURL(url))
      return response
        .status(400)
        .json({ error: "Invalid URL. e.g.: 'http://github.com/someting'" });

    if (!Array.isArray(techs))
      return response.status(400).json({ error: "Techs is not an Array" });

    return next();
  },
  validateRepository: function (repositories) {
    return (request, response, next) => {
      const { id } = request.params;
      const repositoryIndex = repositories.findIndex(
        (repository) => repository.id === id
      );

      if (repositoryIndex < 0)
        return response.status(400).json({ error: "Repository not found" });

      return next();
    };
  },
};
