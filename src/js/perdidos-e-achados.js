let rawData = {};
let animalData = [];
let filteredSortedData = [];
let lista = '';

async function loadData() {
  // Carregando o arquivo com os dados dos animais
  rawData = await fetch("../dao/db-perdidos-e-achados.json");
  animalData = await rawData.json();

  getPedidosAchados();
}

function getPedidosAchados() {

  filteredSortedData = animalData.filter((pet) => pet.status == 'P');

  // Limpando a lista de Perdidos
  lista = "listPerdidos";
  document.getElementById(lista).innerHTML = "";
  for (let i = 0; i < filteredSortedData.length; i++) {
    listContent = document.createElement("li");
    listContent.innerHTML = `
      <li class="item-list-animals" onclick="showModalAdoption(
        \'${filteredSortedData[i]["animalPhotoUrl"]}\',
        \'${filteredSortedData[i]["animalName"]}\',
        \'${filteredSortedData[i]["tag"]}\',
        \'${filteredSortedData[i]["status"]}\',
        \'${filteredSortedData[i]["gender"]}\',
        \'${filteredSortedData[i]["age"]}\')">
        <div class="card">
          <img src=${filteredSortedData[i]["animalPhotoUrl"]} alt="Detalhes do animal" class="animal-picture" />
          <div class="animal-details">
            <p>Nome: <strong>${filteredSortedData[i]["animalName"]}</strong></p>
            <p>Sexo: ${filteredSortedData[i]["gender"]}</p>
            <!--<p>Tamanho: ${filteredSortedData[i]["status"]}</p>-->
            <p>Idade: ${filteredSortedData[i]["age"]}</p>
          </div>
        </div>
      </li>`;
    document.getElementById(lista).appendChild(listContent);
    /*if(i==5){break;}*/
  }

  filteredSortedData = animalData.filter((pet) => pet.status == 'A');

  // Limpando a lista de Achados
  lista = "listAchados";
  document.getElementById(lista).innerHTML = "";
  for (let i = 0; i < filteredSortedData.length; i++) {
    listContent = document.createElement("li");
    listContent.innerHTML = `
      <li class="item-list-animals" onclick="showModalAdoption(
        \'${filteredSortedData[i]["animalPhotoUrl"]}\',
        \'${filteredSortedData[i]["animalName"]}\',
        \'${filteredSortedData[i]["tag"]}\',
        \'${filteredSortedData[i]["status"]}\',
        \'${filteredSortedData[i]["gender"]}\',
        \'${filteredSortedData[i]["age"]}\')">
        <div class="card">
          <img src=${filteredSortedData[i]["animalPhotoUrl"]} 
              alt="Detalhes do animal" 
              class="animal-picture" />
          <div class="animal-details">
            <p>Nome: <strong>${filteredSortedData[i]["animalName"]}</strong></p>
            <p>Sexo: ${filteredSortedData[i]["gender"]}</p>
            <!--<p>Tamanho: ${filteredSortedData[i]["status"]}</p>-->
            <p>Idade: ${filteredSortedData[i]["age"]}</p>
          </div>
        </div>
      </li>`;
    document.getElementById(lista).appendChild(listContent);
    /*if(i==5){break;}*/
  }

}

function showModalAdoption(animalPhotoUrl, animalName, animalTag, animalStatus, animalGender, animalAge) {

  let tag = 'CACHORRO'
  if (animalTag == 'cat') {
    tag = 'GATO'
  }
  let texto1 = 'PROCURA-SE ESSE ' + tag;
  let texto2 = 'PREENCHA ABAIXO SE ENCONTROU ESSE ' + tag;
  if (animalStatus == 'A') {
    texto1 = 'FOI ACHADO ESSE ' + tag;
    texto2 = 'PREENCHA ABAIXO PARA ADOTAR ESSE ' + tag;
  }

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
          <strong>${texto1}</strong>
        </p>
      </div>
    </div>

    <div class="modal-container-picture">
      <img src=${animalPhotoUrl} 
        alt="Foto do Animal"
        class="modal-animal-picture"
      />
    </div>

    <div class="modal-container-form">            
      <div class="modal-container-title-form">
        <p class="modal-title-form"><strong>${animalName}</strong></p>
        <p class="modal-title-form">${animalGender}</p>
        <p class="modal-title-form">${animalAge}</p>
      </div>
      <div class="modal-container-title-form">
        <p class="modal-title-form"><strong>${texto2}.</strong></p>
      </div>
      <form action="#" class="modal-container-input-form">
        <label class="label-form" for="userName">Nome:</label>
        <input class="input-form-get-data" type="text" id="userName" name="userName"/>
        
        <!--<label class="label-form" for="userTelefone">Telefone:</label>
        <input class="input-form-get-data" type="text" id="userName" name="userTelefone"/>-->
        
        <label class="label-form" for="userEmail">E-mail:</label>
        <input class="input-form-get-data" type="email" id="userEmail" name="userEmail"/>
        
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
