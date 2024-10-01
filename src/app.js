import express from 'express'
import UserRoutes from'./routes/user.routes.js'
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.set('views engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))



app.use(UserRoutes);


export default app