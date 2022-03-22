//Arquivo principal da API
import "reflect-metadata";
import express from "express";
import './database/connect'

const app = express();

//aplicando conversão para json no express, parq que seja possível receber dados em json
app.use(express.json())



//estabelecendo conexão da api
app.listen((3000), () => {
    console.log("server is running...")
});