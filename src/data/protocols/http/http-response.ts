export enum HttpStatusCode {
  unauthorized = 401,
  badRequest = 400,
  noContent = 204,
  notFound = 404,
  forbidden = 403,
  serverError = 500,
  ok = 200
}
export type HttpResponse<T> = {
  statusCode: number
  body?: T
}
