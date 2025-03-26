const usersRepository = require('./users-repository');
const bcrypt = require('bcrypt');

async function getUserByEmail(email) {
  return usersRepository.getUserByEmail(email);
}

async function getUsers() {
  return usersRepository.getUsers();
}

async function getUser(id) {
  return usersRepository.getUser(id);
}

async function emailExists(email) {
  const user = await usersRepository.getUserByEmail(email);
  return !!user; // Return true if user exists, false otherwise
}

async function createUser(email, password, fullName) {
  return usersRepository.createUser(email, password, fullName);
}

async function updateUser(id, email, fullName) {
  return usersRepository.updateUser(id, email, fullName);
}

async function deleteUser(id) {
  return usersRepository.deleteUser(id);
}



module.exports = {
  getUserByEmail,
  getUsers,
  getUser,
  emailExists,
  createUser,
  updateUser,
  deleteUser,
};
