require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mealsRouter = require('./routes/meals');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to db'));

const app = express();

app.use(express.json());
app.use(cors());

app.use('/meals', mealsRouter);

app.listen(3000, () => console.log('server started'));
