
    // variables
    let lista = document.getElementById('lista');
    let tareaInput = document.getElementById('tareaInput');
    let btnNuevaTarea = document.getElementById('btn-agregar');

    //functions
    const agregarTarea = function(){
        
        let tarea = tareaInput.value;
            
            nuevaTarea = document.createElement('li'), 
            enlace = document.createElement('a'),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute('placeholder', 'Add a valid task');
            tareaInput.className = 'error'; //css
            return false;  
        }

        //Add
        enlace.appendChild(contenido)
        
        enlace.setAttribute('href', '#');
       
        nuevaTarea.appendChild(enlace);
        
        lista.appendChild(nuevaTarea);


        //clean
        tareaInput.value = "";

        
        for (let i=0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener('click', function(){
                this.parentNode.removeChild(this);
            });
        }

    };
        

    let comprobarInput = function(){
        tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Add your task");
    };
        

    let eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };
        
    //eventos
    //agregar tarea
    btnNuevaTarea.addEventListener('click', agregarTarea);

    //comprobacion de input lleno / error
    tareaInput.addEventListener('click', comprobarInput);

    // borrando elementos de la lista
    for (let i=0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener('click', eliminarTarea)
    }

