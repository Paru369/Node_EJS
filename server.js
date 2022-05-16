const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  const items = [
    {
      title: "D",
      message: "esenvolver Aplicações/servicos mais facil"
    },
    {
      title: "E",
      message: "JS usa javaScritp para renderizar HTML"
    },
    {
      title: "M",
      message: "uito tranquilo de usar em seu site"
    },
    {
      title: "A",
      message: "tualizações mais simples por componetização"
    },
    {
      title: "I",
      message: "ncrivelmente simples de implemantar novas páginas"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ];

const subtitle = "Uma liguagem de modelagem para criação de página html com JS"


  res.render("pages/index", {
    qualitys:items,
    subtitle: subtitle
  });
});

app.get("/sobre", function(req, res){
  res.render("pages/about")
})

app.listen(8080);
console.log("Servidor Funcionando")