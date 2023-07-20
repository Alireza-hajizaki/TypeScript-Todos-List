import Store from "./Store.js";
class Ui {
    addTodoToList(todo) {
        const list = document.getElementById('todo-list');
        const tr = document.createElement("tr");
        tr.className = `${todo.status && "opacity-50 text-decoration-line-through"}`;
        tr.innerHTML = `
              <th>${todo.id}</th>
                  <td>${todo.title}</td>
                  <td><input type="checkbox" ${todo.status ? "checked" : ""} class="form-check-input" onclick="changeStatusTodo(${todo.id})"></td>
               <td>
                      <button class="btn btn-sm btn-outline-danger" onclick="removeTodo(event , ${todo.id})">Delete</button>
              </td>
          `;
        list === null || list === void 0 ? void 0 : list.appendChild(tr);
    }
    removeTodo(e, todoId) {
        var _a;
        const element = e.target;
        (_a = element.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        Store.removeTodo(todoId);
    }
}
export default Ui;
