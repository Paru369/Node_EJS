const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  const items = [
    {
      title: "D",
      message: "Desenvolver Aplicações/servicos mais facil"
    },
    {
      title: "E",
      message: "EJS usa javaScritp para renderizar HTML"
    },
    {
      title: "M",
      message: "Muito tranquilo de usar em seu site"
    },
    {
      title: "A",
      message: "Atualizações mais simples por componetização"
    },
    {
      title: "i",
      message: "Incrivelmente simples de implemantar novas páginas"
    },
    {
      title: "S",
      message: "Sintaxe simples"
    }
  ];
  res.render("pages/index", {
    qualitys:items,
  })
})

app.get("/sobre", function(req, res){
  res.render("pages/about")
})

app.listen(8080);
console.log("Servidro Funcionando")