module.exports = {
  validateGithubURL: (url) => {
    return url.match(/^(http|https):\/\/[.github.com].*/);
  },
};
