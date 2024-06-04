import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});
app.post("/submit", (req, res) => {
    const title = req.body.title;
    const author= req.body.author;
    const introduction= req.body.introduction;
    const content = req.body.content;
    const conclusion = req.body.conclusion;
    res.render("post.ejs",
        { title: title,author: author,introduction: introduction, content: content, conclusion: conclusion})
});
app.get("/github", (req, res) => {
    res.render("github.ejs");
});
app.get("/travel", (req, res) => {
    res.render("travel.ejs");
});
app.get("/amazon", (req, res) => {
    res.render("amazon.ejs");
});
app.get("/nodemon", (req, res) => {
    res.render("nodemon.ejs");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

