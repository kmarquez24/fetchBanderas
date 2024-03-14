
let buttonSeleccion = document.getElementById("botonDrop");

buttonSeleccion.addEventListener('click', (event) => {

  if (buttonSeleccion.value != "") {
    request(buttonSeleccion.value);
  }

});


let request = (pais) => {

  let myURL = `https://date.nager.at/api/v3/publicholidays/2024/${pais}`;

  fetch(myURL)
    .then(response => response.json()) /* Convierte el response a JSON */
    .then(resultado => {

      let div = document.getElementById("informacionFeriados");
      div.innerHTML = "";

      contenedorDatos(resultado, pais);

    })
    .catch(error => {

      console.log(error);

    });
}


let contenedorDatos = (consultaFetch, codigoPais) => {

  let marcoTrabajo = "";
  let Pais = "";
  let containerBandera = document.getElementById("ContenedorImagenBandera");

  switch (codigoPais) {
    case "EC":
      Pais = "Ecuador";

      break;
    case "AR":
      Pais = "Argentina";

      break;
    case "CL":
      Pais = "Chile";

      break;
    case "PE":
      Pais = "Peru";

      break;
    case "CO":
      Pais = "Colombia";

      break;
    case "PY":
      Pais = "Paraguay";

      break;
    case "UY":
      Pais = "Uruguay";

      break;
    case "BO":
      Pais = "Bolivia";

      break;
    case "BR":
      Pais = "Brasil";

      break;
    case "VE":
      Pais = "Venezuela";
      break;
  }

  containerBandera.innerHTML = `<img id="bandera" ; class="img-fluid  rounded" ; src="public/images/${Pais}.jpg">`;

  let h3 = document.getElementById("maqueta");
  h3.innerHTML = `<div class="card bg-success text-white my-3 text-center fs-3 text-uppercase"> <div class="card-body">
    Festivos nacionales de ${Pais}.
  </div>
</div>`;


  let div = document.getElementById("informacionFeriados");

  for (let element of consultaFetch) {

    let date = element.date;
    let name = element.localName;

    let contenedorFechas = `
                       
          <table class="table table-dark table-striped">
              <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Celebracion</th>
              </tr>
              </thead>

             <tbody class= "col-6">
              <tr>
                  <td>${date}</td>
                  <td>${name}</td>
              </tr>
             </tbody>
          </table>`;

    marcoTrabajo = marcoTrabajo + contenedorFechas;

  }

  div.innerHTML = marcoTrabajo;
}



