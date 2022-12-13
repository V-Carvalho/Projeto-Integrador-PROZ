/*
API CATS = https://cataas.com/
API DOGS = https://dog.ceo/dog-api/
*/

modalBody = null;
let rawData, animalData = [];
let listContent, modalContent = null;

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
    listContent = document.createElement("li");

    // Formatando o HTML que vai ser inserido na lista (ul) a \ é usada para sair do template string    
    listContent.innerHTML = `<li class="item-list-animals" onclick="showModalAdoption(
        \'${animalData[i]["animalPhotoUrl"]}\',
        \'${animalData[i]["animalName"]}\' 
      )">
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
    document.getElementById("listAnimals").appendChild(listContent);
  }
}

function getDataAnimalsFilteredSorted(type) {
  // Limpando a lista
  document.getElementById("listAnimals").innerHTML = "";

  // Filtrando e sorteando os dados q serão inseridos na lista
  const filteredSortedData = animalData
    // Filtrando os animais conforme o tipo (gato ou cachorro)
    .filter((pet) => pet.tag == type)
    //Math.random() - 0.5 gera número aleatório que pode ser positivo ou negativo, então a função de classificação reordena os elementos aleatoriamente.
    .sort(() => Math.random() - 0.5);

  for (let i = 0; i < filteredSortedData.length; i++) {
    // Criando o elemento que vai ser inserido na lista e atribuindo na variavel
    listContent = document.createElement("li");

    // Formatando o HTML que vai ser inserido na lista (ul)
    listContent.innerHTML = `<li class="item-list-animals" onclick="showModalAdoption(
      \'${filteredSortedData[i]["animalPhotoUrl"]}\',
      \'${filteredSortedData[i]["animalName"]}\' 
    )">
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
    document.getElementById("listAnimals").appendChild(listContent);
  }
}

function showModalAdoption(animalPhotoUrl, animalName) {
  // Variavel que vai receber o conteúdo a ser inserido no corpo do Modal
  modalContent = document.createElement("div");

  // Formatando conteúdo a ser inserido no elemento
  modalContent.innerHTML = `<div class="modal-content">
    <div class="modal-container-header">
      <div class="modal-container-btn-close-header">
        <button class="btn-close-modal" onclick="closeModalAdoption()">X</button>
      </div>            
      <div id="modalContainerTitleHeader" class="modal-container-title-header">
        <p class="modal-title-header">
          Você esta a um <b>CLICK</b> de formalizar o pedido de adoção do(a)
          <b>${animalName}</b>!
        </p>
      </div>
    </div>

    <div class="modal-container-picture">
      <img
        src=${animalPhotoUrl}
        alt="Foto do Animal"
        class="modal-animal-picture"
      />
    </div>

    <div class="modal-container-form">            
      <div class="modal-container-title-form">
        <p class="modal-title-form">
          Preencha o formulário abaixo que entraremos em contato
          explicando todos os procedimentos! 
        </p>
      </div>
      <form action="#" class=" modal-container-input-form">
        <label class="label-form" for="userName">Nome:</label>
        <input class="input-form-get-data" type="text" id="userName" name="userName"/>
        <br/>
        <label class="label-form" for="userEmail">E-mail:</label>
        <input class="input-form-get-data" type="email" id="userEmail" name="userEmail"/>
        <br/>
        <input class="btn-form-send-data" type="submit" value="ENVIAR" />
      </form>            
    </div>
  </div>`;  

  // Inserindo o conteudo no corpo do Modal
  document.getElementById("modalBody").appendChild(modalContent);

  // Variavel que representa o corpo do Modal
  modalBody = document.getElementById("modalBody");

  // Alterando a renderização do Modal
  modalBody.style.display = "block";
}

function closeModalAdoption() {
  // Limpando o corpo do Modal
  document.getElementById("modalBody").innerHTML = "";  

  // Criando Elemento que representa o corpo do Modal
  modalBody = document.getElementById("modalBody");

  // Alterando a renderização do Modal
  modalBody.style.display = "none";
}
