import { response, request } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config'

export const validateJWT = (req = request, res = response, next) => {
  const token = req.headers('x-token')

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Token not found',
    })
  }

  try {
    jwt.verify(token, config.SECRET_JWT_SEED)
  } catch (error) {
    console.error(error)
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token',
    })
  } finally {
    next()
  }
}
