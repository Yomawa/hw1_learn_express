var express = require('express'),
  app = express();
  app.set('view engine', 'ejs');

/*  app.get("/add/:num1/:num2", function (req, res) {
  res.send( "Result: " + (parseInt(req.params.num1) + parseInt(req.params.num2)));
  
});

  app.get("/div/:num1/:num2", function (req, res) {
  res.send( "Result: " + (parseInt(req.params.num1) / parseInt(req.params.num2)).toFixed(2));
  
});

  app.get("/mult/:num1/:num2", function (req, res) {
  res.send( "Result: " + (parseInt(req.params.num1) * parseInt(req.params.num2)).toFixed(2));
 
});
  app.get("/sub/:num1/:num2", function (req, res) {
  res.send( "Result: " + (parseInt(req.params.num1) - parseInt(req.params.num2)).toFixed(2));
  
});*/
  /*console.log(req.params);*/

  app.get("/:cal/:num1/:num2", function (req,res){
    res.send("Result:"+ result(req.params.cal,req.params.num1,req.params.num2));
      console.log(req.params);
  });

  function result(operator,num1,num2){
    if(operator==="subtract"){
      return (Number(num1)-Number(num2)).toFixed(2);
    }
    else if(operator==="multiply"){
      return (Number(num1)*Number(num2)).toFixed(2);
    }
    else if(operator==="divide"){
      return (Number(num1)/Number(num2)).toFixed(2);
    }
    else {
      return (Number(num1)+Number(num2)).toFixed(2);
    }


  // if the operator is 'add', then add the numbers
  // if the operator is 'sub', then subtract the numbers
  // if the operator is 'mult', then multiply the numbers
  // if the operator is 'div', then divide the numbers





  }

  app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});

