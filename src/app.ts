import {TodoInterface} from "./interfaces/TodoInterface.js";
import Store from "./classes/Store.js";
import Todo from "./classes/Todo.js";
import Ui from "./classes/Ui.js";


const ui = new Ui();

let $ = document;
const form = $.querySelector("#todo-form") as HTMLFormElement;
const inputElem = $.querySelector(".form-control") as HTMLInputElement;
const titleError = $.querySelector("#title-error") as HTMLParagraphElement;

const formSubmitionHandler = (e: Event) => {
  e.preventDefault();

  if (inputElem.value.trim() === "") {
    titleError.innerHTML = "Title is requared...";
  } else {
    titleError.innerHTML = "";
    const todoObj: TodoInterface = {
      id: Math.round(Math.random() * 100),
      title: inputElem.value.trim(),
      status: false,
    };

    inputElem.value = "";
    const todo = new Todo(todoObj);
    ui.addTodoToList(todo);
    Store.setTodo(todo)
  }
};

(window as any).changeStatusTodo = (id:number) => {
  Store.changeStatusTodo(id)
};

(window as any).removeTodo = (e:Event , id:number) => {
   ui.removeTodo(e,id)
};

form.addEventListener("submit", formSubmitionHandler);
window.addEventListener('load', () => {
    Store.displayTodos()
})
