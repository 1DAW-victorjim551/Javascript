"use strict"
{
    let members = [];

    fetch("http://localhost:3000/members")
    .then(res => res.json())
    .then(data => {
    members = data;
    crearSelect(members);
  })
  .catch(err => console.error(err));

  function crearSelect(members) {
  const select = document.createElement("select");
  select.id = "selectorId";

  const opcionDefault = document.createElement("option");
  opcionDefault.value = "";
  opcionDefault.textContent = "-- Selecciona un ID --";
  select.appendChild(opcionDefault);

  members.forEach(member => {
    const option = document.createElement("option");
    option.value = member.id;
    option.textContent = `ID ${member.id}`;
    select.appendChild(option);
  });

  document.body.appendChild(select);

  select.addEventListener("change", manejarSeleccion);
}


}