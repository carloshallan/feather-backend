module.exports = function(application){
    application.get('/', (req, res) => {
        return res.json({hello: 'World'})
    })
}