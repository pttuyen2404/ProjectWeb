const express = require("express");
const app = express();
const port = 3000;
const exhbs = require("express-handlebars");
const methodOverride = require('method-override');


// import cookie-parse
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// Chuyển method
app.use(methodOverride('_method'));

// import dotenv - bien moi truong
require('dotenv').config();