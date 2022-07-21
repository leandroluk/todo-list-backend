require('dotenv').config()

const { env } = process

const config = {
  username: env.DB_USER || 'root',
  password: env.DB_PASS || 'root',
  database: env.DB_NAME || 'todos',
  host: env.DB_HOST || 'localhost',
  port: Number(env.DB_PORT || 3306),
  dialect: env.DB_DIALECT || 'mysql',
  dialectOptions: env.DB_OPTIONS ? JSON.parse(env.DB_OPTIONS) : {},
}

module.exports = {
  development: config,
  test: config,
  production: config
}
