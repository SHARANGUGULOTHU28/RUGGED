const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path')

const app = express();

const wishListRoute=require('./routes/wishlistRoutes')
const sellerDashboard=require('./routes/sellerDashboardRoutes')
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static())

app.get('/',(req,res)=>{
    res.render('productSearchPage.ejs');
});

app.use(wishListRoute)
app.use(sellerDashboard)

app.listen(3000, function(){
    console.log("Listening at port 3000!");
});
