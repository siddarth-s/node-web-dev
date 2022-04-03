// const express = require('express');
import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";

const app = express();
// app.get('/hello', (req, res) => {res.send('Life is good!')})
helloController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
userController(app);
app.listen(4000);