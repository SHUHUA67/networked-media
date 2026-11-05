require('dotenv').config();
// set up the mastodon library
const m = require('masto');
//setting up the masto variable to connect to
// 1) the url: our mstodon server
// 2) token: our password to our account
const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});
// async function to make a request to our mastodon server
async function makeStatus(text) {
    //await ensures it creates sstatus before we do anything else
	const status = await masto.v1.statuses.create({
		status: text,
		visibility: 'private',
	});
}

setInterval(() => {
	let emoji = ['😭', '🤩', '💖'];

	let rand = Math.floor(Math.random() * emoji.length);
// select emoji from array using random index
	let post = emoji[rand];
// make our status w emoji
	makeStatus(post);
}, 5000); // interval happsn every 5 secs