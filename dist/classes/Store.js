import Ui from "./Ui.js";
class Store {
    static getTodos() {
        let todos;
        if (localStorage.getItem("todos")) {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        else {
            todos = [];
        }
        return todos;
    }
    static displayTodos() {
        const list = document.getElementById('todo-list');
        list.innerHTML = "";
        const ui = new Ui();
        const todos = Store.getTodos();
        todos.forEach((todo) => {
            ui.addTodoToList(todo);
        });
    }
    static setTodo(todo) {
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    static removeTodo(id) {
        const todos = Store.getTodos();
        const newTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    static changeStatusTodo(id) {
        const todos = Store.getTodos();
        const newTodos = todos.map((todo) => todo.id === id ? Object.assign(Object.assign({}, todo), { status: !todo.status }) : todo);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        Store.displayTodos();
    }
}
export default Store;
