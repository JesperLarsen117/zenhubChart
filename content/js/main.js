const apiKey = "8f2632e0483871d790695c5ec2b5c404972f7f1f1817a1300bf3d0ab9de9a82137dfdc56044e63b8";
const api_url = "https://api.zenhub.io/";


  function getInfo(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', api_url+'jesperlarsen117/zenhubChart#workspaces/201238802/5d4c00af66314500016b20f1',true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


  xhr.onload = function(){
    if(this.status == 200){
      console.log("Worked");
    } else {
      console.log(this.status);
    }
  }
  xhr.onerror = function(){
    console.log("Request Error");
  }
  
  // Fake API Key
  xhr.setRequestHeader("access_token",apiKey);
  xhr.send();
}

console.log(getInfo());