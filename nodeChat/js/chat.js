var http = require("http")
var url = require("url");
var q = require("querystring");


// var body = '<html>'+
// 	'<head>'+
// 	'</head>'+
// 	'<body>'+
		
// 		'<form action="">'+
// 			'Your message: <br>'+
// 			'<textarea name="" id="" cols="30" rows="10"></textarea> <br>'+
// 			'<input type="submit" value="send">'+
// 		'</form>'+

// 		'<br>'+
// 		'<br>'+
// 		'<div id="chatBlock">'+
// 			'sdf'+
// 		'</div>'+

// 	'</body>'+
// '</html>';

var data = [];
var colors = ["red","green"];

http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/plain","Accept-Charset":"UTF-8"});



  //response.write("Hello World");
  //response.write(body);


  pathname = url.parse(request.url);
  //postdata = q.parse(response);



var d = new Date();



	
console.log(pathname.query);	

  if (pathname.query != null && pathname.query != "mes="){

  		
		mes = pathname.query.split("&")[0].split("=")[1];
		mes = "<font color='black' size='2'>" + d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds() + "</font> " + mes;

	  	data.push(mes);
  }


	if (data.length > 0){

		z = 0;

	  	 for (var i in data){


		 	//mes = data[i].split("&")[0].split("=")[1];


			
			response.write("<font color='" + colors[z] + "'>" + data[i] + "</font>" + "<br>");  	

			z=(z==0)? 1 : 0;

			//console.log(data[i]);
		 }
	}

  

  //pathname = url.parse(request.url);
  //console.log(pathname);
  response.end();
}).listen(8888);