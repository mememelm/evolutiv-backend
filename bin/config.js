// @ts-nocheck
const SQ = require('sequelize').Sequelize
const mysql = require('mysql2')

const sequelize = new SQ(
    process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
})

const db = {}
db.sq = sequelize

require('../models/air-paris').airParis(sequelize, SQ)

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
    dateStrings: true
});

module.exports = { db, pool }