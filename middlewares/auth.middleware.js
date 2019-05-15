const isAuthorized = (req, res, next) => {
  if (
    req &&
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization === 'admin'
  ) {
    next();
  } else {
    res.status(401).send()
  }
};

module.exports = {
  isAuthorized
}