import express from "express";
import mysql from "mysql";
import cors from 'cors';

const app = express()



const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"gastos" //nome do banco de dados
});

//código que faz a conexão com o banco de dados

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/", (req, res) =>{
    res.json("Sou o Backend em funcionamento")
});

app.listen(8800, () => {
    console.log("servidor rodando em: http://localhost:8800")
});