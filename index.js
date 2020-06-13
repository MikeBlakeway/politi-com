// Politi-com: entry file

/**
 * Express server setup
 */
const express = require('express')
const expressApp = express()
const port = process.env.PORT || 9000

expressApp.listen(port, () => {
    console.log(`express server listening on port: ${port}`)
})

/**
 * Routing
 */

expressApp.get('/status', (request, response) => {
    response
        .status(200)
        .json({title: "Welcome to Politi.com"})
})
