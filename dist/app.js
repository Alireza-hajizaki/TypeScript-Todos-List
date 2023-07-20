"use strict";
class Todo {
    constructor(todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.status = todo.status;
    }
}
class Ui {
    addTodoToList(todo) {
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
        list === null || list === void 0 ? void 0 : list.appendChild(tr);
    }
}
const ui = new Ui();
let $ = document;
const form = $.querySelector("#todo-form");
const inputElem = $.querySelector(".form-control");
const titleError = $.querySelector("#title-error");
const formSubmitionHandler = (e) => {
    e.preventDefault();
    if (inputElem.value.trim() === "") {
        titleError.innerHTML = "Title is requared...";
    }
    else {
        titleError.innerHTML = "";
        const todoObj = {
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
