const express = require('express');
const app = express();
const routes = require('./router/routes')
const cors = require('cors');
const sequelize = require('./app/utilsFunction/dbFunctions');
const Login = require('./app/model/userLoginmodel');
const Trend = require('./app/model/trendingmodel');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

sequelize.authenticate().then(()=>{
    console.log('SQL db autheticated successfully');
  }).catch(err=>console.log('authentication failed ', err ));

  (async () => {
    try {
      await sequelize.sync({ force: false }); 
      console.log('Database synchronized');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
  })();  

  Login.hasOne(Trend , {
    foreignKey: 'loginId', 
    allowNull: false, 
  });
  Trend.belongsTo(Login , {
    foreignKey: 'loginId',
    allowNull: false, 
  });


app.use(routes);

app.listen(8080 , ()=>{
    console.log('server running on port 8080');
})