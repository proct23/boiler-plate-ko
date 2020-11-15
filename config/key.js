if(process.env.NODE_ENV ==='production') {
    module.exports = require('./prod')
    console.log("dsfsdfdsfsd")
} else {
    module.exports = require('./dev')
    console.log("dsfsdfdsfsd 씨발")
}