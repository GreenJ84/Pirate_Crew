const PirateController = require('../controllers/pirate.controller');

module.exports = app => {
    
    app.get('/pets/get', PirateController.findAll);
    app.get('/pet/:id', PirateController.findOne);
    app.post('/pet/new', PirateController.createNew);
    app.put('/pet/update/:id', PirateController.update);
    app.delete('/pet/delete/:id', PirateController.delete);
    
}