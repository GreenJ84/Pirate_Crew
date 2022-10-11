const PirateController = require('../controllers/pirate.controller');

module.exports = app => {
    
    app.get('/pirates/get', PirateController.findAll);
    app.get('/pirate/:id', PirateController.findOne);
    app.post('/pirate/new', PirateController.createNew);
    app.put('/pirate/update/:id', PirateController.update);
    app.delete('/pirate/delete/:id', PirateController.delete);
    
}