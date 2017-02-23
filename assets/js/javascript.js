

 function show() {
  var record = document.getElementById('records');
  var name = document.getElementById('nombre').value;
  var lastname = document.getElementById('apellido').value;
  var dni = document.getElementById('dni').value;
  var direction = document.getElementById('direccion').value;
  var data = [];
  for(var i =0; i<4; i++){
  data.push(name, lastname,dni, direction)
}
  (data[0]=="" || data[1]=="" || data[2]=="" || data[3]=="") ?  alert("Completa los datos"): (record.innerHTML=
        "<ul>" +
          "<li>Nombre: " + name + "</li>" +
          "<li>Apellido: " + lastname + "</li>" +
          "<li>DNI: " + dni + "</li>" +
          "<li>Dirección: " + direction + "</li>" +
        "</ul>") ;

  }
