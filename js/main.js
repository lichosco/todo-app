function anadirElemento(contenedor, texto, clase){
			var nuevo = document.createElement("li");
			var texto = document.createTextNode(texto);
			var done = document.createElement('button');
			var tachado= document.createElement('span');

			
			if(texto==="")
			{
				alert("Ingresa una tarea a realizar");
			}
			else
			{
				nuevo.setAttribute("class", clase);
			done.setAttribute("class", "bton");
			var done_tex= document.createTextNode("Done!");
			done.appendChild(done_tex);
			nuevo.appendChild(texto);
			nuevo.appendChild(tachado);		
			contenedor.appendChild(nuevo);
			contenedor.appendChild(done);
			done.addEventListener("click", removeItem);
			tachado.addEventListener("click", tacharItem)
			}

			
		}
		function mando(clase){
			var aqui = document.getElementById("items-list");
			var texto = document.getElementById("list-text").value;
			anadirElemento(aqui, texto, clase);
			texto.value="";
			limpiar();
			

		}
		function removeItem(){

			var hecho = document.getElementById("items-list");
            hecho.parentNode.removeChild(hecho);
		}
		function tacharItem()
		{
			var hecho= document.getElementById("items-list");
			hecho.strike();
		}

		function removeAll()
		{
			var element_group= document.getElementById("items-list");
			element_group.innerHTML=""
		}

		function limpiar()
		{
			
			var limpio= document.getElementById("list-text");
			limpio.value= "";
		}
 

		