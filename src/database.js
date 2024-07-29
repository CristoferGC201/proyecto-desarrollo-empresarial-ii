const mongoose = require('mongoose');

const MONGOOB_URI = 'mongodb://localhost/usuarios'

mongoose.connect(MONGOOB_URI, {
    useUnifidTopology: true,
    useNewUrlParser: true
})

.then(db => console.log('Database is connected'))
.catch(err => console.log(err));