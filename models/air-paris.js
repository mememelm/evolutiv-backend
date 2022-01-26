const airParis = (sq, type) => {
    return sq.define('paris', {
        time_set: type.DATE,
        aqius: type.INTEGER,
        mainus: type.STRING,
        aqicn: type.INTEGER,
        maincn: type.STRING
    }, { freezeTableName: true })
}

module.exports = { airParis }