import { db } from './conf'

export const getArbitrators = async () => {
  try {
    const { rows: resFetchArbitrators } = await db.query('SELECT * FROM arbitrators_demo')

    return resFetchArbitrators || []
  } catch (error) {
    console.error(error)
  }
}

export const setArbitrators = async ({
  contract_address,
  arbitrator_network,
  arbitrator_price,
  ruling_time,
  arbitrator_address,
  arbitrator_description
}) => {
  try {
    const { rows: resUpdateArbitrators } = await db.query(
      `
        INSERT INTO arbitrators_demo(contract_address, arbitrator_network, arbitrator_price, ruling_time, arbitrator_address, arbitrator_description) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;
      `, [
        contract_address,
        arbitrator_network,
        arbitrator_price,
        ruling_time,
        arbitrator_address,
        arbitrator_description,
      ]
    )

    return resUpdateArbitrators || []
  } catch (error) {
    console.error(error)
  }
}