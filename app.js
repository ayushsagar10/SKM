const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
 res.render("main");
});
app.listen(PORT, () => {
  console.log('Connected : '+ PORT);
});
