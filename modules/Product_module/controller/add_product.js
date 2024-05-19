import { pool } from '../../../db_config.js'

//================= Add Product ==============//
export const add_product = (req, res) => {
  try {
    const { title, desc, price, userId } = req.body
    pool.execute(
      `INSERT INTO products(title, description, price, userId) 
        VALUES ('${title}','${desc}',${price},${userId})`,
      (err, result) => {
        if (err) {
          res.json({ message: 'Query error' })
        } else {
          if (result.affectedRows) {
            res.json({ message: 'Added done', result })
          } else {
            res.json({ message: 'Fail to add' })
          }
        }
      }
    )
  } catch (error) {
    res.json({ message: 'Catch error' })
  }
}
