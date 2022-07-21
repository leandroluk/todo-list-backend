import { NotFoundError } from '$/app/errors'
import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'joi'

const errors = {
  [ValidationError.name]: 400,
  [NotFoundError.name]: 404
}

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err
  const status = errors[name]
  if (!status) return res.sendStatus(500)
  res.status(status).json({ message })
}
