document.querySelector('#push').onclick=function(){
    //verifica si el input esta vacio
    if(document.querySelector('#newtask input').value.length == 0){
        {
            alert("Por favor ingrese la tarea")
        }
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
        
        //Elimina Tareas
        var current_tasks = document.querySelectorAll(".delete");

        for (var i =0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        //Subraya Tareas

        var tasks = document.querySelectorAll(".task");

        for (var i=0; i< tasks.length;i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }

        //al agregar deja el input vacio

        document.querySelector("#newtask input").value="";
    }
}

