


var initialize = function(event){
  var mainForm = document.getElementById("mainForm");
  var todoList = document.getElementById("todoList");


  mainForm.addEventListener("submit",function(event){
    event.preventDefault();
    var taskInput = this.taskInput.value;

    var listItem = document.createElement("tr");
    var tdtext = document.createElement("td");
    tdtext.className = "textcol";
    var tddone = document.createElement("td");
    var tddelete = document.createElement("td");
    var text = document.createTextNode(taskInput);


    var donebtn = document.createElement("button");
    donebtn.appendChild(document.createTextNode("Done"));
    donebtn.onclick = function(){
      this.parentNode.parentNode.firstChild.classList.toggle("strikethru");
      if (this.innerText === "Done") {
        this.innerText = "Undo";
      } else {
        this.innerText = "Done";
      }
      };

    var deletebtn = document.createElement("button");
    deletebtn.appendChild(document.createTextNode("Delete"));
    deletebtn.onclick = function(){
      this.parentNode.parentNode.remove();
    }

    tdtext.appendChild(text);
    tddone.appendChild(donebtn);
    tddelete.appendChild(deletebtn);
    listItem.appendChild(tdtext);
    listItem.appendChild(tddone);
    listItem.appendChild(tddelete);
    todoList.appendChild(listItem);

    this.taskInput.value = "";
});
};


window.onload = initialize;