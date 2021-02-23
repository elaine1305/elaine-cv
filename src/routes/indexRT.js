var pessoa = require('./pessoa.json')
var skills = require('./skills.json')
var educacao = require('./educacao.json')
var experiencia = require('./experiencia.json')
var idiomas = require('./idioma.json')


console.log(idiomas);
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { pessoa, skills, idiomas, experiencia, educacao })
    })
}