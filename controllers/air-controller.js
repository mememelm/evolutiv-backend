const fetch = require('node-fetch-npm')
const { pool } = require('../bin/config')

const getAirByPoint = async (req, res) => {
    const lat = req.query.lat
    const lon = req.query.lon
    let queryParameters = {
        lat: lat,
        lon: lon,
        key: process.env.IQAIR_KEY
    }
    if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
        return res.status(203).send('Vérifier les paramètres lat et lon !')
    } else {
        const url = new URL(process.env.IQAIR_ENDPOINT)
        url.search = new URLSearchParams(queryParameters).toString()
        const resultFetch = await fetch(url).catch(err => res.send(err))
        const result = await resultFetch.json()
        return res.status(200).json({
            result: { pollution: result.data.current.pollution }
        })
    }
}

const getAirParis = async () => {
    const coordinates = { lat: 48.856613, lon: 2.352222 }
    const url = process.env.IQAIR_ENDPOINT + '?key=' + process.env.IQAIR_KEY + '&lat=' + coordinates.lat + '&lon=' + coordinates.lon
    const resultFetch = await fetch(url).catch(err => console.warn(err))
    const result = await resultFetch.json()
    const pollution = result.data.current.pollution
    return addAirParis(pollution)
}

const addAirParis = (pollution) => {
    pool.getConnection((err, connection) => {
        if (err) return err
        const dataInsert = {
            'time_set': pollution.ts,
            'aqius': pollution.aqius,
            'mainus': pollution.mainus,
            'aqicn': pollution.aqicn,
            'maincn': pollution.maincn,
            'createdAt': new Date(),
            'updatedAt': new Date()
        }
        connection.query('INSERT INTO paris SET ?', dataInsert, (error, result) => {
            if (error) throw error
            else console.warn('air paris insert into database')
        })
    })
}

const getHeaviestPollution = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) return err
        const myQuery = 'SELECT createdAt as DATETIME_PARIS FROM paris WHERE aqicn = (SELECT MAX(aqicn) FROM paris)'
        connection.query(myQuery, (error, result) => {
            if (error) throw error
            res.status(200).send(result)
        })
    })
}

module.exports = {
    getAirByPoint,
    getAirParis,
    getHeaviestPollution
}