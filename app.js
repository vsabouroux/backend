const express = require("express");

const app = express();
app.use(express.json()); //ou avec bodyParser pour accéder au coeur de la requete
// avec "next" on passe de middleware au middleware suivant
//Headers pour éviter des erreurs "CORS" Cela va permettre à l'application d'accéder à l'API ss pb
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.post("/api/books",(req, res, next)=>{
    console.log(req.body);
    res.status(201).json({message : "livre crée"});
});
app.get("/api/books",(req, res, next)=>{
    const books = [
        {
            userId :"Coco",
            title : "Nom du livre",
            author: "Auteur du livre",
            imageUrl: "",
            year:"Année de publication du livre",
            genre : "Genre du livre",
            ratings : [
                {
                    userId: "je ne sais pas est-ce que c'est Coco ? ou celui de MongoDB ?",
                    grade:"note donnée au livre",
                }
            ],
            averageRating: "note moyenne du livre"
        }
    ];
    res.status(200).json({books})
});


module.exports = app;