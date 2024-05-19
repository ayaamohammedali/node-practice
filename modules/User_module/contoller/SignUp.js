import { pool } from '../../../db_config.js'


//================== Sign Up ==================//
export const signUp = (req, res) => {
  try {
    const { fisrt_name, last_name, email, password, age } = req.body
    pool.execute(
      `select email from users where email = '${email}' `,
      (err, result) => {
        if (err) {
          res.json({ message: 'Query error' })
        } else {
          if (result.length) {
            res.json({ message: 'user already exist' })
          } else {
            pool.execute(
              `INSERT INTO users(First_Name, Last_Name, email, password, age)
                 VALUES ('${fisrt_name}', '${last_name}' , '${email}' , '${password}' ,${age} )`,
              (err, result) => {
                if (err) {
                  res.json({ message: 'Query error' })
                } else {
                  if (result.affectedRows) {
                    res.json({ message: 'Done' })
                  } else {
                    res.json({ message: 'fail to sign up ' })
                  }
                }
              }
            )
          }
        }
      }
    )
  } catch (error) {
    res.json({ message: 'Catch error' })
  }
}
