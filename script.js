//creating the request instance
let req = new XMLHttpRequest();

//initiating a connection or create a connnection
req.open("GET","https://restcountries.eu/rest/v2/all",true);

//sending the request
req.send();

//load the function
//this function will only be triggered when the data has been received successfully
req.onload = function(){
    let data = JSON.parse(this.response);
    data.forEach((item) => {console.log(item.name);});

}
