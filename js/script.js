let valor1 = 0;     //valor do prato
let valor2 = 0;     //valor da bebida
let valor3 = 0;     //valor da sobremesa
let valorTotal = 0; 
let nomePrato1;
let nomePrato2;
let nomePrato3;

function controleDePedido(id){
    
   

    //caso o id pertença a algum prato
    if (id === "prato1" || id === "prato2" || id === "prato3"){
        //torna todas as bordas brancas .classList.remove("escondido");
        document.querySelector('#prato1').style.border = "3px solid #FFFFFF";
        document.querySelector('#prato2').style.border = "3px solid #FFFFFF";
        document.querySelector('#prato3').style.border = "3px solid #FFFFFF";
        //seleciona a borda do prato e a torna verde
        document.querySelector('#'+id).style.border = "3px solid #32B72F";
        //obter valor do prato
        valor1 = document.querySelector('#'+id+' h4').textContent;
        //separa o R$ do valor e o remover 
        valor1 = valor1.split(" ", 2).splice(1);
        //substituir a virgula por ponto e tornar um float
        valor1 = parseFloat(valor1.toString().replace(',','.')); 
        console.log(valor1);
        nomePrato1 = document.querySelector('#'+id+' h3').textContent;
        document.querySelector('#prato1 .icon').classList.add("escondido");
        document.querySelector('#prato2 .icon').classList.add("escondido");
        document.querySelector('#prato3 .icon').classList.add("escondido");
        document.querySelector('#'+id+' .icon').classList.remove("escondido");
    }
    if (id === "bebida1" || id === "bebida2" || id === "bebida3"){
        document.querySelector('#bebida1').style.border = "3px solid #FFFFFF";
        document.querySelector('#bebida2').style.border = "3px solid #FFFFFF";
        document.querySelector('#bebida3').style.border = "3px solid #FFFFFF";
        document.querySelector('#'+id).style.border = "3px solid #32B72F";
        //obter valor da bebida
        valor2 = document.querySelector('#'+id+' h4').textContent;
        //separa o R$ do valor e o remover 
        valor2 = valor2.split(" ", 2).splice(1);
        //substituir a virgula por ponto e tornar um float
        valor2 = parseFloat(valor2.toString().replace(',','.')); 
        console.log(valor2);
        nomePrato2 = document.querySelector('#'+id+' h3').textContent;
        document.querySelector('#bebida1 .icon').classList.add("escondido");
        document.querySelector('#bebida2 .icon').classList.add("escondido");
        document.querySelector('#bebida3 .icon').classList.add("escondido");
        document.querySelector('#'+id+' .icon').classList.remove("escondido");
    }
    if (id === "sobremesa1" || id === "sobremesa2" || id === "sobremesa3"){
        document.querySelector('#sobremesa1').style.border = "3px solid #FFFFFF";
        document.querySelector('#sobremesa2').style.border = "3px solid #FFFFFF";
        document.querySelector('#sobremesa3').style.border = "3px solid #FFFFFF";
        document.querySelector('#'+id).style.border = "3px solid #32B72F";
        //obter valor da bebida
        valor3 = document.querySelector('#'+id+' h4').textContent;
        //separa o R$ do valor e o remover 
        valor3 = valor3.split(" ", 2).splice(1);
        //substituir a virgula por ponto e tornar um float
        valor3 = parseFloat(valor3.toString().replace(',','.')); 
        console.log(valor3);
        nomePrato3 = document.querySelector('#'+id+' h3').textContent;
        document.querySelector('#sobremesa1 .icon').classList.add("escondido");
        document.querySelector('#sobremesa2 .icon').classList.add("escondido");
        document.querySelector('#sobremesa3 .icon').classList.add("escondido");
        document.querySelector('#'+id+' .icon').classList.remove("escondido");
    }
    valorTotal = valor1+valor2+valor3; //valor total do pedido
    valorTotal = valorTotal.toFixed(2); //float com duas casas após o ponto
    let valorAtual = document.querySelector('.barra-topo h3 span');
    valorAtual.innerHTML = valorTotal;
    if(valor1 > 0 && valor2 > 0 && valor3 > 0){
        
        console.log(valorTotal);
        const elemento = document.querySelector(".barra-inferior button");
        elemento.innerHTML ="<span style='font-size:20px; color: #FFFFFF'>Fechar pedido</span>";
        elemento.style.background = "#32B72F";
    }

}

function fecharPedido(estado){
    let mostrarValor =document.querySelector(".pedido1");
    mostrarValor.innerHTML = nomePrato1+"<span>R$ "+valor1+"</span>";
    mostrarValor =document.querySelector(".pedido2");
    mostrarValor.innerHTML = nomePrato2+"<span>R$ "+valor2+"</span>";
    mostrarValor =document.querySelector(".pedido3");
    mostrarValor.innerHTML = nomePrato3+"<span>R$ "+valor3+"</span>";
    mostrarValor =document.querySelector(".valorTotal span");
    mostrarValor.innerHTML = valorTotal;

    if(valor1 > 0 && valor2 > 0 && valor3 > 0){
        if(estado === 'pedidosOk'){
            const notificacao = document.querySelector(".confirmacao");
            notificacao.classList.remove("escondido");
        }
        if(estado === 'dadosOk'){
            const notificacao = document.querySelector(".confirmacao");
            notificacao.classList.add("escondido");
        }
    }
    else{
        alert("Você precisa selecionar 3 produtos");
    }
}
function enviar(){
    const nome = prompt("digite seu nome!");
    const endereco = prompt("digite seu endereço!");
    let mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: "+nomePrato1+"\n- Bebida: "+nomePrato2+"- Sobremesa: "+nomePrato3+
        "\nno total de R$"+valorTotal;
    if(nome != null && nome != ""){mensagem += "\n pedido em nome de: "+nome};
    if(endereco != null && endereco != ""){mensagem += "\n para entrega: "+endereco}; 
    const url = "https://wa.me/5599999999999?text="+encodeURIComponent(mensagem);
    window.open(url,"_blank");   
    console.log(mensagem);
    const notificacao = document.querySelector(".confirmacao");
    notificacao.classList.add("escondido");
    cancelar();
}
function cancelar(){
    valor1 = 0;
    valor2 = 0;
    valor3 = 0;
    valorTotal = 0;

    let valorAtual = document.querySelector('.barra-topo h3 span');
    valorAtual.innerHTML = valorTotal;

    document.querySelector('#prato1').style.border = "3px solid #FFFFFF";
    document.querySelector('#prato2').style.border = "3px solid #FFFFFF";
    document.querySelector('#prato3').style.border = "3px solid #FFFFFF";

    document.querySelector('#bebida1').style.border = "3px solid #FFFFFF";
    document.querySelector('#bebida2').style.border = "3px solid #FFFFFF";
    document.querySelector('#bebida3').style.border = "3px solid #FFFFFF";
   
    document.querySelector('#sobremesa1').style.border = "3px solid #FFFFFF";
    document.querySelector('#sobremesa2').style.border = "3px solid #FFFFFF";
    document.querySelector('#sobremesa3').style.border = "3px solid #FFFFFF";

    document.querySelector('#prato1 .icon').classList.add("escondido");
    document.querySelector('#prato2 .icon').classList.add("escondido");
    document.querySelector('#prato3 .icon').classList.add("escondido");

    document.querySelector('#bebida1 .icon').classList.add("escondido");
    document.querySelector('#bebida2 .icon').classList.add("escondido");
    document.querySelector('#bebida3 .icon').classList.add("escondido");

    document.querySelector('#sobremesa1 .icon').classList.add("escondido");
    document.querySelector('#sobremesa2 .icon').classList.add("escondido");
    document.querySelector('#sobremesa3 .icon').classList.add("escondido");
    const notificacao = document.querySelector(".confirmacao");
    notificacao.classList.add("escondido");
}