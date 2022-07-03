const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended:true}))
var item = [];
app.use(express.static("public"))
app.get('/', function(req, res){
   var today = new Date();
   var options = {
    weekday: "long",
    day: "numeric",
    month:"long"
   };

   var day = today.toLocaleDateString("en-us",options);


//    day =today.getDay()
//    switch (day) {
//        case 0: currentday = 'sunday';
//        break;
//        case 1: currentday = 'monday';
//        break;
//        case 2: currentday = 'tuesday';
//        break;
//        case 3: currentday = 'wednesday';
//        break;
//        case 4: currentday = 'thursday';
//        break;
//        case 5: currentday = 'friday';
//        break;
//        case 6: currentday = 'saturday';
//        break;
//        default: console.log('Invalid');
//    }
   
   res.render("list", {kindofday: day, newListItem: item})
  
})
app.post("/", function(req,res) {
    item.push(req.body.newItem);
    console.log(item)
   res.redirect("/")
})

app.listen(3000,function() {
    console.log('listening g')
});