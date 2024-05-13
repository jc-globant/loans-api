import jwt from 'jsonwebtoken'
import { config } from '../config'

export const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name }
    jwt.sign(
      payload,
      config.SECRET_JWT_SEED,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.error(err)
          reject('Error on token generation')
        }
        resolve(token)
      },
    )
  })
}
