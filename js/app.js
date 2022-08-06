function addClientList() {

    var boxInputName = window.document.getElementById("input-name").value;
    var boxInputEmail = window.document.getElementById("input-email").value;
    var boxInputTel = window.document.getElementById("input-tel").value;
    var boxInputCidade = window.document.getElementById("input-cidade").value;

    if (boxInputName && boxInputEmail && boxInputTel && boxInputCidade){

        const template = window.document.querySelector(".template");
        const newTemplate = template.cloneNode(true);

        newTemplate.querySelector("#span-nome").textContent = boxInputName;
        newTemplate.querySelector("#span-email").textContent = boxInputEmail;
        newTemplate.querySelector("#span-telefone").textContent = boxInputTel;
        newTemplate.querySelector("#span-cidade").textContent = boxInputCidade;

        const boxTemplate = window.document.querySelector("#box-template");
        boxTemplate.appendChild(newTemplate);

        newTemplate.classList.remove("template");
        newTemplate.classList.remove("hide");

        const btnRemove = newTemplate.querySelector("#btn-remove").addEventListener("click", function(){
            removeContact(this);
        });
        
        boxInputName = window.document.getElementById("input-name").value = '';
        boxInputEmail = window.document.getElementById("input-email").value = '';
        boxInputTel = window.document.getElementById("input-tel").value = '';
        boxInputCidade = window.document.getElementById("input-cidade").value = '';

        alert("Cliente cadastrado com sucesso!");
    }

    //removendo cliente
    function removeContact(contact){
        contact.parentNode.remove(true);
    }

}

//adicionando cliente na tela 
const addCliente = window.document.getElementById("addClienteBtn");

addCliente.addEventListener("click", function(e){

    e.preventDefault();

    addClientList()
});