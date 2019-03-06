window.setTimeout(function() {
    // put all of your JS code from the lecture here
    console.log("CONNECTED!");
    var todos = [];
    
    var input = prompt("What would you like to do?");
    
    while(input !== "quit"){
        if (input === "new"){
            addTodo();
        }
        else if (input === "list") {
            listTodos();
        }
        else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }

    console.log("OK, YOU QUIT THE APP");

  }, 500);

  function addTodo() {
    var newToDo = prompt("Enter a new todo");
    todos.push(newToDo);
    console.log(newToDo);
  }

  function listTodos() {
    console.log("*************");
    todos.forEach(function (todo, i) {
        console.log(i + ". " + todo);
    });
    console.log("*************");
  }

  function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index,1);
    // 1er argumento: indice
    // 2o argumento: elementos que desea eliminar a partir del indice
  }