import axios from 'axios';


let buttonGet:HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonGet");

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("responseElement");

let value : HTMLInputElement = <HTMLInputElement>document.getElementById("valueInput");


buttonGet.addEventListener("click", MouseEvent => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
    element.innerHTML = "<p>" + JSON.stringify(response.data[value.valueAsNumber].name) + "</p>";
    element.innerHTML += "<p>" + JSON.stringify(response.data[value.valueAsNumber].email) + "</p>";
    console.log(response.data[0].title);
  })
  .catch(function (error) {
    console.log(error);
  });
})

