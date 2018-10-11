import axios from 'axios';

class todo{
    _userid: number;
    _id: number;
    _title: string;
    _completed: boolean;

    constructor(userid: number, id: number, title: string, completed:boolean){
        this._userid = userid;
        this._id = id;
        this._title = title;
        this._completed = completed;
    }

    /**
     * ToString
     */
    public ToString(): string {
        return this._userid + " " + this._title;
    }
}

let buttonGet:HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonGet");

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("responseElement");

buttonGet.addEventListener("click", MouseEvent => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
  .then(function (response) {
    element.innerHTML = "JSON: " + JSON.stringify(response.data[0].title);
    console.log(response.data[0].title);
  })
  .catch(function (error) {
    console.log(error);
  });
})

