const connection = require('../config/database')

let users = []
const getHomePAGE = (req, res) => {
     
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results
            console.log(">>> results= ", results);
            // console.log(">>> check users", users);
            res.send(JSON.stringify(users))       }
    )


}
const getTestPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePAGE,
    getTestPage
}