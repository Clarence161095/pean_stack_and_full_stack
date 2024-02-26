/* eslint-disable no-unused-vars */
export function notFoundMiddleware(req, res, next) {
  res.status(404).json({ message: 'Route not found 404' });
}

export function errorHandlerMiddleware(error, req, res, next) {
  res.status(500).json({ message: error.message });
}

export const errorMiddleware = [
  notFoundMiddleware,
  errorHandlerMiddleware
]
