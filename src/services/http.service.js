export function formatResponse(error, data) {
  return {
    error,
    data,
  };
}

export function formatSuccessResponse(res, data) {
  return res.status(200).json(formatResponse(false, data));
}

export function formatErrorResponse(res, error) {
  return res.status(400).json(formatResponse(true, error));
}
