/*
API CATS = https://cataas.com/
API DOGS = https://dog.ceo/dog-api/
*/

async function loadData(type) {
  // Carregando o arquivo com os dados dos animais
  const DATA = await fetch("../dao/data.json");
  let animalData = await DATA.json(); 

  switch (type) {
    case "all":
      getAllAnimals(animalData)
      break;
    case "dog":
      getFilteredData(animalData , "dog")
      break;
    case "cat":
      getFilteredData(animalData , "cat")
      break;
  }
}

function getAllAnimals(data) { 
  // Limpando a lista 
  document.getElementById("listAnimals").innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    // Criando o elemento que vai ser inserido na lista
    let animal = document.createElement("li");

    // Formatando o HTML que vai ser inserido na lista (ul)
    animal.innerHTML = `<li class="item-list-animals">
            <div class="card">
              <img
                src=${data[i]["animalPhotoUrl"]}
                class="animal-picture"
              />
              <div class="animal-details">
                <h4><b>${data[i]["animalName"]}</b></h4>
                <p>${data[i]["age"]}</p>
                <p>${data[i]["gender"]}</p>
              </div>
            </div>
          </li>`;

    // Inserindo um animal na lista
    document.getElementById("listAnimals").appendChild(animal);
  }
}

async function getFilteredData(data, type) {
  // Limpando a lista 
  document.getElementById("listAnimals").innerHTML = "";

  // Filtrando os dados q serão inseridos na lista
  const filteredData = await data.filter((item) => item.tag == type);  

  for (let i = 0; i < filteredData.length; i++) {
    // Criando o elemento que vai ser inserido na lista
    let animal = document.createElement("li");

    // Formatando o HTML que vai ser inserido na lista (ul)
    animal.innerHTML = `<li class="item-list-animals">
            <div class="card">
              <img
                src=${filteredData[i]["animalPhotoUrl"]}
                class="animal-picture"
              />
              <div class="animal-details">
                <h4><b>${filteredData[i]["animalName"]}</b></h4>
                <p>${filteredData[i]["age"]}</p>
                <p>${filteredData[i]["gender"]}</p>
              </div>
            </div>
          </li>`;

    // Inserindo um animal na lista
    document.getElementById("listAnimals").appendChild(animal);
  }
}

