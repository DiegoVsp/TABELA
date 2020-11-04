let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let nomes = []

let tabela = document.querySelector('tbody');

function Adicionar() {
  Criar()
}

function verificaLista(name, nomes) {
  if (nomes.indexOf(name) != -1) {
    alert('está na lista')
    return true;
  } else {
    return false;
  }
}

function Criar() {
  let name = nome.value;
  let age = idade.value;

  if (ValidarCampos(name, age) && !verificaLista(name, nomes)) {

    nomes.push({ name, age })
    tabela.innerHTML = ''
    if (nomes != null) {
      for (let n in nomes) {
        tabela.innerHTML += `
        <tr>
          <td>${nomes[n].name}</td>
          <td>${nomes[n].age}</td>
          <td>
          <button class="btn btn-warning col-5 text-white" onclick="Atualizar(${n})">
          <i class="fa fa-edit mr-4"></i>Editar</button>
          <button class="btn btn-danger col-5 text-white" onclick="Deletar()">
          <i class="far fa-trash-alt mr-4"></i>Deletar</button>
          </td>
        </tr>
      `;
      }
    }
  }
  nome.value = '';
  idade.value = '';
  nome.focus();
}

function Read() {
  tabela.innerHTML = '';
  let dadosTab = nomes;
  if (dadosTab != null) {
    for (let nomes in dadosTab) {
      tabela.innerHTML += `
      <tr>
        <td>${dadosTab[nomes].name}</td>
        <td>${dadosTab[nomes].age}</td>
        <td>
        <button class="btn btn-warning col-5 text-white" onclick="Atualizar(${nomes})">
        <i class="fa fa-edit mr-4"></i>Editar</button>
        <button class="btn btn-danger col-5 text-white" onclick="Deletar(${nomes})">
        <i class="far fa-trash-alt mr-4"></i>Deletar</button>
        </td>
      </tr>
    `;
    }
  }
}

function ValidarCampos(name, age) {
  isValid = true;
  if (name == '' || age == '') {

    alert('Preencha o Nome e a Idade');
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
}

function Atualizar(ind) {
  let nomes3 = nomes;
  tabela.innerHTML = '';
  for (let i = 0; i < nomes3.length; i++) {
    if (i == ind) {
      tabela.innerHTML += `
      <tr>
      <td><input class="mb-2 form-control" id="novoNome" placeholder="${nomes3[i].name}"/></td>
      <td><input class="mb-2 form-control" id="novaIdade" placeholder="${nomes3[i].age}"/></td>
      <td>
      <button class="col-5 text-white btn btn-success" onclick="Editar(${i})">
      <i class="fa fa-edit"></i>Update</button>
      <button class="col-5 text-white btn btn-danger" onclick="Read()">
      <i class="fa fa-ban" mr-4"></i>Cancelar</button>
      </td>
    </tr>
  `;
    } else {
      tabela.innerHTML += `
      <tr>
      <td>${nomes[i].name}</td>
      <td>${nomes[i].age}</td>
      <td>
      <button disabled class="col-5 text-white btn btn-success" onclick="Editar(${i})">
      <i class="fa fa-edit"></i>Editar</button>
      <button disabled class="col-5 text-white btn btn-danger" onclick="Deletar(${i})">
      <i class="fas fa-trash-alt"></i>Deletar</button>
      </td>
    </tr>
  `;
    }
  }
}

function Editar(ind) {
  let dados = nomes;
  dados[ind].name = document.querySelector('#novoNome').value;
  dados[ind].age = document.querySelector('#novaIdade').value;
  if (dados[ind] == '') {
    alert('Atualize os campos');
  } else {
    nomes = dados;
    Read();
  }
}

function Deletar(ind) {
  let dados = nomes;
  if (confirm('Tem certeza que deseja apagar este cadastro da tabela?')) {
    dados.splice(ind, 1);
    nomes = dados;
  }
  Read();
}





