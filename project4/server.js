const express = require('express');
const nedb = require('@seald-io/nedb');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
//saves drink
const db = new nedb({
    filename: 'drinks.db',
    autoload: true
});

//receive
app.post('/add-drink', (request, response) => {
    const drink = request.body.drink;
    const emoji = request.body.emoji;

    if (
        typeof drink !== 'string' ||
        typeof emoji !== 'string' ||
        !drink.trim() ||
        !emoji.trim() ||
        drink.length > 100 ||
        emoji.length > 20
    ) {
        return response.status(400).send('Enter a drink and an emoji.');
    }

    const newDrink = {
        drink: drink.trim(),
        emoji: emoji.trim()
    };

    db.insert(newDrink, (err, savedDrink) => {
        if (err) {
            console.log(err);
            return response.status(500).send('Could not save drink.');
        }

        response.redirect('/');
    });
});

//online
app.get('/api/drinks', (request, response) => {
    db.find({}, (err, drinks) => {
        if (err) {
            console.log(err);
            return response.status(500).json({
                error: 'Could not load drinks.'
            });
        }

        response.json({ drinks: drinks });
    });
});

app.listen(5006, () => {
    console.log('Open http://localhost:5006');
});