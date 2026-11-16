require('dotenv').config({
    path: __dirname + '/.env',
    override: true
});

async function postDinner() {
    try {
        const m = await import('masto');

        const masto = m.createRestAPIClient({
            url: 'https://networked-media.itp.io/',
            accessToken: process.env.TOKEN
        });

        //jennifers food part
        const response = await fetch(
            'http://68.183.19.37:6001/get-data'
        );
        if (!response.ok) {
            throw new Error('Could not load food API.');
        }
        const foods = await response.json();

        if (!Array.isArray(foods) || foods.length === 0) {
            console.log('No foods available yet.');
            return;
        }
        // random food part
        const random = Math.floor(Math.random() * foods.length);
        const food = foods[random].message;

        if (typeof food !== 'string' || !food.trim()) {
            throw new Error('Selected entry has no food name.');
        }

        const text =
            'Yo guys I really want to have ' +
            food +
            ' for dinner 🍽️';

        await masto.v1.statuses.create({
            status: text,
            visibility: 'private'
        });

        console.log(new Date().toISOString(), 'Posted:', text);
    } catch (error) {
        console.error(new Date().toISOString(), 'Bot error:', error.message);
    }
}
//DINNER POST
postDinner();

//hiourly
setInterval(() => {
    postDinner();
}, 60 * 60 * 1000);