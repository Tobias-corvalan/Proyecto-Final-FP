import express from 'express'
import UserRoutes from'./routes/user.routes.js'


const app = express();

app.use(express.json());
app.set('views engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(UserRoutes);


export default app