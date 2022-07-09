import { formatErrorResponse } from '../services/http.service';

export default (request, response, next) => {
  const { id } = request.params;
  if (!id) {
    return formatErrorResponse(response, { message: 'Id is required' });
  }
  next();
};
