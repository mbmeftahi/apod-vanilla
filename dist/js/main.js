//
//
//
var nasakey = "F6Z1hkr0RHawAzZt3bdusuwfUpwLolwuDzWcs2Ut"
//var date = "2013-06-06";
var date = randomDate(new Date(1995, 5, 16), new Date());
var answer="";

var header = document.querySelector('header');
var image = document.querySelector('img');
var section = document.querySelector('section');

var url = "https://api.nasa.gov/planetary/apod?api_key=" + nasakey + "&date=" + date;
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url);
xhttp.responseType = 'json'
xhttp.send();

xhttp.onload = function(){
  var answer = xhttp.response;
  populateHeader(answer);
  showJson(answer);
}
 console.log(answer);

  function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['title'];
    header.appendChild(myH1);

    var myImg = document.createElement('p');
    myImg.textContent = 'This is Image Location.  ' + jsonObj['url'];
    image.appendChild(myImg);
    
    var myCopyright = document.createElement('p');
    myCopyright.textContent = 'Copyright: ' + jsonObj['copyright'];
    section.appendChild(myCopyright);
     
    var myPara1 = document.createElement('p');
    myPara1.textContent =  jsonObj['explanation'];
    section.appendChild(myPara1);
    
    var myDate = document.createElement('p');
    myDate.textContent = 'Date: ' + jsonObj['date'];
    section.appendChild(myDate);
    
    var myPara = document.createElement('p');
    myPara.textContent = jsonObj['url'];
    section.appendChild(myPara);


  }


  //Create a random date
   function randomDate(start, end) {
  //
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  //Format the date
  let d = date.getDate();
  let m = date.getMonth() + 1; //In JS months start at 0
  let y = date.getFullYear();

  //Change the maonth and day strings so that they match the documented format.
  if(m < 10){
  m = '0'+m
  }

  if(d < 10){
  d = '0'+d
  }

  return `${y}-${m}-${d}`;
  }



/*  function showJson(jsonObj) {
  console.log("here in showJason function")
    var myPara1 = document.createElement('p');
    myPara1.textContent = 'Description: ' + items.description;
    section.appendChild(myPara1);
    
  }
*/
/*
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200 ){
        answer = this.responseText;
        console.log(answer);
        answer = JSON.parse(answer);
        console.log(answer);
      }


    };
    xhttp.open("GET", url, true);
    xhttp.send(); 
    
//    var jsonR = JSON.parse(answer, function (key, value) {
//      document.getElementById("apodTitle").innerHTML = jsonR.title
//    
//    });


loadDoc();
*/
