// all of the libraries that we. are importing
// nnpm install express nunjucks
const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");
 // app iex express server that uses express library variable
const app = express();

app.use(express.static("public"));
// expressurlencoded alows us to prcess post request
//alows us to use requst.body
// if we have app.post we need this line
app.use(express.urlencoded({ extended: true }));
//more settings to setup our njk files

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk"); //store date on our server using an array variable
let allData = []


app.get('/',(request,response)=>{
  response.render('home.njk');

});
//NEW app.get
app.get('/form',(request, response)=>{
  response.render('form.njk)')
})

app.get('view-all', (request, response)=>{
  response.render('view-all.njk')
})

app.post('/send-message', (request,response)=>{
  //this action will handle storing the data from the form on the server in the data array
  //redirect to where we want the data to be displayed
  console.log(request,body)
  allData.push(request.body
    response.redirect('/view-al.njkl'{messagesArrayFromServer: allData})
  )
})

//starts the server to run, listen is listening for request, like ad event listener
app.listen(8080, ()=>{
    //pwd > class 14 demo
    console.log('http://localhost:8080');
});