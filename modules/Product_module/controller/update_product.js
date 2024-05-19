import { pool } from '../../../db_config.js'

// =================== Update Product ==================//

export const update_product = (req, res) => {
  try {
    const { id } = req.params // id of the product
    const { title, price, userId } = req.body // the is of the user who own the product
    pool.execute(
      `update products set title='${title}' , price = ${price} 
      where p_id = ${id} and userId = ${userId}`,
      (err, result) => {
        if (err) {
          res.json({ message: 'Query error' })
        } else {
          if (result.affectedRows) {
            res.json({ message: 'Updated Done' })
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

// JOIN:
// ==> INNER JOIN
// ==> LEFT JOIN
// ==> RIGHT JOIN
// ==> OUTER JOIN 
