require('./lib/logger')

try {
    require ('./src/server')
} catch (error) {
    ll(error.stack)
}