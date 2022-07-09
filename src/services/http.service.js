module.exports.formatResponse = (error, data) => {
  return {
    error,
    data,
  };
};

module.exports.formatSuccessResponse = (res, data) => {
  return res.status(200).json(this.formatResponse(false, data));
};

module.exports.formatErrorResponse = (res, error) => {
  return res.status(400).json(this.formatResponse(true, error));
};
