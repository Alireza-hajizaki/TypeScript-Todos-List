interface TodoInterface {
  id: number;
  title: string;
  status: boolean;
}

class Todo implements TodoInterface {
  id: number;
  title: string;
  status: boolean;

  constructor(todo: TodoInterface) {
    this.id = todo.id;
    this.title = todo.title;
    this.status = todo.status;
  }
}

class Ui {
  addTodoToList(todo: TodoInterface) {

    const list = $.getElementById('todo-list');

    const tr = $.createElement("tr");
    tr.innerHTML = `
            <th>${todo.id}</th>
                <td>${todo.title}</td>
                <td><input type="checkbox" ${todo.status ? "checked" : ""} class="form-check-input"></td>
             <td>
                    <button class="btn btn-sm btn-outline-danger">Delete</button>
            </td>
        `;

        list?.appendChild(tr);
  }
}

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
  }
};

form.addEventListener("submit", formSubmitionHandler);
