const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const appointmentRoutes = require('./routes/appointment');
const healthcheckupRoutes= require('./routes/healthCheckup');
const emailRouter=require('./routes/email')
const login = require('./routes/login');
const register = require('./routes/register');



const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(morgan('dev'));



app.use('/api/appointments', appointmentRoutes);
app.use('/api/health-checkups', healthcheckupRoutes);
app.use('/api',emailRouter);
app.use('/log',login)
app.use('/reg', register);



require('dotenv').config();
const port = process.env.PORT || 5000;
require('./config/db');








app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

