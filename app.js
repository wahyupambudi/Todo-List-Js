// const projectTitle = document.querySelector("#project-title"); //mengambil id project-title
// projectTitle.textContent = "Project Todo List"; //mengubah title

// var yearBirth = Number(prompt("Tahun Berapa Kamu Lahir? "));
// if(2020 - yearBirth < 18) {
//     alert(`Umur Kamu ${2020-yearBirth} tahun, Maaf kamu tidak bisa masuk!`)
// } else {
//     alert(`Umur Kamu ${2020-yearBirth} tahun, Gas Gan Masukk Aja!`)
// }

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);
filterInput.addEventListener("keyup", filterTodos);

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value) {
    // membuat li element
    const li = document.createElement("li");

    // menambah class element li
    li.className =
      "todo-item list-group-item d-flex justify-content-between align-items-center mb-1 ";

    //menambah clihdren ke li
    li.appendChild(document.createTextNode(todoInput.value));

    //   Membuat Delete Button a href
    const a = document.createElement("a");

    // memberi property untuk a element
    a.href = "#";
    a.className = "badge badge-danger delete-todo";

    //   add child
    a.innerHTML = "Delete";

    //   menyelipkan elemen a ke dalam childern li
    li.appendChild(a);

    //   add element li yang dibuat oleh javascript
    // ke dalam todolist

    todoList.appendChild(li);

    //   console.log(li);

    // mengkosongkan todoinput setelah input data
    todoInput.value = "";
  } else {
    alert("Todo Tidak Boleh Kosong!!");
  }
}

function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    // membuat alert confirm
    if (confirm(`Apakah Anda Akan menghapus Data ?`)) {
      const parent = e.target.parentElement;

      parent.remove();
    }
  }
}

function clearTodos() {
  // menghapus list todo
  todoList.innerHTML = "";
}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();

  // menyeleksi semua class dari todo-item
  const todoItems = document.querySelectorAll(".todo-item");

  // menyeleksi dengan foreach
  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    // jika itemText dari filterText bernilai true
    if (itemText.indexOf(filterText) !== -1) {
      // membiarkan elemen tetap ada
      item.setAttribute("style", "display: block;");
    } else {
      // hidden element
      item.setAttribute("style", "display: none !important;");
    }

    console.log(itemText);
  });
}
