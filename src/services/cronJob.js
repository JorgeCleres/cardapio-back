const cron = require('node-cron');
const https = require('https');

var job = cron.schedule('* * * * *', () => {
    https.get('https://cardapio-ya1c.onrender.com/api', (res) => {
        if(res.statusCode == 200) {
            console.log('server restarted');
        } else {
            console.log('failer restart server');
        }
    }).on('error', (e) => {
        console.log('error ' + e);
    })
})

job.start();

module.exports = {
    job,
};