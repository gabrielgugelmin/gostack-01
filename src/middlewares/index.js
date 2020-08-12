const { validateGithubURL } = require("../validations");

module.exports = {
  validatePostData: (request, response, next) => {
    const { title, url, techs } = request.body;

    if (!validateGithubURL(url))
      return response
        .status(400)
        .json({ error: "Invalid URL. e.g.: 'http://github.com/someting'" });

    if (!Array.isArray(techs))
      return response.status(400).json({ error: "Techs is not an Array" });

    return next();
  },
};
