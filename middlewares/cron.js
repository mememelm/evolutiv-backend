const airController = require('../controllers/air-controller')

var cron = require('cron').CronJob
var cronJob = new cron('0 */1 * * * *', async () => {
    console.log('c air-paris')
    airController.getAirParis()
}, null, true, '')

module.exports = cronJob