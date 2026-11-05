let express = require('express')
let nedb = require('@seald-io/nedb')
let app = express ()
let database = new nedb ({filename: 'mydatabase.db', autoload: true});

//setup server features
app.use(express.static('public'))
app.use(express.urlencoded ({ extended:true}))

app.get ('/', (request, response) => {
    response.send('server is working')
})

app.post ('/add-data', (request, response)=>{
    console.log(request.body)
    let dataToBeAdded = {
        message: request.body.new-message,
        timestamp: Date.now()  
    }
    database.insert(dataToBeAdded, (error, newData)=> {
            if(error){
                console.log(error)
                return;
            }else {
                console.log(newData)
                response.send('data added successfully')
            }
        })

})

app.get('/get-data',(request,response)=>{
    let query = {}
    database.find(query, (error, retrievedData)=>{
        console.log(retrievedData)
        response.json(retrievedData)
    }
})

app.listen(6001, ()=>{
    console.log("server is running on http://localhost:6001")
})