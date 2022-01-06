import { db } from '../../../utils/database'

export default async function handler(req, res) {
  const { method, body } = req

  if (method === "GET") {
    try {
      const query = 'SELECT * FROM arbitrators'
      const receipt = await db.query(query)

      return res.status(200).json({ status: 'success', arbitrators: receipt.rows })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  } else if (method === "POST") {
    if (!body) {
      res.status(404).end('Error empty body')

      return
    }

    try {
      const { contract_address, arbitrator_network, arbitrator_price, ruling_time, arbitrator_address, arbitrator_description } = body

      const query = 'INSERT INTO arbitrators(contract_address, arbitrator_network, arbitrator_price, ruling_time, arbitrator_address, arbitrator_description) VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
      const values = [contract_address, arbitrator_network, arbitrator_price, ruling_time, arbitrator_address, arbitrator_description]

      const receipt = await db.query(query, values)

      return res.status(200).json({ status: 'success', res: receipt.rows[0] })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
    } else {
    return res.status(400).json({ message: "Method are not supported" });
  }
}