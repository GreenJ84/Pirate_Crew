const mongoose = require('mongoose');
const db = 'pirate_crew_db';

mongoose.connect(`mongodb://localhost/${db}`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`All series ${db} actionas have been completed`))
    .catch(err => console.log(`There was a problem estblishing port ${db}`, err));