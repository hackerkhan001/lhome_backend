const express = require('express');
const app = express();
const routes = require('./router/routes')
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(routes);

app.listen(8080 , ()=>{
    console.log('server running on port 7080');
})