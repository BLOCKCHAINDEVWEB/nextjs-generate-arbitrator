import { db } from '../../../lib/db/conf'
import { setArbitrators } from '../../../lib/db/queries'

export default async function handler(req, res) {
  const { method, body } = req

  if (method !== 'POST')
    return res.status(400).json({ message: "Method are not supported" })

  if (method === "POST") {
    if (!body) {
      res.status(404).end('Error empty body')

      return null
    }

    try {
      console.log(body)
      const receipt = await setArbitrators(body)

      return res.status(200).json({ status: 'success', res: receipt.rows[0] })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }
}