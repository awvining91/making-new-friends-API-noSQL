const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/making-new-friends-API-noSQL', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true

});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`You are now connected at localhost:${PORT}`));

