const path = require('path')
const express = require('express')


const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    app.use('/static', express.static(path.join('./src', 'public')))

}

module.exports = configViewEngine