import express from "express";
const server = express  ();
import path  from 'path';
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(express.static(path.join(__dirname, '../dist')));    

server.get('/', (req,res ) => {res.send('ola sejam bem vindos')});
server.listen(process.env.PORT,() => {console.log(` Running on Port ${process.env.PORT}`)})