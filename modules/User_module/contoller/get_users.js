import { pool } from '../../../db_config.js'

//================== Get All Users within a specific Range of age ================//

export const get_users_age = (req, res) => {
  try {
    const { age1, age2 } = req.body
    pool.execute(
      `select * from users where age between ${age1} and ${age2}`,
      (err, result, feilds) => {
        if (err) {
          res.json({ message: 'Query error' })
        } else {
          if (result.length) {
            res.json({ message: 'Done', result })
          } else {
            res.json({ message: 'No users exists' })
          }
        }
      }
    )
  } catch (error) {
    res.json({ message: 'Catch error' })
  }
}

//================== Get All Users ================//

export const get_users = (req, res) => {
  try {
    pool.execute(`select * from users`, (err, result, feilds) => {
      if (err) {
        res.json({ message: 'Query error' })
      } else {
        if (result.length) {
          res.json({ message: 'Done', result })
        } else {
          res.json({ message: 'no users' })
        }
      }
    })
  } catch (error) {
    res.json({ message: 'Catch error' })
  }
}
