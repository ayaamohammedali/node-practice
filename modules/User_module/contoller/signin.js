import { pool } from '../../../db_config.js'

//================ Sign In ================//
export const signIn = (req, res) => {
  try {
    const { email, password } = req.body
    pool.execute(
      `select email , password from users where email = '${email}' AND password = '${password}'`,
      (err, result) => {
        if (err) {
          res.json({ message: 'Query error' })
        } else {
          if (result.length) {
            res.json({ message: 'Signed in success ' })
          } else {
            res.json({ message: 'email or password is invalid ' })
          }
        }
      }
    )
  } catch (error) {
    res.json({ message: 'Catch error' })
  }
}
