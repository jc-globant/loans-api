import { Client } from '../models/index.js';

export const createClient = async ({ name, phone }) => {
  try {
    const resp = await Client.create({ name, phone });
    console.log(resp);

    return resp;
  } catch (error) {
    console.error('Error al obtener los detalles del préstamo:', error);
    throw error;
  }
};
