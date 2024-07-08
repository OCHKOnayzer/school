const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();


const apiRouter = require('express').Router()
const subRouter = require('./router/subscribeRouter.js');
const authRouter = require('./router/authRouter.js');
const lernRouter = require('./router/questsRouter.js')
const donateRouter = require('./router/donateRouter.js');
const errorMiddleware = require('./middleware/error-middleware.js');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cookie());
app.use(cors({ 
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use('/image', express.static('./images'))
app.use('/api',apiRouter)
apiRouter.use('/auth', authRouter);
apiRouter.use('/sub', subRouter);
apiRouter.use('/study',lernRouter);
apiRouter.use('/donate',donateRouter);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/DIPLOMBOX');
        app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`));
    } catch (e) {
        console.log(`server error: ${e}`);
    }
};

start();