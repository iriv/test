var excelParser = require('excel-parser');
var fs = require('fs');

var path = "/home/riv/www/test/jsexelparser/guides.xlsx";
//var path = "g.xlsx";

excelParser.parse({
  inFile: path,
  worksheet: 1,
  skipEmpty: true
  // searchFor: {
  //   term: ['my serach term'],
  //   type: 'loose'
  // }
},function(err, records){
  if(err) console.error(err);
  console.log(records.length);
  // console.log(records[0]);

  var str="";
  mark="";




  for(var i in records){


  	if (i>0 && i<records.length-1){

        name = records[i][1].split('"').join("'");
        //name = name.split(\").join("/");

  		records[i][0] = '"' + records[i][0] + '"';
        records[i][1] = '"' + name  + '"';
  		records[i][2] = '"' + records[i][2] + '"';
        records[i][3] = '"' + records[i][3] + '"';
        records[i][4] = '"' + records[i][4] + '"';
        records[i][5] = '"' + records[i][5] + '"';



  		str += mark + "["+records[i]+"]";
  		mark=",";
  	}
  }

  str = "[" + str + "]";

	fs.writeFile("/home/riv/www/test/jsexelparser/data.json", str, function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file was saved!");
	    }
	}); 

});


