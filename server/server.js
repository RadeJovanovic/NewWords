var express = require('express') //refer to powerpoint
var app = express() //Refer to powerpoint
var bodyParser = require('body-parser') //checks for data that comes through with any request
var Nedb = require('nedb')
var database = new Nedb({})//creating a new database that we will be putting all or our data into

app.use(express.static('../client')) //app.use() sits on the server and wait for requests from the internet
//When those requests come in, they go through a pipeline of functions. So here, the first thing a request is going to do is that it is going to be checked as to whether it is in the root directory, which is the client folder (.. is back a folder from the server, then we go into the client folder)

app.use(bodyParser.json()) //App.use is there because every request goes through it before being served rec 2:37
app.post('/saveCurrent', function(req,res){ //if somebody posts something to "saveCurrent", it will console log whenever we send something to this address
//    req.data; //Could record what we are getting in and what we are sending out
//    res.send({})//Also, in this function, we have a whole bunch of information as well as the data
    console.log("got a request to save something") 
    //Now we will add the actual funcitonality
    var data = {word:req.body.word, //We are sending up to the server is a json packet request, and we are trying to access the word property of it
                date:Date.now()} //we are creating a json object called data, with two porperties
    var done = function(){
        console.log("I just wrote something to the database!!!")
        res.end("done") //we have finished processing the request
    }
    database.insert(data,done) //insert the data and then run the done function THIS IS MONGODB SYNTAX
});
app.listen(8080) //every computer has thousands of ports that you can turn on and off, in this case it is localhost.