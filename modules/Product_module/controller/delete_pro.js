import { pool } from '../../../db_config.js'

// =================== Delete Product ==================//
export const delete_product = (req, res) => {
  try {
    const { id } = req.params // product id
    const { userId } = req.body // user id (the product's owner id )
    pool.execute(
      `delete from products where p_id = ${id} and userId=${userId}`,
      (err, result) => {
        if (err) {
          res.json({ message: 'Query error' })
        } else {
          if (result.affectedRows) {
            res.json({ message: 'Deleted Done' })
          } else {
            res.json({ message: 'invalid user id or product id' })
          }
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
