'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('World, Hello World')
    })
}