require('dotenv').config();
const m = require('masto');

const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io/',
    accessToken: process.env.TOKEN
});

async function postDinner() {
    try {
        //jennifers data set
        const response = await fetch(
            'http://68.183.19.37:6001/get-data'
        );

        if (!response.ok) {
            throw new Error('Could not load food API.');
        }

        const foods = await response.json();

        if (foods.length === 0) {
            console.log('No foods available yet.');
            return;
        }

        //pick a food
        const random = Math.floor(Math.random() * foods.length);
        const food = foods[random].message;

        //mastodon post
        const text =
            'Yo guys I really want to have ' + food + ' for dinner 🍽️';

        await masto.v1.statuses.create({
            status: text,
            visibility: 'private'
        });

        console.log('Posted: ' + text);
    } catch (error) {
        console.error('Bot error:', error.message);
    }
}

//post per 6 hr
setInterval(() => {
    postDinner();
}, 6 * 60 * 60 * 1000);