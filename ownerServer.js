const express = require("express");
const app = express();
const port = 4000;
const exhbs = require("express-handlebars");
const methodOverride = require('method-override');

// import cookie-parse
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// Chuyển method
app.use(methodOverride('_method'));

// import dotenv - bien moi truong
require('dotenv').config();

// import authenToken 
const { checkUserIsLoginAdmin, checkAuthAdmin } = require('./middlewares/authorizacation.Mw')

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
