
var selectedRow =null;


function showAlert(mensaje, className){
  const div= document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(mensaje));
  const container = document.querySelector(".container");
  const main= document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(()=>document.querySelector(".alert").remove(), 5000);
}

function  limpiar(){
  document.querySelector("#nombreproducto").value ="";
  document.queryElementById("foto").value ="";
  document.querySelector("#descripcion").value ="";
  document.querySelector("#precio").value ="";
}

document.querySelector("#productos-form").addEventListener("submit", (e)=>{
  e.preventDefault();

  const nombreproducto=document.querySelector("#nombreproducto").value;
  const foto= document.getElementById("foto").files[0].name;
  const descripcion = document.querySelector("#descripcion").value;
  const precio=parseFloat(document.querySelector("#precio").value);

  if(nombreproducto == ""|| foto == "" ||descripcion==""||precio==""){
    showAlert("Por favor, llena todos los campos", "darger");
  }
  else{
    if(selectedRow == null){
      const list= document.querySelector("#productos-list");
      const row= document.createElement("tr");
      row.innerHTML = `
        <td>${nombreproducto} </td>
        <td><img src="../assets/img/${foto}" height="50"  alt="foto de hamburguesa" id="foto"></td>
        <td>${descripcion}</td>
        <td>$${precio}</td>
        <td>
            <a class="edit btn btn-sm" title="Editar" id="edit" href="#"><i class="fa-solid fa-pencil"></i></a>
            <a class="delete btn btn-sm" title="Eliminar" id="delete" href="#"><i class="fa-solid fa-trash"></i></a>
        </td>
      `;
      list.appendChild(row);
      selectedRow = null ;
      showAlert("¡Producto registrado con éxito!","success");
    }
    else {
      selectedRow.children[0].textContent= nombreproducto;
      selectedRow.children[1].textContent= foto;
      selectedRow.children[2].textContent= descripcion;
      selectedRow.children[3].textrContent= precio;
      selectedRow = null;
      showAlert("¡Producto modificado con exitosamente!", "info");

    }
    limpiar();
  }
});


document.querySelector("#productos-list").addEventListener("click", (e)=>{
  target = e.target;
  if(target.classList.contains("edit")){
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#nombreproducto").value = selectedRow.children[0].textContent;
    document.getElementById("foto").value= selectedRow.children[1].textContent;
    document.querySelector("#descripcion").value = selectedRow.children[2].textContent;
    document.querySelector("#precio").value = selectedRow.children[3].textContent;
  }
});



document.querySelector("#productos-list").addEventListener("click",(e)=>{
  target=e.target;
  if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("El producto fue eliminado correctamente", "danger");
  }
});
