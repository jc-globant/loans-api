import { Client } from '../models/index.js'

const createClient = async ({ name, phone, reference }) => {
  try {
    const resp = await Client.create({ name, phone, reference })

    return resp
  } catch (error) {
    console.error('error:', error)
    throw error
  }
}

async function getPaginatedClients(page = 1, pageSize = 10) {
  const offset = (page - 1) * pageSize
  const limit = pageSize

  const { count, rows } = await Client.findAndCountAll({
    offset,
    limit,
  })

  const totalPages = Math.ceil(count / pageSize)

  return {
    totalClients: count,
    currentPage: page,
    pageSize: pageSize,
    totalPages: totalPages,
    clients: rows,
  }
}

const getClient = async ({ id }) => {
  try {
    const resp = await Client.findOne({ where: { id } })

    return resp
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const service = {
  create: createClient,
  getClient,
  getClients: getPaginatedClients,
}
