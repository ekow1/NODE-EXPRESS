const  express = require('express')

const path = require('path')
const bodyParser = require('body-parser')

const server = express()

// using this manual method means ,you have to explicitly write handler for the other files

  const loginHandler = (req , res) => {
   
    console.log(req.body)
   res.send('Done')
  }



 
server.use(express.static(path.join(__dirname , 'public')))
server.use(bodyParser.urlencoded({extended : false}))

server.post("/login" , loginHandler)


server.listen(3000 , () => console.log('server is listening on 3000'))