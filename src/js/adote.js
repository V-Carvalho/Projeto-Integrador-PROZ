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
      getAllAnimals(animalData);
      break;
    case "dog":
      getFilteredSortedData(animalData, "dog");
      break;
    case "cat":
      getFilteredSortedData(animalData, "cat");
      break;
  }
}

async function getAllAnimals(data) {
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

async function getFilteredSortedData(data, type) {
  // Limpando a lista
  document.getElementById("listAnimals").innerHTML = "";

  // Filtrando e sorteando os dados q serão inseridos na lista
  const filteredSortedData = await data
    // Filtrando os animais conforme o tipo (gato ou cachorro)
    .filter((pet) => pet.tag == type)
    //Math.random() - 0.5 gera número aleatório que pode ser positivo ou negativo, então a função de classificação reordena os elementos aleatoriamente.
    .sort(() => Math.random() - 0.5) 

  for (let i = 0; i < filteredSortedData.length; i++) {
    // Criando o elemento que vai ser inserido na lista
    let animal = document.createElement("li");

    // Formatando o HTML que vai ser inserido na lista (ul)
    animal.innerHTML = `<li class="item-list-animals">
            <div class="card">
              <img
                src=${filteredSortedData[i]["animalPhotoUrl"]}
                class="animal-picture"
              />
              <div class="animal-details">
                <h4><b>${filteredSortedData[i]["animalName"]}</b></h4>
                <p>${filteredSortedData[i]["age"]}</p>
                <p>${filteredSortedData[i]["gender"]}</p>
              </div>
            </div>
          </li>`;

    // Inserindo um animal na lista
    document.getElementById("listAnimals").appendChild(animal);
  }
}