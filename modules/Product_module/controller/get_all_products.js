import { pool } from '../../../db_config.js'

//================ Get all products with user inforamtion ===============//
export const get_all_product = (req, res) => {
  try {
    pool.execute(
      `select email , age , title , price from users inner join products 
      on users.id = products.userId `,
      (err, result) => {
        if (err) {
          res.json({ message: ' Query error' })
        } else {
          res.json({ message: 'Done', result })
        }
      }
    )
  } catch (error) {
    res.json({ message: 'Catch error' })
  }
}

// JOIN
// ==> inner JOIN
// ==> LEFT JOIN
// ==> RIGHT JOIN
