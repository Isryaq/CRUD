const mongoose = require('mongoose');

const mongoDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/praktikumkk4c');
  console.log('Database Connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/praktikumkk4c');` if your database has auth enabled
}

module.exports = mongoDB