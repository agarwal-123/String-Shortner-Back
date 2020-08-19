const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 3000;

//cors
//cors
app.all("*", function (req, res, next) {
	var origin = req.get("origin");
	res.header("Access-Control-Allow-Origin", origin);
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});
var cors = require("cors");
app.use(cors());

app.use(express.json());

function val(c) 
{ 
	if (c >= '0' && c <= '9') 
		return c - '0'; 
	else
		return c - 'A' + 10; 
} 


function toDeci(str, base) 
{ 
	var len = str.length; 
	var power = 1; 
	var num = 0; 
	var i; 

	for (i = len - 1; i >= 0; i--) 
	{ 

		if ((str.charCodeAt(i)-97) >= base) 
		{ 
		printf("Invalid Number"); 
		return -1; 
		} 

		num += (str.charCodeAt(i)-97) * power; 
		power = power * base; 
	} 
	console.log(num,str.charCodeAt(0))
	return num; 
} 




///Reverse 

function fromDeci(base,inputNum) 
{ 
    var index = 0;  // Initialize index of result 
	var res="";
 
    while (inputNum > 0) 
    { 
		var num= (inputNum % base)+97;
        res+=String.fromCharCode(num) 
        inputNum =(inputNum/base) | 0; 
	} 
	console.log(res)
	res=res.split('').reverse().join('');
  
    return res; 
} 



// 10 to 64

function idToShortURL( n) 
{ 
	var map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 

	var shorturl=''; 

	while (n) 
	{ 
		// shorturl.push
		shorturl+= map[n%62];
		// console.log(n%62); 
		n = (n/62) | 0; 
	} 
	
	// ReverseString(shorturl);
	shorturl = shorturl.split('').reverse().join('')
	console.log(shorturl);
	return shorturl; 
} 

function shortURLtoID(shortURL) 
{ 
	var id = 0;

	for (var i=0; i < shortURL.length; i++) 
	{ 
		var num=shortURL.charCodeAt(i);
		// console.log(num,id)
		if (97 <= num && num <= 122) 
		id = id*62 + num - 97; 
		if (65 <= num && num <= 90) 
		id = id*62 + num - 65 + 26; 
		if (48 <= num && num <= 57) 
		id = id*62 + num - 48 + 52; 
	} 
	return id; 
} 

function fun_26_to_62(str){
    var n=toDeci(str,26);
    // cout<<toDeci(str,26)<<" ";
    var shorturl = idToShortURL(n); 
    return shorturl;
    
}

function fun_62_to_26(shorturl){
    var n = shortURLtoID(shorturl); 
	// cout<<n<<" ";
	console.log(n)
    return fromDeci(26, n);
    
}


function main() 
{ 

    var st="zvaavas";
	var encod=fun_26_to_62(st);
	
    // cout<<encod<<"\n";
    
	var decod=fun_62_to_26(encod);
	// decod=decod.slice(1)
    // cout<<decod;
    console.log(encod,"encode");
    console.log(decod,"decode");

	return 0; 
}



app.get("/encode", function (req, res) {
	const resp = fun_26_to_62(req.query.input);
	res.send(resp);
	// res.send("122");
});

app.get("/decode", function (req, res) {
	const resp = fun_62_to_26(req.query.input);
	res.send(resp);
	// res.send("122");
});

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
