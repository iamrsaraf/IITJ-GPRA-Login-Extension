var values = {};
var key1 = "username";
var key2 = "password";

function saveOptions() {
  var username = document.getElementsByTagName('input')[0].value;
  var password = document.getElementsByTagName('input')[1].value;
  values[key1]=username;
  values[key2]=password;
/**/
  chrome.storage.local.set(values);
   // console.log("saved values are "+username" "+password);
}

function restoreOptions() {
  chrome.storage.local.get(key1 , function(items) {
    console.log(items.username);
    document.getElementsByTagName('input')[0].value=items.username;
  });
    chrome.storage.local.get(key2 , function(items) {
    console.log(items.password);
    document.getElementsByTagName('input')[1].value=items.password;
  });
}

//document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',saveOptions);