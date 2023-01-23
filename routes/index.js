var bodyParser = require('body-parser');
const cors = require("cors")
const portfolio = require("./PortRoute")
const user = require("./UserRoute")

module.exports = app => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(cors({
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        origin: '*'
    }));

    app.use("/users", user)
    app.use("/portfolio", portfolio)
    
}