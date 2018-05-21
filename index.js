const express = require('express');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const appConfig = require('./config/app-config');
const globalErrorMiddleware = require('./middlewares/appErrorHandler')
const routeLoggerMiddleware = require('./middlewares/routeLogger')
var helmet = require('helmet')


const fs = require('fs')



const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(globalErrorMiddleware.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)

app.use(helmet())







// Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log(file)
        require(modelsPath + '/' + file)
    }
})
// end Bootstrap models


// const modelPath = require('./models/ecommerce');


// Bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including the following file");
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});
// end bootstrap route

// calling global 404 handler after route

app.use(globalErrorMiddleware.globalNotFoundHandler)


app.listen(appConfig.port, () => {
    console.log("Hello ");
    let db = mongoose.connect(appConfig.db.uri)
})


mongoose.connection.on('error', (err) => {
    console.log(`Database connection Error ${err} `);
})

mongoose.connection.on('open', (err) => {
    if (err) {
        console.log(`Database connection Error ${err} `);

    } else {
        console.log(`Database connection Open Success  `);

    }

})

