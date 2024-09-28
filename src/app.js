import express from 'express'
import comentsRoutes from'./routes/coments.routes.js'


const app = express();

app.use(express.json());

app.use(comentsRoutes);

export default app