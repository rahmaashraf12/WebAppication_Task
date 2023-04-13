import express from 'express';
import { engine } from 'express-handlebars';
 
 import studentRoutes from './routes/studentsRoutes.js'
 import mongoose from 'mongoose';
 mongoose.connect('mongodb://127.0.0.1:27017/students')
const app=express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', "./templates");
 
  app.use('/students',studentRoutes);
app.listen(5000);