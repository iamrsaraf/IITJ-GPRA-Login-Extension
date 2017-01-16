var form=document.forms[0];
var username,password,rmemeber;

function stringStartsWith(string, prefix){
	return string.slice(0,prefix.length)== prefix;
}

function retrieve(){
	key1="username"
	key2="password"
	key3="remember"

	/*chrome.storage.local.get(key1,function(items){
		console.log("getting Username");
		usernmae=items.username;
		console.log(username);
		form.getElementsByTagName('input')[0].value=username;
	});*/
	chrome.storage.local.get(key1 , function(items) {
    //console.log(items.username);
    form.getElementsByTagName('input')[0].value=items.username;
  });
	chrome.storage.local.get(key2,function(items){
		console.log("Getting Password");
		password=items.password;
		//console.log(password);
		form.getElementsByTagName('input')[1].value=password;
	});
	website=(window.location.href);
}

function func(){
	form.getElementsByTagName('input')[2].click();
	window.open("https://www.google.com","_self");
}


retrieve();
setTimeout(func,10);