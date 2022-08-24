const express=require("express");   // * *
const app = express();              // * *
const PORT=process.env.PORT || 8000;// * *

const articlesInfo={
    "learn-react":{
        comments:[],
},
"learn-node":{
    comments:[],
},
};

// Receive Json Data from Postman....

app.use(express.json({extended: false}));  //recieve data from json(postman body)

app.post("/api/articles/:name/add-comments",(req,res) =>{
    const{username,text} =req.body;
    const articleName=req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(400).send(articlesInfo[articleName]);
});

app.listen(PORT,() => console.log(`Server start at port ${PORT}`)); 