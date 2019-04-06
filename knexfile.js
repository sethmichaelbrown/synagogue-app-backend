module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/szApp'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/szApp'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}