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

// Public thư mục ra ngoài
app.use(express.static(__dirname + '/public'));

// doi ten
var hbs = exhbs.create({
    defaultLayout: "owner",
    extname: "hbs",
    helpers: {
        // so sanh chuoi
        compareString(s1, s2, options) {
            return s1 === s2 ? options.fn(this) : options.inverse(this);
        },
        // so sanh hai so
        compareInt(int1, int2, options) {
            return +int1 === +int2 ? options.fn(this) : options.inverse(this);
        },
        compareInt2(int1, int2, options) {
            return +int1 != +int2 ? options.fn(this) : options.inverse(this);
        },
        forN(n, block) {
            let acum = "";
            for (let i = 1; i <= n; i++) {
                acum += block.fn(i);
            }
            return acum;
        },
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.listen(port, () => {
    console.log(`Listen in port http://localhost:${port}`);
});