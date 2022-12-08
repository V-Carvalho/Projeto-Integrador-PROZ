/*
API CATS = https://cataas.com/
API DOGS = https://dog.ceo/dog-api/
*/

let rawData
let animalData

async function loadData() {
  // Carregando o arquivo com os dados dos animais
  rawData = await fetch("../dao/data.json");
  animalData = await rawData.json();

  getAllAnimals();
}

function getAllAnimals() {
  // Limpando a lista
  document.getElementById("listAnimals").innerHTML = "";

  for (let i = 0; i < animalData.length; i++) {
    // Criando o elemento que vai ser inserido na lista e atribuindo na variavel
    let animal = document.createElement("li");

    // Formatando o HTML que vai ser inserido na lista (ul)
    animal.innerHTML = `<li class="item-list-animals">
            <div class="card">
              <img
                src=${animalData[i]["animalPhotoUrl"]}
                class="animal-picture"
              />
              <div class="animal-details">
                <h4><b>${animalData[i]["animalName"]}</b></h4>
                <p>${animalData[i]["age"]}</p>
                <p>${animalData[i]["gender"]}</p>
              </div>
            </div>
          </li>`;

    // Inserindo um animal na lista
    document.getElementById("listAnimals").appendChild(animal);
  }
}

async function getDataAnimalsFilteredSorted(type) {
  // Limpando a lista
  document.getElementById("listAnimals").innerHTML = "";

  // Filtrando e sorteando os dados q serão inseridos na lista
  const filteredSortedData = await animalData
    // Filtrando os animais conforme o tipo (gato ou cachorro)
    .filter((pet) => pet.tag == type)
    //Math.random() - 0.5 gera número aleatório que pode ser positivo ou negativo, então a função de classificação reordena os elementos aleatoriamente.
    .sort(() => Math.random() - 0.5) 

  for (let i = 0; i < filteredSortedData.length; i++) {
    // Criando o elemento que vai ser inserido na lista e atribuindo na variavel
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