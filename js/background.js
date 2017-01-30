var tablink="https://10.0.1.254:4100/logon.shtml";
var interval=29*60*1000;
var flag=0;
var logged=0;
var opened=0;

var toggle=false;
chrome.browserAction.onClicked.addListener(function(tab){
	console.log(toggle);
	if(toggle){
		if(toggle){
			toggle=!toggle;
    chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"js/myscript.js"});
  }
  else{
  	toggle=!toggle;
  	chrome.browserAction.setIcon({path: "icoff.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"alert()"});
  }
	}
});

function open(){
	//chrome.tabs.create({url:"https://wwww.google.com"});
	chrome.tabs.create({url:tablink});
	console.log("Opened https://10.0.1.254:4100/logon.shtml");
}

function closetab(){
	chrome.tabs.getSelected(null,function(tab){
		chrome.tabs.remove(tab.id,function(){});
	});
}

function perform(){
	if(logged!=1){
	open();
	chrome.tabs.onUpdated.addListener(function(tabid,changeinfo,tab){
		var url=tab.url;
		if(url=="https://10.0.1.254:4100/success.shtml" && changeinfo.status=="complete"){
			logged=1;
			closetab();
		}
	});

	chrome.tabs.onUpdated.addListener(function(tabinfo,changeinfo,tab){
		var url=tab.url;
		if(url=="https://10.0.1.254:4100/logon.shtml?errcode=501" && changeinfo.status=="complete" && flag==0){
			alert("Invalid Username/Password.Please update if changed by clicking on the extension icon");
			flag=1;
			closetab();
		}
	});
   }
}

chrome.windows.onCreated.addListener(function(){
	if(logged!=1){
		perform();
	}

})
//setInterval(perform,interval);
document.getElementById('Login')[0].addEventListener('click',perform);
