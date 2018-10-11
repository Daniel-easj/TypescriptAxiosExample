import axios from 'axios';


let buttonGet:HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonGet");

let element1: HTMLDivElement = <HTMLDivElement> document.getElementById("responseElement");
let detailedViewElement: HTMLDivElement = <HTMLDivElement> document.getElementById("responseElement");

let value : HTMLInputElement = <HTMLInputElement>document.getElementById("valueInput");




buttonGet.addEventListener("click", MouseEvent => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
        for(var _i = 0; _i < 10; _i++){
            element1.innerHTML += "<p>" + JSON.stringify(response.data[_i].name) + "</p>";
            element1.innerHTML += '<button id="' + JSON.stringify(response.data[_i].id) 
            + ' onclick="DetailedView(' + JSON.stringify(response.data[_i].id) + ')"'
            +  '">'
            + "Detailed view" + "</button>";

        }
  })
  .catch(function (error) {
    console.log(error);
  });
})

function detailedView(id:number){
        
}

