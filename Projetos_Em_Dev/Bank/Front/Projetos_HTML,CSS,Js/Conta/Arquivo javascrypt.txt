var s= 0
var limite=0
var limite_txt="0";

function Mostrar() {
  const saldo = document.getElementById("Saldo");
  const icone = document.getElementById("btn_olho");

  const mascarado = "R$ ••••••";

  if (saldo.textContent != mascarado || limite_txt != mascarado) {
    saldo.textContent = mascarado;
    limite_txt= mascarado;
    icone.classList.remove("bi-eye-slash-fill");
    icone.classList.add("bi-eye-fill");
  } 
  else {
    saldo.textContent =s;
    limite_txt=limite.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL' });

    icone.classList.remove("bi-eye-fill");
    icone.classList.add("bi-eye-slash-fill");
  }
}

function Ativar(el){
  document.querySelectorAll(".nav-link")
  .forEach(a =>{ a.classList.remove("active")
           a.style.backgroundColor='black';
           a.style.color='gray';
           a.style.border.bottom='0px';
           });
 
  el.classList.add("active");
  el.style.backgroundColor='white';
  el.style.color='black';
  el.style.border.bottom= '0px';
 }


function atualizarSaldo(){ 
  s= s.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
  })
}

function atualizarLimi(novoValor){
  limite= (novoValor*0.8)*2;

  limite_txt = limite.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
  })

}

function carregarSaldoInicial(){
  // simulação (no futuro vem do servidor)
  s= 1265
  limite=s
  atualizarSaldo(s);
  atualizarLimi(limite)

  const saldoEl = document.getElementById("Saldo");
  const icone =document.getElementById("btn_olho")

  if(!saldoEl.textContent.includes("R$ ••••") && icone.classList.contains("bi-eye-fill")){
    saldoEl.textContent = "R$ ••••••"; 
  }
  else{
  saldoEl.textContent = `${s}`;
  }
}

function controlarIconeOlho(aba){
  const olho = document.getElementById("btn_olho");

  if(aba === "Financiamentos" || aba === "Emprestimo"){
     olho.style.display = "none"; // esconde
  }  

  else {
    olho.style.display = "inline-block"; // mostra
 
  }
}


function Mostrar_corpo(nome){
  const cardBody = document.getElementById("cardBody"); 
  const olho = document.getElementById("btn_olho");
  let valor=0;
    
  controlarIconeOlho(nome)

  if(nome === "Saldo"){
    if(olho.classList.contains("bi-eye-fill")){
    valor = "R$ ••••••"; 
    }
    else{valor=s 
    }
    
    cardBody.innerHTML = `
      <h1 class="card-title" id="Saldo"  > ${valor} </h1>
      <div id="lista_btn" class=" gap-2">   
      <button type="button">PIX</button>
      <button type="button">PAGAR BOLETO</button>
      <button type="button">CHAVES</button>
    `;

  }

  else if(nome === "Emprestimo"){
  
    cardBody.innerHTML = `
      <h3>Empréstimos</h3>
      <p>Você não possui empréstimos ativos.</p>
    `;
  }

  else if(nome === "Financiamentos"){
    cardBody.innerHTML = `
      <h3>Financiamentos</h3>
      <p>Nenhum financiamento ativo.</p>
    `;
  }

  else{
    cardBody.innerHTML =    `
      <h3>Cartão</h3>
      <p><strong>Limite disponível:
      </strong><h1 id="Limite">${limite_txt}</h1></p>
    `;
  }

}
window.addEventListener("DOMContentLoaded", carregarSaldoInicial);
