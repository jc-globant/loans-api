import Sequelize from 'sequelize'
import { Client, Loan } from '../models/index.js'

const createClient = async ({ name, phone, referrerId }) => {
  try {
    const resp = await Client.create({ name, phone, referrerId })

    return resp
  } catch (error) {
    console.error('error:', error)
    throw error
  }
}

async function getPaginatedClients(page = 1, pageSize = 10) {
  const offset = (page - 1) * pageSize

  const clientsWithActiveLoanCount = await Client.findAndCountAll({
    attributes: {
      include: [
        [
          Sequelize.fn('COUNT', Sequelize.literal('CASE WHEN Loans.active = true THEN 1 ELSE NULL END')),
          'activeLoanCount',
        ],
      ],
    },
    include: [
      {
        model: Loan,
        attributes: [],
        where: { active: true },
        required: false,
      },
    ],
    group: ['Client.id'],
    offset: offset,
  })

  const formattedClients = clientsWithActiveLoanCount.rows.map(client => ({
    id: client.id,
    name: client.name,
    phone: client.phone,
    activeLoans: parseInt(client.getDataValue('activeLoanCount') || 0),
  }))

  const totalPages = Math.ceil(clientsWithActiveLoanCount.count.length / pageSize)

  return {
    totalClients: clientsWithActiveLoanCount.count.length,
    currentPage: page,
    pageSize: pageSize,
    totalPages: totalPages,
    clients: formattedClients,
  }
}

const getClient = async ({ id }) => {
  try {
    // const resp = await Client.findOne({ where: { id } })

    const clientDetail = await Client.findByPk(id, {
      include: [
        {
          model: Loan,
          attributes: ['id', 'amount', 'periodicPayments', 'active'], // Incluye solo los atributos necesarios de los préstamos
        },
        {
          model: Client,
          as: 'Referrer', // Asigna un alias al cliente que lo refirió
          attributes: ['name', 'phone'], // Incluye solo el nombre y el teléfono del cliente que lo refirió
        },
      ],
    })
    return clientDetail
    // return resp
  } catch (error) {
    console.error(error)
    throw error
  }
}

const updateClient = async ({ id, name, phone, referrerId }) => {
  try {
    const updatedFields = {}
    if (name) updatedFields.name = name
    if (phone) updatedFields.phone = phone
    if (referrerId) updatedFields.referrerId = referrerId

    const [rowsUpdated] = await Client.update(updatedFields, {
      where: { id },
    })

    if (rowsUpdated === 0) {
      throw new Error('Client not found or no changes made')
    }

    const updatedClient = await Client.findByPk(id, {
      include: [
        {
          model: Loan,
          attributes: ['id', 'amount', 'periodicPayments', 'active'],
        },
        {
          model: Client,
          as: 'Referrer',
          attributes: ['name', 'phone'],
        },
      ],
    })

    return updatedClient
  } catch (error) {
    console.error('Error updating client:', error)
    throw error
  }
}

export const service = {
  create: createClient,
  getClient,
  getClients: getPaginatedClients,
  update: updateClient,
}
