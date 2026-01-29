"use strict"
{
    const divButtons = document.querySelector("#idButtons");
    const divContent = document.querySelector("#idContent");

    let btnTask1 = document.createElement("input");
    btnTask1.setAttribute("type", "button");
    btnTask1.setAttribute("value", "get");
    btnTask1.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask1);

    let btnTask2 = document.createElement("input");
    btnTask2.setAttribute("type", "button");
    btnTask2.setAttribute("value", "post");
    btnTask2.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask2);

    let btnTask3 = document.createElement("input");
    btnTask3.setAttribute("type", "button");
    btnTask3.setAttribute("value", "put");
    btnTask3.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask3);

    let btnTask4 = document.createElement("input");
    btnTask4.setAttribute("type", "button");
    btnTask4.setAttribute("value", "patch");
    btnTask4.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask4);

    let btnTask5 = document.createElement("input");
    btnTask5.setAttribute("type", "button");
    btnTask5.setAttribute("value", "delete");
    btnTask5.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask5);

    let btnTask6 = document.createElement("input");
    btnTask6.setAttribute("type", "button");
    btnTask6.setAttribute("value", "DELETE HERO");
    btnTask6.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask6);

    let btnClean = document.createElement("input");
    btnClean.setAttribute("type", "button");
    btnClean.setAttribute("value", "Clean DOM");
    btnClean.setAttribute("class", "btn btn-danger m-2");
    divButtons.appendChild(btnClean);

    btnClean.onclick = function (e){
        cleanScreen();
    
    };

    let myRequest = new Request ("http://localhost:3000/members");
    let myRequest2 = new Request ("http://localhost:3000/heroes")
   
    btnTask1.addEventListener("click", function (event){
        fetch(myRequest)
        .then(function (response){
            if(response.ok){
                return response.json();
            }else {
                   let p = document.createElement("p");
                    p.textContent = "Not implemented yet";
                    p.style.setProperty("color", "red");
                    divContent.appendChild(p);
            }
        })
        .then(function(myJson){
            myJson.forEach(function (data) {

            let myP = document.createElement("p");
            myP.innerHTML =
                "Id: " + data.id + "<br>" +
                "Name: " + data.name + "<br>" +
                "Age: " + data.age + "<br>" +
                "Secret Identity: " + data.secretIdentity + "<br>";

        let powersDiv = document.createElement("div");

        data.powers.forEach(function (power) {
            let label = document.createElement("label");

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "powers";
            checkbox.value = power;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + power));

            powersDiv.appendChild(label);
            powersDiv.appendChild(document.createElement("br"));
        });
        myP.appendChild(powersDiv);
        myP.innerHTML += "<hr>";
        document.body.appendChild(myP);
        let br = document.createElement("br");
        document.body.appendChild(br);
    });
    });

    });


    btnTask2.addEventListener("click", function (event){
        let form = document.createElement("form");
        form.innerHTML = `
        <input type="text" name="id" placeholder="Id"><br>
        <input type="text" name="name" placeholder="Name"><br>
        <input type="number" name="age" placeholder="Age"><br>
        <input type="text" name="secretIdentity" placeholder="Secret Identity"><br>
        <textarea name="powers" placeholder="Powers (separated by semicolon)"></textarea><br>
        <button type="submit">POST datos</button>
        `;
        form.style.backgroundColor = "cyan";
        document.body.appendChild(form);


        form.addEventListener("submit", function(event) {
        event.preventDefault();

        let formData = new FormData(form);
        let data = Object.fromEntries(formData.entries());
        data.powers = data.powers.split(";");

        fetch(myRequest, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));
    });
});


   

    function cleanScreen () {
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
    }
        
btnTask3.addEventListener("click", function (e) {
    fetch(myRequest)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                let p = document.createElement("p");
                p.textContent = "Not implemented yet";
                p.style.setProperty("color", "red");
                divContent.appendChild(p);
            }
        })
        .then(function (arrayJson) {
            arrayJson.forEach(function (elem) {
            fetch(myRequest.url + "/" + elem.id, {
                method: "PATCH",
                body: JSON.stringify({
                    // foto:
                })
            });
        });
    });
});


btnTask4.addEventListener("click", function (e) {
    let p = document.createElement("p");
    p.textContent = "Not implemented yet";
    p.style.setProperty("color", "red");
    divContent.appendChild(p);
})

    btnTask5.addEventListener("click", function (event){
        let p = document.createElement("p");
    p.textContent = "Not implemented yet";
    p.style.setProperty("color", "red");
    divContent.appendChild(p);
 
    });



     btnTask6.addEventListener("click", function (event){
        let members = [];

        fetch(myRequest)
        .then(res => res.json())
        .then(data => {
        members = data;
        crearSelect(members);
    })
    .catch(err => console.error(err));
    });

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

//   select.addEventListener("change", manejarSeleccion);
  let delBtn = document.createElement("button");
  delBtn.textContent = "ELIMINAR HEROE";
  document.body.appendChild(delBtn);

  delBtn.addEventListener("click", function (event){
    let newURL = myRequest.url + "/" + select.value;
    fetch(newURL, {
        method: "DELETE"
    }
  )
  .then(response => response.json())
  .then(console.log)
}
)}
  
}   