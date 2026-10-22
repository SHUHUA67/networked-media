// express library is our server
//naming conventions name the variable the library name
const express = require('express')
const app = express();
//"middleware" this is settings that our app needs to know about our server, serves out front end html that exists in the public server 
app.use(express.static('public'));
//allows us to access the body of post request
app.usse(express.urlencoded({ extended: true}));
//routes
//get /first-server, callback function
app.get('/first-server', (request, response)=>{
    //sends info to client that makes a request to /first-server
    response.send('this is my first server!')
})
//Last
//port and a callback here
app.listen(8080, ()=>{
    console.log('http;//127.0.0.1:8080')
})